import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
        } catch (error) {
            alert('Error uploading file');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} className="file-input" />
            <button type="submit" className="button">Upload</button>
        </form>
    );
};

export default UploadForm;
