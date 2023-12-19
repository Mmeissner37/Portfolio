import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";


const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className="navBar">
        <div className="buttons">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
            {/* <button onClick={() => navigate('/myjourney')}>About</button> */}
            {/* <button onClick={() => navigate('/contact')}>Contact</button> */}
        </div>
    </div>
  );
};

export default Navbar;
