import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './KnowledgeCheck.css';

const KnowledgeCheck = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questions');
                console.log('API Response:', response.data);  // Log to confirm structure
                setQuestions(response.data.questions);  // Adjust to match actual response
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
            <div className="questions-container">
                {questions.map((question, index) => (
                    <div key={index} className="question">
                        <ReactMarkdown>{question}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KnowledgeCheck;
