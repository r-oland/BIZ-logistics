// Components==============
import location from "assets/Location.svg";
import GoogleMapReact from "google-map-react";
import React from "react";
import styled from "styled-components";
// =========================

const MapWrapper = styled.div`
  width: 100%;
  height: 50vw;

  @media screen and (min-width: 900px) {
    height: 100%;
  }
`;

const Location = styled.img`
  position: absolute;
  transform: translate(-50%, -100%);
  width: 25px;
`;

const defaultProps = {
  center: {
    lat: 51.49992,
    lng: 5.48829
  },
  zoom: 13
};

const GoogleMap = () => (
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Location src={location} lat={51.49992} lng={5.48829} alt="location" />
    </GoogleMapReact>
  </MapWrapper>
);

export default GoogleMap;
