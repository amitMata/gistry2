import React from "react";
import "./Home.css";
import Logo from "../images/ILocationLogo-removebg-preview.png";

export default function Home() {
  return (
    <div className="homepagesettings">
      <img className="image" src={Logo} alt=""></img>
      <br /> <br />
      <div className="textHome">
        This web application was built by{" "}
        <b>Tal Beno, Dvir Harazi and Amit Matalon</b>
        <br></br>
        as part of "GIS Application Development Course" with the teaching and
        guidence of <b>Mr. Mark Israeli.</b> <br />
        This web application will assist users finding businesses according to
        their searching creteria, and find the best way of navigating to the
        destination from any location of their liking. <br />
        The entire Specification document can be found in this{" "}
        <a
          href="https://docs.google.com/document/d/1ldih4PlHS6MODR1o0uikoZhpGLt2S8MgSAgYlBS5LHw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  );
}
