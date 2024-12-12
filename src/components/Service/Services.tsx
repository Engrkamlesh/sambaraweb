const services = [
  {
    title: "Flutter Development Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/flutter-app-development/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/flutter-dev-service-1.webp",
    alt: "flutter-dev-service",
  },
  {
    title: "Cross Platform Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/cross-platform-development/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/cross-platform-1.webp",
    alt: "cross-platform",
  },
  {
    title: "UI & UX Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/ui-ux-services/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/ui-ux-service.webp",
    alt: "ui-ux-services",
  },
  {
    title: "Web Development Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/web-development-services/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/web-dev-service.webp",
    alt: "web-development-service",
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/mobile-app-development/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/mobile-app-dev-service.webp",
    alt: "mobile-app-development",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    link: "https://sambaratech.com/digital-marketing-services/",
    image: "https://sambaratech.com/wp-content/uploads/2024/08/digital-marketing-service.webp",
    alt: "digital-marketing",
  },
];

const ServicesSection = () => {

  return (
    <section id="services" className="bg-gray-100 py-12 mt-2 mb-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">OUR</h2>
      <h2 className="text-3xl font-bold text-blue-600">SERVICES</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 ">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className="flex flex-col items-center bg-white hover:bg-blue-500 hover:text-white transition-colors rounded-lg shadow-lg p-6"
        >
          <img
            src={service.image}
            alt={service.alt}
            className="w-full h-48 object-cover rounded-lg mb-4"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-700 text-sm text-center">{service.description}</p>
        </a>
      ))}
    </div>
  </section>
  
  );
};

export default ServicesSection;
