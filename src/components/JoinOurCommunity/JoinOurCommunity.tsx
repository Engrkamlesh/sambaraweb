import React from "react";

const JoinOurCommunity = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-sm uppercase font-bold text-gray-400 mb-3">Join Our Community</h2>
        <h3 className="text-4xl lg:text-4xl font-bold mb-8 px-4 lg:px-12">
          We are trusted by over 80+ clients. <br/> Join them now and grow your business.
        </h3>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
        {/* Satisfied Customers */}
        <div className="text-center">
          <h3 className="text-5xl font-bold text-primary text-blue-500 mb-4">50+</h3>
          <p className="text-gray-500 font-semibold">Satisfied Customers</p>
        </div>

        {/* Products */}
        <div className="text-center">
          <h3 className="text-5xl font-bold text-primary text-blue-500 mb-4">1</h3>
          <p className="text-gray-500 font-semibold">Products</p>
        </div>

        {/* Expert Employees */}
        <div className="text-center">
          <h3 className="text-5xl font-bold text-primary text-blue-500 mb-4">30+</h3>
          <p className="text-gray-500 font-semibold">Expert Employees</p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
