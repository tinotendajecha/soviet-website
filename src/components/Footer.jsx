import React from "react";
import "./styles/footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h2>Address</h2>
        <div>
          <MdOutlineLocationOn />
          <p>186 Mutare Road on Citroen</p>
        </div>

        <div>
          <FaPhone />
          <p>Call +263 774275959</p>
        </div>

        <div className="phone">
          <FaPhone />
          <p>Call +263 776598955</p>
        </div>

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
            <FaFacebook size={30}/>
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
  );
};

export default Footer;
