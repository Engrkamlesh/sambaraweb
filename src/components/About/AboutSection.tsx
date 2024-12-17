"use client";
import React, { useState } from "react";

const TabsLight: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Expertise",
      description:
        "We are a team of international talents with expertise in web design, development, SEO, digital marketing, and branding.",
      imgSrc:
        "https://www.digitalsilk.com/wp-content/uploads/2023/06/real-estate-website-design-company-Expertise-693x426.jpg",
      imgAlt:
        "An employee at a real estate website design company points at her computer screen",
    },
    {
      id: 1,
      label: "Optimization",
      description:
        "We design and build optimized websites to help you increase your visibility on search engines as well as grow on-site conversions.",
      imgSrc:
        "https://www.digitalsilk.com/wp-content/uploads/2023/06/real-estate-website-design-company-optimization-693x426.jpg",
      imgAlt:
        "A real estate website design company meeting at a whiteboard",
    },
    {
      id: 2,
      label: "Best Practices",
      description:
        "We apply industry best practices to our web design, from intuitive navigation and high-quality images to incorporating testimonials and reviews.",
      imgSrc:
        "https://www.digitalsilk.com/wp-content/uploads/2023/06/real-estate-website-design-company-best-practices-693x426.jpg",
      imgAlt:
        "A real estate web designer discusses a project with two clients",
    },
    {
      id: 3,
      label: "Transparency",
      description:
        "We maintain transparency by providing real-time progress updates, ensuring you’re always in the loop.",
      imgSrc:
        "https://www.digitalsilk.com/wp-content/uploads/2023/06/real-estate-website-design-company-transparency-693x426.jpg",
      imgAlt:
        "A real estate web designer explaining analytics to the client",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-700 p-4">Our Approach</h1>
          <h2 className="text-3xl font-bold text-gray-800">
            How We Deliver Value To Real Estate Businesses
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Work with seasoned experts and leverage our proven proprietary
            methods to grow your brand online.
          </p>
        </div>

        {/* Tabs */}
        <div>
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-center lg:space-x-4 mb-6 border-b-2 border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-sm lg:text-base font-medium transition duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div
                    key={tab.id}
                    className="flex flex-col lg:flex-row items-center gap-8"
                  >
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {tab.label}
                      </h3>
                      <p className="text-gray-600 text-lg">{tab.description}</p>
                    </div>
                    {/* Image Content */}
                    <div className="lg:w-1/2">
                      <img
                        src={tab.imgSrc}
                        alt={tab.imgAlt}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsLight;
