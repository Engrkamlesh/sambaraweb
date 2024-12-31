import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="w-full bg-image h-auto xl:h-auto px-6 md:px-8 lg:px-20 xl:px-28">
      <Navbar />
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Section: Text Content */}
        <div className="flex flex-col">
          {/* Heading 1 */}
          <h2 className="text-lg sm:text-xl text-red-500 font-bold mb-4 text-red text-left">
          Real Estate App Development Company
          </h2>
 
          {/* Heading 2 */}
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold  text-white text-left">
          Shaping the Future of Real Estate with Powerful App </h2>

          {/* Paragraph */}
          <p className="text-left text-white mt-4 text-sm sm:text-base">
          Get high-quality, customized real estate app development solutions 
          <br/>
          designed specifically for your business. From design to deployment, 
          we ensure your app delivers a seamless and professional experience.
          </p>

          {/* Section: Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="https://sambaratech.com/contact-us/"
              className="bg-red-500 text-white text-sm sm:text-base px-6 py-3 rounded-full shadow hover:bg-white hover:text-black transition-all"
            >
              Contact Us
            </Link> 
            <Link
              href="#services"
              className="bg-white text-black text-sm sm:text-base px-6 py-3 rounded-full shadow hover:bg-red-500   hover:text-white transition-all"
            >
             Discuss your Project
            </Link> 
          </div>
        </div>

        {/* Section: Image */}
        <div className="max-lg:mt-12 h-full mt-8 px-2">
          <img
            src="/images/big-buildings.jpg"
            alt="Home"
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>
      </div>
    </div>

  );
};

export default Home;
