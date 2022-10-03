import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import Navigation from "./components/pages/Navigation";
import About from "./components/pages/About";
import SavedPlaces from "./components/pages/SavedPlaces";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Logo from "./components/images/ILocationLogo-removebg-preview.png";

function App() {
  const [user, setUser] = useState({});
  var userObject;
  useEffect(() => {
    function handleCallbackResponse(response) {
      userObject = jwt_decode(response.credential);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      document.getElementById("logintext").hidden = true;
      document.getElementById("imglogin").hidden = true;
      // console.log(userObject);
    }

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "242411408051-3448jpj8n8tb78ttlb64u46260oikv54.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="signInDiv" className="signInDiv">
        {" "}
      </div>
      <div id="logintext" className="logintext">
        In order to use the app, please log in with your Google account
      </div>
      <div id="imglogin" className="imglogin">
        <img alt="" src={Logo}></img>
      </div>

      {Object.keys(user).length !== 0 && (
        <>
          <Navbar loginstate={userObject} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/map" element={<Map />}></Route>
            <Route path="/navigation" element={<Navigation />}></Route>
            <Route path="/SavedPlaces" element={<SavedPlaces />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
