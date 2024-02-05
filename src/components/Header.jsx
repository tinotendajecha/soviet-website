"use client";
import React from "react";
import Link from "next/link";
import "./styles/header.css";
import { FaHamburger } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <div className="sticky-header">
      <div>
        <h1 className="logo">
          <Link href="/">Soviet Auto and Body</Link>
        </h1>
      </div>

      {/* I will show hide this menu on smaller screens by default */}
      <div className="lg-menu">
        <ul className="list-items">
          <li className="list-item">
            <Link href="/services">Services</Link>
          </li>
          <li className="list-item">
            <Link href="/about">About</Link>
          </li>
          <li className="list-item">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* I will hide this icon on larger screens and show the menu instead */}
      <div className="menu-container sm-button">
        <CiMenuBurger size={30} />
      </div>

      <button className="button lg-button header-button">Get In Touch</button>

      {/* <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </div> */}
    </div>
  );
};

export default Header;
