import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';

const Portfolio = () => (
    <div className = "portfolio-container">
        <div className = "description">
            <h1>My Work</h1>
            <p>Check out the following things I've done</p>
        </div>
        <div className = "projects">
            <Project
                projectName = {"Travel Blog"}
            />
            <Project
                projectName = {"The Bromleys Band Page"}
            />
            <Project
                projectName = {"Cuppa Tea"}
            />
            <Project
                projectName = {"Indecision App"}
            />
            <Project
                projectName = {"Expensify App"}
            />
            <Project
                projectName = {"Weather App"}
            />
            <Project
                projectName = {"Spain Resort Training App"}
            />
        </div>
    </div>
);

export default Portfolio;