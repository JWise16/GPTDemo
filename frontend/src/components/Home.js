import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to GPTDemo</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/professor">Professor</Link>
                    </li>
                    <li>
                        <Link to="/student">Student</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
