"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [textColor, setTextColor] = useState("text-white"); // Default text color
  const [logoColor,setLogoColor] = useState("text-white");
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Use this effect to set the textColor based on some condition
  useEffect(() => {
    // Example: change text color based on a condition
    const currentPath = window.location.pathname; // This can be dynamic based on your route
    if (currentPath.includes("about")) {
      setTextColor("text-black"); // Example condition, change based on route
      setLogoColor("text-black")
    } 
    else {
      setTextColor("text-white"); // Default color
      setLogoColor('text-white');
    }
  }, [window.location.pathname]); // Update on path change

  return (
    <div
      id="home"
      className="w-full h-20 bg-transparent flex items-center px-6 justify-between lg:justify-start"
    >
      {/* Brand Section - SAMBARATECH */}
      <Link href="/">
        <h1 className="font-bold text-4xl   ${logoColor} text-center lg:text-left mx-auto lg:mx-0">
          SAMBARATECH
        </h1>
      </Link>

      {/* Navigation Section - Right Aligned */}
      <ul className="hidden lg:flex gap-8 items-center ml-auto">
      <Link href='/'>
        <li className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}>
          <button onClick={() => handleClick("home")}>Home</button> 
        </li>
      </Link>
        <Link href='/about'>
          <li className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}>
            <button onClick={() => handleClick("about-us")}>About us</button>
          </li>
        </Link>
        <li className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}>
          <button onClick={() => handleClick("services")}>Services</button>
        </li>
      
        <li className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}>
          <button onClick={() => handleClick("insights")}>Insights</button>
        </li>
        
        <li className={`text-lg tracking-wider font-bold ${textColor} hover:text-red-500`}>
          <button onClick={() => handleClick("contact-us")}>Contact us</button>
        </li>
       
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
            <li className={`text-lg tracking-wider font-bold ${textColor}`}>
              <button onClick={() => handleClick("home")}>Home</button>
            </li>
            </Link>
            <Link href="/about">
              <li className={`text-lg tracking-wider font-bold ${textColor}`}>
                <button onClick={() => handleClick("about-us")}>About us</button>
              </li>
            </Link>
            <Link href='/services'>
              <li className={`text-lg tracking-wider font-bold ${textColor}`}>
                <button onClick={() => handleClick("services")}>Services</button>
              </li>
            </Link>
           
            <li className={`text-lg tracking-wider font-bold ${textColor}`}>
              <button onClick={() => handleClick("insights")}>Insights</button>
            </li>
           
            <li className={`text-lg tracking-wider font-bold ${textColor}`}>
              <button onClick={() => handleClick("contact-us")}>Contact us</button>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
