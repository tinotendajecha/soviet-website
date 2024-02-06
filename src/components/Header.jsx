"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import "./styles/header.css";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 parent">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-4">
        <h1 className="text-xl font-bold text-white">
          <Link href="/">Soviet Auto and Body</Link>
        </h1>

        <div className="lg:hidden">
          {isMenuOpen ? (
            <IoClose
              size={24}
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <CiMenuBurger
              size={24}
              className="text-white cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        <div className="hidden lg:block">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <button className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded">
          0776 598 955
        </button>
      </div>

      {/* {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4 sticky-nav">
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>

          
        </div>
      )} */}

      <div
        className="lg:hidden bg-gray-800 p-4 sticky-nav"
        style={{ opacity: isMenuOpen ? 1 : 0 }}
      >
        <ul className="flex flex-col space-y-4 text-white">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
