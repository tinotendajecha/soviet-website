import React from "react";
import "./styles/footer.css";
import { MdCallEnd } from "react-icons/md";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-footer-section">
        <div className="footer-container">
          <h2>Address</h2>
          <div>
            <MdOutlineLocationOn size={25} />
            <p>186 Mutare Road on Citroen</p>
          </div>
        </div>

        <div className="footer-container">
          <h2>Contacts</h2>

          <div>
            <MdCallEnd size={20} />
            <p>0774 275 959</p>
          </div>

          {/* <div className="phone">
          <FaPhone size={20}/>
          <p>Call </p>
        </div> */}

          <div className="email">
            <FaEnvelope />
            <p>sovietautoandbody@yahoo.com</p>
          </div>
        </div>

        <div className="socials">
          <div className="footer-container">
            <h2>Socials</h2>
          </div>

          <div className="links">
            <Link href="">
              <FaFacebook size={30} />
            </Link>

            <Link href="">
              <FaWhatsapp size={30} />
            </Link>

            <Link href="">
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className="second-footer-section">
        <span className="attribution">
        © 2024 Soviet Auto and Body, <a href="http://tinotendajecha.dev" target='_blank'>Developers</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
