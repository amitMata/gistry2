import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import Logo from "./images/ILocationLogo-removebg-preview.png";

const Navbar = ({ user, setUser }) => {
  // console.log(user);
  function handleSignOut(event) {
    console.log(user);
    setUser({});
    document.getElementById("logintext").hidden = true;
    window.location.href = "/";
  }

  return (
    <nav className="nav">
      <Link to="/home" className="homepagelink">
        ILocation
      </Link>
      <ul>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/navigation">Navigation</Link>
        </li>
        <li>
          <Link to="/SavedPlaces">Saved Places</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <div className="navbarbutton">
            <button onClick={(e) => handleSignOut()}>Sign Out</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
