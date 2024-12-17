import React from 'react';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
      {/* Navbar displayed first */}
      <Navbar />

      {/* About Section */}
      <div className="container w-full mx-auto px-4 py-12 bg-blue-950">
  <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:px-8 md:px-8">
    {/* Left Content */}
    <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white text-start sm:text-left">
        Offering Sustainable Digital Solutions to Amazing People
      </h1>
      <p className="text-lg text-gray-300 mt-4 text-start sm:text-left">
        SambaraTech is a team of agile developers who bring innovation in par with experience and sustainability.
      </p>
      <div className="mt-6 text-start sm:text-left">
        <a
          href="/hire-us"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all mr-4 mb-4 sm:mb-0 inline-block"
        >
          Hire Us
        </a>
        <a
          href="/faqs"
          className="border border-gray-300 text-gray-300 py-2 px-6 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all inline-block"
        >
          FAQs 
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/2 px-6 py-12 flex justify-center">
      <img
        src="/images/about-header.jpg"
        alt="About Section Image"
        className="rounded-lg shadow-lg w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh]"
      />
    </div>
  </div>

  {/* Bottom Images */}
  <div className="flex flex-wrap justify-center lg:justify-between mt-4 px-8 space-y-4 lg:space-y-0 lg:space-x-6">
    <img
      src="/images/about-image.jpg"
      alt="About Image 1"
      className="w-full sm:w-[80vw] lg:w-1/2 rounded-lg shadow-lg"
    />
    <img
      src="/images/about-img.png"
      alt="About Image 2"
      className="w-full sm:w-[80vw] lg:w-1/3 rounded-lg shadow-lg"
    />
  </div>
</div>

    </>
  );
};

export default About;
