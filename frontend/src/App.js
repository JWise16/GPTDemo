import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProfessorView from './components/ProfessorView/ProfessorView';
import StudentView from './components/StudentView/StudentView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/professor" element={<ProfessorView />} />
                <Route path="/student" element={<StudentView />} />
            </Routes>
        </Router>
    );
}

export default App;
