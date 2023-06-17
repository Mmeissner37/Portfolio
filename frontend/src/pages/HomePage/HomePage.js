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
                    <h2>Software Developer</h2><br></br>
                    <img className="profile-image" src= {PortfolioImage} height='300px' width='200px' alt='Profile' />
                </div>
                <div className="icons">
                    {/* <div className="grid-icon"> */}
                    <div className="git-icon">
                        <ul>
                            <a href="https://github.com/Mmeissner37" >
                                <img className="icons" src={Git} height='25px' width='25px' alt='github icon'/>
                            </a>
                        </ul>
                    </div>
                    <div className="link-icon">
                        <ul text-decoration="none">
                            <a href="https://www.linkedin.com/in/michaela-meissner-b82b6493/">
                                <img className="icons" src={Linked} height='25px' width='25px' alt='linkedin icon'/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
