from flask import Blueprint, request, jsonify
import os

main = Blueprint('main', __name__)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@main.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    file.save(os.path.join(UPLOAD_FOLDER, file.filename))
    return 'File uploaded successfully', 200

@main.route('/api/questions', methods=['GET'])
def get_questions():
    # For the demo, return a static list of questions
    questions = [
        "What is computational biology?",
        "Explain the central dogma of molecular biology.",
        "Describe the significance of genome sequencing."
    ]
    return jsonify(questions)
