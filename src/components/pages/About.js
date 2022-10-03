import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="textHome">
      <br></br>
      This web application was built as part of "GIS Application Development
      Course" with the teaching and guidence of Mr. Mark Israeli.
      <br></br>
      This application will assist its users to find their favorite places with
      an interactive map, giving them information about both the place and the
      navigation from their spot.
      <br></br>
      <br></br>
      The full source code of this app can be found in this link:
      <br></br>
      <div className="imgaboutpage" style={{}}>
        <a
          href="https://github.com/amitMata/gistry2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.simpleimageresizer.com/_uploads/photos/086401eb/GitHub-Mark_1_80x80.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}
