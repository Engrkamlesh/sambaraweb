"use client"
import React, { useState } from "react";

// Sample Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company ABC",
    image: "/images/profile.svg",
    testimonial:
      "I had a pleasant experience overall and will definitely be coming back for application. The team is very professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Founder, XYZ Corp",
    image: "/images/profile.svg",
    testimonial:
      "The service was amazing. Excellent work.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Manager, DEF Ltd.",
    image: "/images/profile.svg",
    testimonial:
      "Highly recommend this place, professional working enviorment!  and the results were fantastic.",
    rating: 4,
  },
];

const Testimonial = () => {
  const [selectedCard, setSelectedCard] = useState<number | null >(null);

  const handleClick = (id:number) => {
    setSelectedCard(id); // Set the clicked card's ID to apply a click effect
  };
  

  return (
    <section className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h5 className="text-yellow-200 text-lg font-bold uppercase p-2">
            Testimonial
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold">
            What They Say About Us
          </h2>
          <p className="text-gray-200 mt-4">
            Uniquely promote adaptive quality vectors rather than stand-alone
            <br />
            e-markets. Pontificate alternative architectures whereas iterate.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white text-black p-6 rounded-lg shadow-xl transform transition duration-300 ease-in-out ${
                selectedCard === testimonial.id
                  ? "scale-105" // Scale up on click (selected card)
                  : "hover:scale-105" // Hover scale effect
              }`}
              onClick={() => handleClick(testimonial.id)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {/* Rating Stars */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 ${index < testimonial.rating ? "fill-yellow-400" : "fill-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 13"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
