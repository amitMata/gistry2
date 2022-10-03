import React from "react";
import SavedCards from "./SavedCards";
import { useNavigate } from "react-router-dom";

import "./SavedPlaces.css";

export default function SavedPlaces() {
  var savedPlaceFromLocalStorage = [];

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/SavedPlaces`;
    navigate(path);
  };

  // console.log(JSON.parse(localStorage.getItem("list")));

  if (JSON.parse(localStorage.getItem("list")) === null) {
    return (
      <div
        className="SavedPlaces"
        style={{
          backgroundColor: "#94ebd9",
          height: "100vh",
          color: "#4c9284",
        }}
      >
        <div
          style={{
            height: "auto",
            margin: "0, auto",
            padding: "10px",
            top: "35%",
            position: "relative",
            fontSize: "200%",
          }}
        >
          <b>
            No places were saved! Make sure to save your favorite places at the
            Map!
          </b>
        </div>
      </div>
    );
  } else {
    savedPlaceFromLocalStorage = JSON.parse(localStorage.getItem("list"));
    console.log(savedPlaceFromLocalStorage);
  }

  // console.log(savedPlaceFromLocalStorage);

  return (
    <div
      className="SavedPlaces"
      style={{ backgroundColor: "#6fecd3", height: "100vh" }}
    >
      <div className="cardsPlacement">
        <SavedCards savedPlaceFromLocalStorage={savedPlaceFromLocalStorage} />
      </div>
      <button
        className="resetButton"
        onClick={() => {
          localStorage.clear();
          routeChange();
        }}
      >
        Reset Favorites
      </button>
    </div>
  );
}
