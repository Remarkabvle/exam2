import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const NavSearchResults = ({ data }) => {
  const renderSearchItems = data?.map((item) => (
    <NavLink to={`/singlePage/${item.id}`} key={item.id}>
      <div className="nav-search-card">
        <img src={item.images[0]} width={40} alt={item.title} />
        <div className="search-result-details">
          <span>{item.title}</span>
          <p>{item.category}</p>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className="nav-search-results">
      {data && data.length === 0 ? (
        <h3>No information found</h3>
      ) : (
        renderSearchItems
      )}
    </div>
  );
};

export default NavSearchResults;
