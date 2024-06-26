import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/lgo.svg"; 
import NavSearchResults from "./SearchModal";
import mainUrl from '../../api';

const Navbar = () => {

  const isLogin = localStorage.getItem("x-auth-token");
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!value.trim()) return;
    mainUrl
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err));
  }, [value]);

  return (
    <>
      <header className="header container">
        <div className="header-left">
          <a href="/">About Us</a>
          <a href="/">My Account</a>
          <a href="/">Wishlist</a>
          <a href="/">Order Tracking</a>
        </div>
        <div className="header-right">
          <span>
            Need help? Call Us: <strong>+1800 900</strong>
          </span>
          <a href="/" className="language">
            English
          </a>
          <span className="currency">USD</span>
        </div>
      </header>
      <div className="custom-header container">
        <div className="custom-header-left">
          <img src={logo} alt="Nest Logo" className="custom-logo" />
        </div>
        <div className="custom-header-middle">
          <select className="custom-categories">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            className="custom-search-input"
            placeholder="Search for items..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value && <NavSearchResults data={data} />}
        </div>
        <div className="custom-header-right">
          <button className="custom-location-button">Your Location</button>
          <a href="/" className="custom-header-link">
            <i className="fas fa-exchange-alt"></i> Compare
            <span className="custom-badge">3</span>
          </a>
          <a href="/" className="custom-header-link">
            <i className="fas fa-heart"></i> Wishlist
            <span className="custom-badge">4</span>
          </a>
          <a href="/" className="custom-header-link">
            <i className="fas fa-shopping-cart"></i> Cart
          </a>
          <NavLink
            className="custom-header-link"
            to={isLogin ? "/admin/create" : "/register"}
          >
            {isLogin ? "Account" : "Login"}
          </NavLink>
        </div>
      </div>
      <div className="header-container container">
        <div className="header-top">
          <div className="header-nav">
            <button className="nav-button">Browse All Categories</button>
            <nav className="main-nav">
              <a href="/deals" className="nav-link">
                Deals
              </a>
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/" className="nav-link">
                About
              </a>
              <a href="/" className="nav-link">
                Shop
              </a>
              <a href="/" className="nav-link">
                Vendors
              </a>
              <a href="/" className="nav-link">
                Mega Menu
              </a>
              <a href="/" className="nav-link">
                Blog
              </a>
              <a href="/" className="nav-link">
                Pages
              </a>
              <a href="/" className="nav-link">
                Contact
              </a>
            </nav>
          </div>
          <div className="header-contact">
            <span className="contact-number">1900 - 888</span>
            <span className="contact-info">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
