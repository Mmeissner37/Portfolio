import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css";

// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";


const Navbar = () => {
  // const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <div className="navBar">
      {/* <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Portfolio</b>
          </Link>
        </li> */} 
        <div className="buttons">
          {/* <li> */}
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate('/aboutme')}>My Journey</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
          {/* </li> */}
        </div>
        {/* </ul> */}
    </div>
  );
};

export default Navbar;
