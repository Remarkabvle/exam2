import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Admin.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import ad from '../../assets/AD.png'
import add from '../../assets/ADD.png'
import AboutGet from "../../components/abuotget/AboutGet";

const locations = [
  {
    title: "Office",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@evara.com",
  },
  {
    title: "Studio",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@evara.com",
  },
  {
    title: "Shop",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@evara.com",
  },
];

const Admin = () => {
  return (
    <>
      <div className="admin-panel container">
        <h2>How can help you ?</h2>
        <div className="admin-panel-content">
          <div className="admin-panel-header">
            <h1>Admin panel</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="admin-panel-sections">
            <div className="section">
              <h3>01. Visit Feedback</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="section">
              <h3>02. Employer Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="section highlight">
              <h3>03. Billing Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="section">
              <h3>04. General Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <img src={add} alt="" />
      </div> */}
      <div className="locations-container container container">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <h2>{location.title}</h2>
            <p>{location.address}</p>
            <p>{location.city}</p>
            <p>Phone: {location.phone}</p>
            <p>Email: {location.email}</p>
            <button className="view-map-btn">View map</button>
          </div>
        ))}
      </div>
      <div className="contact-form-container container">
        <form className="contact-form">
          <h2 className="contact-form-title">Drop Us a Line</h2>
          <p className="contact-form-description">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input-field"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              className="text-area"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="contact-image">
          <img
            src={ad}
            alt="Contact Us"
            className="image"
          />
        </div>
      </div>
      <AboutGet/>
    </>
  );
};

export default Admin;
