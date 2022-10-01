import React from "react";
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" end> Home </NavLink>
            <NavLink to="/favs"> Favoritos </NavLink>
        </nav>
    );
};

export default Navbar;
