import React, { useEffect, useState, useRef } from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";

import { getPlacesData } from "./API/index";
import PlaceDetails from "./MapComponents/PlaceDetails";

import { Autocomplete } from "@react-google-maps/api";

import useStyles from "./MapComponents/MapStyles";

export default function Map() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 32.0853,
    lng: 34.7818,
  });
  const [bounds, setBounds] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  const originRef = useRef();

  useEffect(() => {
    // console.log(coordinates, bounds);
    getPlacesData(bounds).then((data) => {
      // console.log(data);
      setPlaces(data);
      // console.log(places);
    });
  }, [coordinates, bounds]);

  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  // const coordinates = { lat: 0, lng: 0 };

  return (
    <div>
      <div className="SearchingBar">
        {/* <button>sadasd</button> */}
        <div className="inputformap">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              style={{ width: "140%", height: "20%", borderRadius: "30px" }}
              ref={originRef}
            ></input>
          </Autocomplete>
        </div>
      </div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAJTb88TP6j-i1yQuOVVeGWH8Qe20Esq48" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </div>

      <div className="placesOnMap">
        <PlaceDetails places={places} />
      </div>
    </div>
  );
}

/* <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }} />
      <Grid item xs={12} md={4}>
        <List />
      </Grid>
      <Grid item xs={12} md={8}>
        <MapG />
      </Grid>
      <Grid /> */
// const coordinates = { lat: 0, lng: 0 };
{
  /* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAJTb88TP6j-i1yQuOVVeGWH8Qe20Esq48" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact> */
}
