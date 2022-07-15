import React from "react";
import "./Footer.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="social-icon">
        <div className="icon">
          <FaFacebook />{" "}
        </div>
        <div className="icon">
          <FaTwitter />{" "}
        </div>
        <div className="icon">
          <FaWhatsapp />{" "}
        </div>
        <div className="icon">
          <FaYoutube />{" "}
        </div>
        <div className="icon">
        <FaTelegramPlane />
      </div>
      </div>
      
      <div className="section">Copyright © Right to Recall Party</div>
    </div>
  );
}

export default Footer;
