import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './KnowledgeCheck.css';

const KnowledgeCheck = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data } = await axios.get('/api/questions');
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h3>Knowledge Check</h3>
            <ul className="question-list">
                {questions.map((question, index) => (
                    <li key={index} className="question-item">{question}</li>
                ))}
            </ul>
        </div>
    );
};

export default KnowledgeCheck;
