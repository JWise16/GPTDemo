import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate file upload response
        setTimeout(() => {
            setMessage('File uploaded successfully');
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} className="file-input" />
            <button type="submit" className="button">Upload</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default UploadForm;
