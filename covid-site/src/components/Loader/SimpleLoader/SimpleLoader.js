import React from 'react';
import './SimpleLoader.css';

const loaderStyles = {
  display: 'table',
  height: '100vh',
  width: '100%',
  zIndex: 100,
  background: "rgba(0, 0, 0, 0.3)",
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
};

const imageContainer = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const imageStyle = {
  width: '100px',
  display: 'block',
  margin: '0 auto',
};

export default () => (
  <div style={loaderStyles}>
    <div className="SimpleLoader Animated Effect" style={imageContainer}>
      <img style={imageStyle} src="/logo_with_name.png" alt="My Covid Risk" />
    </div>
  </div>
);