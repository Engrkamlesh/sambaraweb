"use client";
import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-md p-6">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Frequently Asked Questions
      </h2>

      {/* Accordion Section 1 */}
      <div className="space-y-4">
        <div className="group">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 text-left text-lg font-medium rounded-lg transition-all duration-300 ${
              openSection === 1
                ? "bg-blue-100 text-blue-600 shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
            onClick={() => toggleSection(1)}
          >
            <span>Who owns the legal rights to the technology developed by a SambaraTech developer?</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openSection === 1 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openSection === 1 && (
            <div className="p-5 bg-white border border-blue-200 rounded-b-lg shadow-inner">
              <p className="text-gray-700 mb-2">
                The legal rights to the technology produced by SambaraTech
                developers are owned by the client. All development done by our
                firm is the client’s sole property.
              </p>
             
            </div>
          )}
        </div>

        {/* Accordion Section 2 */}
        <div className="group">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 text-left text-lg font-medium rounded-lg transition-all duration-300 ${
              openSection === 2
                ? "bg-blue-100 text-blue-600 shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
            onClick={() => toggleSection(2)}
          >
            <span>How do you ensure data security of mobile apps and websites?</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openSection === 2 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openSection === 2 && (
            <div className="p-5 bg-white border border-blue-200 rounded-b-lg shadow-inner">
              <p className="text-gray-700 mb-2">
                For creating highly secure mobile apps and websites, we adhere
                to suitable encryption and the most recent data security
                protocols.
              </p>
              {/* <p className="text-gray-600">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p> */}
            </div>
          )}
        </div>

        {/* Accordion Section 3 */}
        <div className="group">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 text-left text-lg font-medium rounded-lg transition-all duration-300 ${
              openSection === 3
                ? "bg-blue-100 text-blue-600 shadow-md"
                : "bg-white text-gray-600 hover:bg-blue-50"
            }`}
            onClick={() => toggleSection(3)}
          >
            <span>How frequently do you share an update on the process?</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openSection === 3 ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openSection === 3 && (
            <div className="p-5 bg-white border border-blue-200 rounded-b-lg shadow-inner">
              <p className="text-gray-700">
                We use top project management tools to keep you informed. Our
                team stays in touch, discussing crucial updates and ensuring
                seamless communication.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
