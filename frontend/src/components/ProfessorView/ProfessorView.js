import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ReactMarkdown from 'react-markdown';

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
    <div>
      <h1>Professor's View</h1>
      <UploadForm onUploadSuccess={handleUploadSuccess} onUploadStart={handleUploadStart} />
      {loading ? <div className="loading-spinner"></div> : null}
      <div className="questions-container">
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
