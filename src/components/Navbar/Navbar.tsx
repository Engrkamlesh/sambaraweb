"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [textColor, setTextColor] = useState("text-black"); // Default text color
 
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Use this effect to set the textColor based on some condition
  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (
        currentPath.includes("about") ||
        currentPath.includes("services") ||
        currentPath.includes("contact") ||
        currentPath.includes("use-case")
      ) {
        setTextColor("text-black"); // Example condition
      } else {
        setTextColor("text-black"); // Default color
      }
    }
  }, []);// Update on path change


  return (
    <div
      id="home"
      className="w-full h-20 bg-transparent flex items-center px-6 justify-between lg:justify-start"
    >
      {/* Brand Section - SAMBARATECH */}
      <Link href="/">
        <Image src='/logoST.png' alt="logo" width={100} height={100} className=" w-full font-bold text-4xl ${logoColor} text-center lg:text-left mx-auto lg:mx-0"/>
        
       
      </Link>

      {/* Navigation Section - Right Aligned */}
      <ul className="hidden lg:flex gap-8 items-center ml-auto">
        <Link href="/">
          <li
            className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}
          >
            <button onClick={() => handleClick("home")}>Home</button>
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}
          >
            <button onClick={() => handleClick("about-us")}>About us</button>
          </li>
        </Link>
        <Link href="/services">
          <li
            className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}
          >
            <button onClick={() => handleClick("services")}>Services</button>
          </li>
        </Link>
        <Link href="/use-case">
          <li
            className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}
          >
            <button onClick={() => handleClick("services")}>Case Study</button>
          </li>
        </Link>

        <Link href="/contact-us">
          <li
            className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}
          >
            <button onClick={() => handleClick("contact-us")}>
              Contact us
            </button>
          </li>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpenNav(true)} className="flex lg:hidden">
        <Image
          alt="menu-icon"
          src="/icons/hamburger-icon.svg"
          width={35}
          height={35}
          className="mx-4"
        />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`bg-transparent lg:hidden w-full h-screen z-[1000] fixed top-0 right-0 ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className="bg-white h-auto w-48 absolute top-20 rounded-2xl right-4 float-end p-4 shadow-2xl">
          <ul className="flex flex-col gap-4 items-start justify-center">
            <Link href="/">
              <li className={`text-lg tracking-wider font-bold text-black`}>
                <button onClick={() => handleClick("home")}>Home</button>
              </li>
            </Link>
            <Link href="/about">
              <li className={`text-lg tracking-wider font-bold text-black`}>
                <button onClick={() => handleClick("about-us")}>
                  About us
                </button>
              </li>
            </Link>
            <Link href="/services">
              <li className={`text-lg tracking-wider font-bold text-black`}>
                <button onClick={() => handleClick("services")}>
                  Services
                </button>
              </li>
            </Link>
            <Link href="/use-case">
              <li className={`text-lg tracking-wider font-bold text-black`}>
                <button onClick={() => handleClick("use-case")}>
                  Case Study     
                </button>
              </li>
            </Link>

            <Link href="/contact-us">
              <li className={`text-lg tracking-wider font-bold text-black`}>
                <button onClick={() => handleClick("contact-us")}>
                  Contact us
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
