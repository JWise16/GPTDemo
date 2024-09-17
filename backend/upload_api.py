import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
from openai import OpenAI, OpenAIError

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/api/upload', methods=['POST'])
@cross_origin()  # Ensure this route allows cross-origin requests
def upload_files():
    if 'files' not in request.files:
        app.logger.error('No file part')
        return jsonify({'error': 'No file part in the request'}), 400

    files = request.files.getlist('files')

    if not files:
        app.logger.error('No files detected')
        return jsonify({'error': 'No files detected'}), 400

    contents = []
    for file in files:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        try:
            file.save(filepath)
            app.logger.debug(f'File saved to {filepath}')
            with open(filepath, 'r') as f:
                file_content = f.read()
                if len(file_content) == 0:
                    app.logger.error(f'File {filename} is empty after saving.')
                contents.append(file_content)
                app.logger.debug(f'File content read: {file_content[:100]}...')  # Log first 100 chars
        except Exception as e:
            app.logger.error(f'Error handling file {filename}: {e}')
            return jsonify({'error': f'Error handling file {filename}'}), 500

    full_content = ' '.join(contents)
    app.logger.debug(f'Full content combined: {full_content[:200]}...')  # Log first 200 chars
    questions = generate_questions_from_content(full_content)

    return jsonify({'questions': questions}), 200

def generate_questions_from_content(content):
    try:
        app.logger.debug(f'Sending content to OpenAI: {content[:200]}...')  # Log first 200 chars
        response = client.chat.completions.create(
            model="gpt-4o",  # Ensure you're using a valid OpenAI model name
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Generate questions based on the following content:\n\n{content}"}
            ]
        )
        questions = response.choices[0].message.content.strip().split('\n')
        app.logger.debug(f'Questions generated: {questions}')  # Log generated questions
        return questions
    except OpenAIError as e:
        app.logger.error(f'Error generating questions: {e}')
        return []

if __name__ == "__main__":
    app.run(debug=True)
