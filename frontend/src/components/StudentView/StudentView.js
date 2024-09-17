import React from 'react';
import KnowledgeCheck from './KnowledgeCheck';
import './StudentView.css';

const StudentView = () => {
    return (
        <div className="student-container">
            <h2>Student's Knowledge Check Page</h2>
            <KnowledgeCheck />
        </div>
    );
};

export default StudentView;
