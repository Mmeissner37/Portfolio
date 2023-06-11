import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Portfolio</b>
          </Link>
        </li>
      </ul>
      <ul className="buttons">
        <div className="buttons">
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button onClick={() => navigate('/projects')}>Projects</button></li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
