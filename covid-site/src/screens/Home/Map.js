import React from "react";

const mapStyles = {
  backgroundImage: 'url("covid_map.png")',
  height: '834px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default () => (
  <div style={mapStyles}></div>
);