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
      <div>
        <ul className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Portfolio</b>
          </Link>
        </ul>
        <div className="buttons">
          <ul><button onClick={() => navigate("/")}>Home</button></ul>
          <ul><button onClick={() => navigate('/projects')}>Projects</button></ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
