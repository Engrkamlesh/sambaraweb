import Image from 'next/image';
import React from 'react';

// Define the interface for ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
//   features: { icon: string; text: string }[];
reverse?: boolean; // To determine if the layout should be reversed
}

// Component to render individual service details
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, reverse =false}) => {
  return (
    <>
    <section className="relative pt-12 bg-blueGray-50 my-8">
       <div className={`flex justify-between flex-wrap items-center gap-2 ${reverse ? "flex-row-reverse" : ""}`}>
        {/* Image Section */}
        <div className="w-full md:w-5/12 px-4 flex justify-center">
          <Image
            alt={title}
            className="rounded-lg shadow-lg object-cover"
            src={imageSrc}
            width={600}
            height={400}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '12px',
            }}
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-6/12 px-4">
          {/* Title */}
          <h3 className="text-3xl font-semibold mb-4 text-center">{title}</h3>
          {/* Description */}
          <p className="text-lg leading-relaxed text-blueGray-500 mb-6">{description}</p>
          
        </div>
      </div>

    </section>
    
    </>
  );
};

export default ServiceCard;
