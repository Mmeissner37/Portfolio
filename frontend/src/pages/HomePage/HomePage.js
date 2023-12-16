import React from "react";
import './HomePage.css';
import PortfolioImage from "../../assets/PortfolioImage.jpg";
import Git from '../../assets/github.png'
import Linked from '../../assets/Linkedin.png'

const HomePage = () => {

    return (
        <div className="home-page">
            <div className="container">
                <div className="header-home">
                    <h1 className="intro">Michaela P. Meissner</h1>
                    <div id="scroll-container">
                        <div id="scroll-text">
                            <h2>Software Developer</h2>
                        </div>
                    </div>
                    <img className="profile-image" src= {PortfolioImage} height='400px' width='280px' alt='Profile' />
                </div>
                <div className="icons">
                    <div className="git-icon">
                        <ul>
                            <a href="https://github.com/Mmeissner37" >
                                <img className="icons" src={Git} height='35px' width='35px' alt='github icon'/>
                            </a>
                        </ul>
                    </div>
                    <div className="link-icon">
                        <ul>
                            <a href="https://www.linkedin.com/in/michaela-meissner-b82b6493/">
                                <img className="icons" src={Linked} height='35px' width='35px' alt='linkedin icon'/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
