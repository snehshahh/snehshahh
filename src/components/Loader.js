import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay d-flex align-items-center justify-content-center">
      <div className="loader-container position-relative">
        {/* Outer spinning circle */}
        <div className="outer-circle position-absolute border rounded-circle"></div>
        
        {/* Inner spinning circle */}
        <div className="inner-circle position-absolute border rounded-circle"></div>
        
        {/* Center dot */}
        <div className="center-dot position-absolute rounded-circle"></div>
        
        {/* Loading text */}
        <span className="loading-text position-absolute">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
