import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './KnowledgeCheck.css';

const KnowledgeCheck = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await axios.get('/api/questions');
                setQuestions(data);
            } catch (err) {
                setError('Failed to fetch questions.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) return <p>Loading questions...</p>;
    if (error) return <p>{error}</p>;

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
