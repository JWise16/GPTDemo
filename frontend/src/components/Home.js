import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import '../App.css';  // Ensure correct import path for App.css

const Home = () => {
    return (
        <div className="home-container">
            <h1>Knowledge Checks with Brain</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/professor" className="button">
                            <FontAwesomeIcon icon={faChalkboardTeacher} /> Professor
                        </Link>
                    </li>
                    <li>
                        <Link to="/student" className="button">
                            <FontAwesomeIcon icon={faUserGraduate} /> Student
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
