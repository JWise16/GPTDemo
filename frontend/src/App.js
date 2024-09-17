import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProfessorView from './components/ProfessorView/ProfessorView';
import StudentView from './components/StudentView/StudentView';
import './App.css';

function App() {
    return (
        <Router>
            <header>
                <h1>GPTDemo</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/professor">Professor</Link>
                    <Link to="/student">Student</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/professor" element={<ProfessorView />} />
                <Route path="/student" element={<StudentView />} />
            </Routes>
        </Router>
    );
}

export default App;
