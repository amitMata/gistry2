import React from "react";
import { useState, useRef } from "react";
import "./Navigation.css";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

export default function Navigation() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAJTb88TP6j-i1yQuOVVeGWH8Qe20Esq48",
    libraries: ["places"],
  });

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, SetDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    SetDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    SetDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div>
      <div className="cardSearch">
        <div className="Searching">
          {" "}
          <Autocomplete>
            <input
              className="searchinput"
              style={{ width: "340px", height: "30px" }}
              type="text"
              placeholder="   From..."
              ref={originRef}
            ></input>
          </Autocomplete>
          <Autocomplete>
            <input
              className="searchinput"
              style={{ width: "340px", height: "30px" }}
              type="text"
              placeholder="   To..."
              ref={destinationRef}
            ></input>
          </Autocomplete>
          <br></br>Distance {"(KMs)"}: {distance}
          <br></br>Duration {"(Driving)"}: {duration}
          <br></br>
          <br></br>
          <button className="RouteButton" onClick={calculateRoute}>
            Calculate Route
          </button>
          <button className="RouteButton" onClick={clearRoute}>
            Clear
          </button>
        </div>
      </div>
      <div className="mapNav">
        <GoogleMap
          center={{
            lat: 32.0853,
            lng: 34.7818,
          }}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={{ lat: 32.0853, lng: 34.7818 }} />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
