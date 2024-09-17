import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ReactMarkdown from 'react-markdown';
import './ProfessorView.css';

function ProfessorView() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUploadSuccess = (generatedQuestions) => {
    setQuestions(generatedQuestions);
    setLoading(false); // Hide loading icon after successful upload
  };

  const handleUploadStart = () => {
    setLoading(true); // Show loading icon when upload starts
  };

  return (
    <div className="professor-container">
      <h1>Professor's View</h1>
      <div className="upload-section">
        <UploadForm onUploadSuccess={handleUploadSuccess} onUploadStart={handleUploadStart} />
        {loading ? <div className="loading-spinner"></div> : null}
      </div>
      <div className="questions-container">
        {questions.length > 0 && <p>Here are some questions based on the content provided:</p>}
        {questions.map((question, index) => (
          <div key={index} className="question">
            <ReactMarkdown>{question}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessorView;
