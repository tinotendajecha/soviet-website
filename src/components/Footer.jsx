import React from "react";
import "./styles/footer.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2>Address</h2>
        <div>
          <FaLocationArrow />
          <p>186 Mutare Road on Citroen</p>
        </div>

        <div>
          <div className="phone"><FaPhone />
          <p>Call +263 774275959</p></div>  

          <div className="phone"><FaPhone />
          <p>Call +263 776598955</p></div>  
        </div>

        <div className="email">
          <FaEnvelope />
          <p>sovietautoandbody@yahoo.com</p>
        </div>

        <div className="socials">
          <Link href=''>
            <FaFacebook />
          </Link>

          <Link href=''>
            <FaWhatsapp />
          </Link>

          <Link href=''>
            <FaInstagram />
          </Link>
        </div>

        <div className="links">
          <Link href=''>Home</Link>
          <Link href=''>About</Link>
          <Link href=''>Services</Link>
          <Link href=''>Contact Us</Link>
        </div>

        <div className="subscribe">
          <h2>Subscribe to our email notifications</h2>
          <form action="">
            <input type="text" placeholder="Enter Email"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
