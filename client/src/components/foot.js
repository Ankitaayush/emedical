import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../public/footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer`}>
      <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </div>
      <div className="footer-icons">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-form">
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <p>Copyright © {new Date().getFullYear()}Emedical</p>
    </footer>
  );
};

export default Footer;
