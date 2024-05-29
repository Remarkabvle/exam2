import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-image-wrapper">
        <div className="loading-image"></div>
      </div>
      <div className="loading-info-wrapper">
        <div className="loading-badge"></div>
        <div className="loading-title"></div>
        <div className="loading-rating"></div>
        <div className="loading-pricing"></div>
        <div className="loading-description"></div>
        <div className="loading-size-selection"></div>
        <div className="loading-controls"></div>
        <div className="loading-meta"></div>
      </div>
    </div>
  );
};

export default Loading;
