import React, { useState } from 'react';
import UploadForm from './UploadForm';
import './ProfessorView.css';

const ProfessorView = () => {
    const [questions, setQuestions] = useState([]);

    const handleUpload = (newQuestions) => {
        setQuestions(newQuestions || []);
    };

    return (
        <div className="main-container">
            <h2>Professor's Upload Page</h2>
            <UploadForm onUpload={handleUpload} />
            <h2>Preview Knowledge Check</h2>
            {questions.length > 0 && (
                <div>
                    <h3>Preview Generated Questions</h3>
                    <ul className="question-list">
                        {questions.map((question, index) => (
                            <li key={index} className="question-item">{question}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfessorView;
