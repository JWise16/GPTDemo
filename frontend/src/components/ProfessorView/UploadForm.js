import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

function UploadForm({ onUploadSuccess, onUploadStart }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    onUploadStart(); // Indicate that upload is starting

    const formData = new FormData();
    formData.append('files', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      onUploadSuccess(response.data.questions); // Process and display the generated questions
    } catch (error) {
      console.error('Error uploading file:', error);
      onUploadSuccess([]); // Ensure loading is stopped even on error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadForm;
