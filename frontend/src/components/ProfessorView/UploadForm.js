import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ onUpload }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        console.log('Files selected:', e.target.files);
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        console.log('Submitting files:', files);

        for (let i = 0; i < files.length; i++) {
            console.log(`Appending file: ${files[i].name} with size ${files[i].size} bytes`);
            formData.append('files', files[i]);
        }

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response from server:', response.data);
            onUpload(response.data.questions);
        } catch (error) {
            console.error('Error uploading files:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" multiple name="files" onChange={handleFileChange} className="file-input" />
            <button type="submit" className="button">Upload</button>
        </form>
    );
};

export default UploadForm;
