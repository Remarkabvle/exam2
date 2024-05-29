import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AboutGet from "../../components/abuotget/AboutGet";
import "./Admin.scss";
import ad from "../../assets/AD.png";
import add from "../../assets/ADD.png";

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
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="admin-panel container">
        <h2>How can help you ?</h2>
        <div className="admin-panel-content">
          <div className="admin-panel-header">
            <h1>Admin panel</h1>
            <div className="admin-panel-information">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
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
      <div
        className="container-map container"
        // style={{  width:"1200px",  height:"450px", maxWidth: "800px",  margin: "0 auto" }}
      >
        <iframe
          className="map__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043861!2d69.20123767653914!3d41.28551820230703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1716916261951!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="locations-container container">
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
          <img src={ad} alt="Contact Us" className="image" />
        </div>
      </div>
      <AboutGet />
    </>
  );
};

export default Admin;
