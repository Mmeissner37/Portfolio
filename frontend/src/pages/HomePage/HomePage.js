import React from "react";
import './HomePage.css'
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div className="home-page">
            <div className="container">
                <div className="header-home">
                    <h1 className="intro">Michaela Meissner's Portfolio</h1>
                    <h2>Software Developer</h2>
                </div>
                <button onClick= {() => navigate('projects')}>Projects</button>
            </div>
            <div className="container">
                <h2>This page is currently under construction</h2>
            </div>
        </div>

    );
};

export default HomePage;
