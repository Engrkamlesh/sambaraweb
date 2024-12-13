import React from 'react';

const Technology = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mt-8">
      <h2 className="text-4xl font-bold text-center">Technologies We Work With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/technologies/html-icon.svg" 
            alt="HTML Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">HTML</h3>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/technologies/javascript-icon.svg"
            alt="JavaScript Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">JavaScript</h3>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/icons/typescript-icon.png"
            alt="TypeScript Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">TypeScript</h3>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/icons/react-icon.png"
            alt="React Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">React</h3>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/icons/nextjs-icon.png"
            alt="Next.js Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">Next.js</h3>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md flex flex-col items-center">
          <img
            src="/icons/tailwind-icon.png"
            alt="Tailwind CSS Icon"
            className="w-12 h-12 mb-2"
          />
          <h3 className="font-bold">Tailwind CSS</h3>
        </div>
      </div>
    </div>
  );
};

export default Technology;
