import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink to="/" className="not-found-button">
          Go to Homepage
        </NavLink>
      </div>
      <div className="not-found-footer">
        <p>
          Need assistance? <a href="mailto:support@example.com">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
