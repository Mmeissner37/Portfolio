import React from "react";
import './HomePage.css'
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div className="home-page">
            <div className="container">
                <div className="header-home">
                    <h1 className="intro">Michaela P. Meissner</h1>
                    <h2>Software Developer</h2><br></br>
                    {/* <img className="profile-image" src= "../../../assets/Portfolio-Image.png" height='300px' width='200px' alt='Profile' /> */}
                    <img className="profile-image" src='https://animaldentalspecialist.com/wp-content/uploads/2021/12/michaela-solo-v1.jpg' height='300px' width='200px' alt='Profile' />
                </div>
                {/* <button onClick= {() => navigate('/projects')}>Projects</button> */}
            </div>
            <div className="container">
                <h2>This page is currently under construction</h2>
            </div>
        </div>

    );
};

export default HomePage;
