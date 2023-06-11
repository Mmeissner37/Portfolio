import React from "react";
import './HomePage.css'
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div className="container">
            <h1 className="intro">Michaela Meissner's Portfolio</h1>
            <h2>Software Developer</h2>
            <button onClick= {() => navigate('projects')}>Projects</button>
        </div>
    );
};

export default HomePage;
