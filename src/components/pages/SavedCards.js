import React from "react";
import "./SavedCards.css";

export default function SavedCards({ savedPlaceFromLocalStorage }) {
  savedPlaceFromLocalStorage = savedPlaceFromLocalStorage.map(() => {
    return (
      <div class="savedCards" style={{ backgroundColor: "#6fecd3" }}>
        <div className="container">asdasdasd</div>
      </div>
    );
  });

  return savedPlaceFromLocalStorage;
}
