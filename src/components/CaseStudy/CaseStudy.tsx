"use client"
import Link from "next/link";
import React, { useState } from "react";

const CaseStudy = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="p-4  pb-12  lg:pt-[70px] lg:pb-[90px] ">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-6">
            <div className="w-full px-6">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Case Studies
                </span>
                <h2 className=" mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-8">
                Our portfolio showcases a diverse range of projects across various industries,  each tailored to meet unique client needs. From conceptualization to execution,
                  our team has consistently delivered exceptional solutions.
                 Below, we provide a glimpse into some of our recent work:
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-red-700"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("mobile app")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "mobile app"
                        ? "activeClasses bg-primary text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-red-700"
                    }`}
                  >
                    Mobile App
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("web app")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "web app"
                        ? "activeClasses bg-primary text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-red-700"
                    }`}
                  >
                    Web App
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-black"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-red-700"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-red-700"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-red-700"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
             id="Mobile App"
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="Mobile app"
              title="Mobile App"
              button="View Details"
              buttonHref="/use-case/mobile-app"
              showCard={showCard}
            />
            <PortfolioCard
            id="Creative Agency"
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="Creative Agency"
              title="Creative Agency"
              button="View Details"
              buttonHref="/use-case/creative-agency"
              showCard={showCard}
            />
            <PortfolioCard
            id="Marketing"
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="Marketing"
              title="Social Media Marketing"
              button="View Details"
              buttonHref="/use-case/marketing"
              showCard={showCard}
            />
            <PortfolioCard
            id="Development"
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="Development"
              title="Development"
              button="View Details"
              buttonHref="/use-case/development"
              showCard={showCard}
            />
            <PortfolioCard
            id="Web Application"
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="Web app"
              title="Web Application"
              button="View Details"
              buttonHref="/use-case/web-application"
              showCard={showCard}
            />
           
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
} : any) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-gray-50 dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <Link
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-blue-800"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

