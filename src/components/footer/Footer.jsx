import React from 'react';
import './Footer.scss'; 
import logo from '../../assets/lgo.svg';
import footerImg from '../../assets/foote1.png';
import footerImg2 from '../../assets/foote2.png';



const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-section company-info">
        <img src={logo} alt="Nest Mart & Grocery" className="logo" /> {/* Ensure you have a logo file */}
        <p>Awesome grocery store website template</p>
        <address>
          <p>5171 W Campbell Ave</p>
          <p>Kent, Utah 53127 United States</p>
          <p>Call Us: +1-540-025-124553</p>
          <p>Email: sale@Nest.com</p>
          <p>Hours: 10:00 - 18:00, Mon - Sat</p>
        </address>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/delivery-information">Delivery Information</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/support-center">Support Center</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <ul>
          <li><a href="/sign-in">Sign In</a></li>
          <li><a href="/view-cart">View Cart</a></li>
          <li><a href="/wishlist">My Wishlist</a></li>
          <li><a href="/track-order">Track My Order</a></li>
          <li><a href="/help-ticket">Help Ticket</a></li>
          <li><a href="/shipping-details">Shipping Details</a></li>
          <li><a href="/compare-products">Compare Products</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Corporate</h3>
        <ul>
          <li><a href="/become-vendor">Become a Vendor</a></li>
          <li><a href="/affiliate-program">Affiliate Program</a></li>
          <li><a href="/farm-business">Farm Business</a></li>
          <li><a href="/farm-careers">Farm Careers</a></li>
          <li><a href="/suppliers">Our Suppliers</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
          <li><a href="/promotions">Promotions</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Popular</h3>
        <ul>
          <li><a href="/milk-flavoured-milk">Milk & Flavoured Milk</a></li>
          <li><a href="/butter-margarine">Butter and Margarine</a></li>
          <li><a href="/eggs-substitutes">Eggs Substitutes</a></li>
          <li><a href="/marmalades">Marmalades</a></li>
          <li><a href="/sour-cream-dips">Sour Cream and Dips</a></li>
          <li><a href="/tea-kombucha">Tea & Kombucha</a></li>
          <li><a href="/cheese">Cheese</a></li>
        </ul>
      </div>
      <div className="footer-section install-app">
        <h3>Install App</h3>
        <div className="app-links">
          <a href="https://www.apple.com/app-store/">
            <img src={footerImg} alt="App Store" />
          </a>
        </div>
        <div className="payment-gateways">
          <img src={footerImg2} alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
