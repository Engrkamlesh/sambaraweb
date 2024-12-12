import React from "react";

const ServicesCards: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 py-12 mt-8">
        <span className="text-4xl text-center font-bold text-gray-800">
          What  We Do
        </span>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6">
          {/* iOS App Development Card */}
          <div className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-lg p-6 w-56 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="mb-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334.88 409.6" data-inject-url="https://www.vativeapps.com/assets/img/icons/lineal/smartphone-3.svg"  className="svg-inject icon-svg icon-svg-md text-yellow mb-3 w-14 h-14 flex justify-center"><path className="lineal-fill" d="M153.66 39.88H40.37A29.34 29.34 0 0011 69.22v34.6h139.25"></path><path className="lineal-stroke" d="M150.25 114.85H11a11 11 0 01-11-11V69.22a40.42 40.42 0 0140.37-40.37h113.29a11 11 0 010 22H40.37a18.34 18.34 0 00-18.32 18.37V92.8h128.2a11 11 0 010 22z"></path><path className="lineal-fill" d="M11 329.92v39.31a29.34 29.34 0 0029.35 29.34h166.47a29.33 29.33 0 0029.34-29.34v-39.31H90.56"></path><path className="lineal-stroke" d="M206.82 409.6H40.37A40.42 40.42 0 010 369.23v-39.31a11 11 0 0122.05 0v39.31a18.34 18.34 0 0018.32 18.32h166.45a18.34 18.34 0 0018.32-18.32V341H90.56a11 11 0 010-22.05h145.6a11 11 0 0111 11v39.31a40.42 40.42 0 01-40.37 40.37z"></path><path className="lineal-stroke" d="M141 375.1h-33.91a11 11 0 010-22.05H141a11 11 0 010 22.05zM11 344.37a11 11 0 01-11-11V94.74a11 11 0 0122.05 0v238.61a11 11 0 01-11 11zm225.16 9.73a11 11 0 01-11-11v-68.94a11 11 0 0122.05 0v68.92a11 11 0 01-11 11zm1.44-111.91a25 25 0 01-10.6-2.32c-26.07-12-86.71-44.42-86.71-86.33V43.91a15.05 15.05 0 0115.33-15.1 17.3 17.3 0 015.15.81 43.09 43.09 0 0013.65 2.13 44.13 44.13 0 0038-21.4A21.6 21.6 0 01230.77 0h13.66a21.62 21.62 0 0118.34 10.35 44.13 44.13 0 0038 21.4 44.38 44.38 0 0014.12-2.29 15.18 15.18 0 0120 14.44v109.64c0 41.91-60.65 74.34-86.72 86.33a25 25 0 01-10.56 2.32zM162.38 52.72v100.82c0 23.85 39.79 50.62 73.87 66.3a3.26 3.26 0 002.7 0c34.08-15.68 73.88-42.45 73.88-66.3V52.7a66.77 66.77 0 01-12.08 1.1 66 66 0 01-56.68-31.75h-12.94a66 66 0 01-56.67 31.75 64.33 64.33 0 01-12.08-1.08z"></path></svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">
              iOS App Development Services
            </h4>
            <p className="text-gray-700 text-sm text-center">
              iOS app development blends creativity and functionality, bringing
              your ideas to life for a unique App Store presence.
            </p>
          </div>

          {/* Android App Development Card */}
          <div className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-lg p-6 w-56 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-14 h-14 text-red-500 mx-auto"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">
              Android App Development Services
            </h4>
            <p className="text-gray-700 text-sm text-center">
              Android app development ensures a robust and versatile
              application that meets diverse business needs across the Google
              Play ecosystem.
            </p>
          </div>

          {/* Web Development Card */}
          <div className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-lg p-6 w-56 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-14 h-14 text-blue-500 mx-auto"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-3.59 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">
              Web Development Services
            </h4>
            <p className="text-gray-700 text-sm text-center">
              Building responsive and user-friendly websites tailored to your
              business needs for an outstanding online presence.
            </p>
          </div>

          {/* Additional Service Card */}
          <div className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-lg p-6 w-56 mx-auto transition-transform duration-300 hover:scale-105">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-14 h-14 text-green-500 mx-auto"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-3.59 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-center text-gray-800">
              Web Development Service
            </h4>
            <p className="text-gray-700 text-sm text-center">
              Description for an additional service, highlighting its key
              features and benefits for your customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
