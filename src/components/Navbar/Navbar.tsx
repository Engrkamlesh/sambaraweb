"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="w-full h-20 bg-transparent flex items-center px-6 justify-between lg:justify-start"
    >
      {/* Brand Section - SAMBARATECH */}
      <Link href="/">
        <h1 className="font-bold text-2xl text-white text-center lg:text-left mx-auto lg:mx-0">
          SAMBARATECH
        </h1>
      </Link>

      {/* Navigation Section - Right Aligned */}
      <ul className="hidden lg:flex gap-8 items-center ml-auto">
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
          <button onClick={() => handleClick("home")}>Home</button> 
        </li>
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
          <button onClick={() => handleClick("about-us")}>About us</button>
        </li>
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
          <button onClick={() => handleClick("services")}>Services</button>
        </li>
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
              <button onClick={() => handleClick("technologies")}>Technologies</button>
            </li>
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
              <button onClick={() => handleClick("insights")}>Insights</button>
            </li>
        <li className="text-lg tracking-wider font-bold text-white hover:text-red-500">
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
            <li className="text-lg tracking-wider font-bold text-white ">
              <button onClick={() => handleClick("home")}>Home</button>
            </li>
            <li className="text-lg tracking-wider font-bold text-white "> 
              <button onClick={() => handleClick("about-us")}>About us</button>
            </li>
            <li className="text-lg tracking-wider font-bold text-white ">
              <button onClick={() => handleClick("services")}>Services</button>
            </li>
            <li className="text-lg tracking-wider font-bold text-white ">
              <button onClick={() => handleClick("technologies")}>Technologies</button>
            </li>
            <li className="text-lg tracking-wider font-bold text-white ">
              <button onClick={() => handleClick("insights")}>Insights</button>
            </li>
            <li className="text-lg tracking-wider font-bold text-white ">
              <button onClick={() => handleClick("contact-us")}>Contact us</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
