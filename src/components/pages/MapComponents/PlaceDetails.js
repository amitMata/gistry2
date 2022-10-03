import React from "react";
import { useState } from "react";

import "./PlaceDetails.css";

export default function PlaceDetails({ places }) {
  // const [savedPlace, setSavedPlace] = useState([]);
  var savedPlaces = [];

  const loaderLocal = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : []; // new

  const [saved, setSaved] = useState(loaderLocal);

  savedPlaces = saved;

  // console.log(places);
  var nameList;
  if (places) {
    nameList = places.filter((place) => {
      return place.name;
    });
  }

  if (places) {
    nameList = nameList.slice(0, 15).map((place) => {
      // console.log(place);
      return (
        <div className="scroll">
          <div className="card">
            <ol>
              <b>{place.name}</b>
              <br></br> Rating: <b>{place.rating}</b>⭐<br></br>
              {place.ranking}
              <br></br>
              Adress: <b>{place.address}</b> <br></br>
              Phone Number: <b>{place.phone}</b>
              <br></br>
              <a href={place.website} target="_blank">
                {place.name} Website's Link
              </a>
              <br></br>
              {place.photo ? (
                <img src={place.photo.images.small.url}></img>
              ) : (
                <img src="http://www.countriesandcultures.com/wp-content/uploads/2018/04/cgratitude1-256x256.jpg"></img>
              )}
              <br></br>
              <br></br>
              <div className="buttons">
                <button
                  onClick={() => {
                    // console.log(savedPlaces);
                    savedPlaces.push(place);
                    localStorage.setItem("list", JSON.stringify(savedPlaces));
                    console.log(savedPlaces);
                  }}
                >
                  <img
                    className="imagebutton"
                    src="https://i.ibb.co/V9cSYZP/icons8-bookmark-outline-24.png"
                    alt=""
                  ></img>
                </button>
                <button
                  onClick={() => {
                    // console.log(savedPlaces);
                    savedPlaces.push(place);
                    localStorage.setItem("list", JSON.stringify(savedPlaces));
                    console.log(savedPlaces);
                  }}
                >
                  <img
                    className="imagebutton"
                    src="https://i.ibb.co/qdWMwLK/icons8-direction-32.png"
                    alt=""
                  ></img>
                </button>
              </div>
            </ol>
          </div>
        </div>
      );
    });
  }

  // console.log(nameList);
  return <ul>{nameList}</ul>;
}
