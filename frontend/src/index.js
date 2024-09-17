import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { worker } from './mocks/browser';

// Ensure the worker starts properly
// if (process.env.NODE_ENV === 'development') {
//     worker.start();
// }

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
