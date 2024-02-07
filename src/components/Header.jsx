"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import "./styles/header.css";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathName = usePathname()
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(pathName)

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
          <ul className="flex space-x-4 text-white items-center">
            <li className={pathName === '/' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathName === '/services' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
              <Link href="/services">Services</Link>
            </li>
            <li className={pathName === '/about' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathName === '/contact' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <button className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded">
          0776 598 955
        </button>
      </div>


      <div
        className="lg:hidden bg-gray-800 p-4 sticky-nav"
        style={{ opacity: isMenuOpen ? 1 : 0 }}
      >
        <ul className="flex flex-col space-y-4 text-white">
          <li className={pathName === '/' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={pathName === '/services' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
            <Link href="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className={pathName === '/about' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className={pathName === '/contact' ? 'text-blue-500 text-lg transition duration-200 ease-in' : 'text-white'}>
            <Link href="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="md:hidden bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-2 mt-2">
          <FaPhoneAlt /> 0776 598 955
        </button>
      </div>
    </div>
  );
};

export default Header;
