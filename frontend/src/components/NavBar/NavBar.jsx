import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";


const Navbar = () => {
  // const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <div className="navBar">
        <div className="buttons">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate('/myjourney')}>About</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
    </div>
  );
};

export default Navbar;
