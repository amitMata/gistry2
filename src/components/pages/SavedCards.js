import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SavedCards.css";

export default function SavedCards({ savedPlaceFromLocalStorage }) {
  const [savedDest, setSavedDest] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/navigation`;
    navigate(path);
  };

  console.log(savedPlaceFromLocalStorage);
  savedPlaceFromLocalStorage = savedPlaceFromLocalStorage.map(
    ({ name, address, rating, website }) => {
      return (
        <div class="savedCards" style={{ backgroundColor: "#a1e7d9" }}>
          <div className="container">
            Name: <b>{name}</b>
            <br></br>
            Address: <b>{address}</b>
            <br></br>
            Rating: <b>{rating}</b>
            <br></br>
            Website:{" "}
            <b>
              <a href={website} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </b>
            <br></br>
            <button
              onClick={() => {
                setSavedDest(address);
                localStorage.setItem("destination", JSON.stringify(address));
                console.log(savedDest);
                routeChange();
              }}
            >
              <img
                className="imagebutton"
                src="https://i.ibb.co/qdWMwLK/icons8-direction-32.png"
                alt=""
              ></img>
            </button>
          </div>
        </div>
      );
    }
  );

  return savedPlaceFromLocalStorage;
}
