import React from 'react';
import './Loader.css';

const loaderStyles = {
  display: 'table',
  height: '100vh',
  width: '100%',
  zIndex: 100,
  background: "linear-gradient(270deg, #512ed4, #3b219e)",
  overflow: 'hidden',
};

const imageContainer = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const imageStyle = {
  width: '300px',
  display: 'block',
  margin: '0 auto',
};

export default () => (
  <div style={loaderStyles}>
    <div className="Loader Animated Effect" style={imageContainer}>
      <img style={imageStyle} src="/logo_with_name.png" alt="My Covid Risk" />
    </div>
  </div>
);