import React from "react";
import "./AboutGet.scss";
import ban from "../../assets/ban.png";
import i1 from "../../assets/icons/i1.svg";
import i2 from "../../assets/icons/i2.svg";
import i3 from "../../assets/icons/i3.svg";
import i4 from "../../assets/icons/i4.svg";
import i5 from "../../assets/icons/i5.svg";


const features = [
  {
    icon: i1,
    title: "Best prices & offers",
    description: "Orders $50 or more",
  },
  {
    icon: i2,
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    icon:i3,
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    icon: i4,
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    icon: i5,
    title: "Easy returns",
    description: "Within 30 days",
  },
];

const AboutGet = () => {
  return (
    <section>
      <div className="about-get-container  container">
        <div className="text-content">
          <h1>Stay home & get your daily needs from our shop</h1>
          <p>Start Your Daily Shopping with Nest Mart</p>
          <div className="subscription-form">
            <input className="oneni" type="email" placeholder="Your email address" />
            <button className="soka">Subscribe</button>
          </div>
        </div>
        <div className="image-content">
          <img src={ban} alt="Delivery man with groceries" />
        </div>
      </div>
      <div className="feature-list container">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutGet;
