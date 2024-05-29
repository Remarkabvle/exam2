import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="product-skeleton-container">
      <div className="skeleton-image-section">
        <div className="skeleton-image"></div>
      </div>
      <div className="skeleton-info-section">
        <div className="skeleton-badge"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-rating"></div>
        <div className="skeleton-pricing"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-size-selection"></div>
        <div className="skeleton-controls"></div>
        <div className="skeleton-meta"></div>
      </div>
    </div>
  );
};

export default Loading;
