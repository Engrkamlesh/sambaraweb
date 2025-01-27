
type tParams = Promise<{ project_Id: string }>;
// The page component will automatically receive `params` from the dynamic route
const ProjectDetails  = async ({ params }: { params: tParams }) => {
  console.log("params===", await params);
  
  const { project_Id } = await params;
  // const project_Id = "1";
  // console.log("slug======", slug);
  
  

  // Example project data
  const projects = [
    {
      id: "mobile-app",
      name: "Mobile App",
      description: `
        The Mobile App project is a comprehensive solution designed to revolutionize user interaction and engagement in the digital age. 
        This app combines cutting-edge technology with user-friendly design to provide seamless navigation and exceptional functionality. 
        Whether it's for e-commerce, productivity, or entertainment, the app offers a robust platform to meet diverse user needs. 
    
        The application is built with scalability in mind, ensuring that businesses can expand their services effortlessly while maintaining high performance.
        Security is a top priority, with advanced encryption methods and authentication protocols to protect user data.
      `,
      List: [
        "State-of-the-art user interface with an intuitive design.",
        "Scalable architecture for businesses of all sizes.",
        "Seamless integration with modern technologies.",
      ],
      image: "https://i.ibb.co/64WfFPt/image-01.jpg",
      link: "https://www.example.com/mobile-app",
    },

    {
      id: "web-application",
      name: "Web App",
      description:
        "This web application was built to provide businesses with a seamless digital experience. It incorporates modern design principles, robust architecture, and innovative features tailored to meet diverse business needs. The project aims to enhance user engagement while ensuring scalability and performance.",
      List: [
        "Interactive and intuitive user interface designed with user experience in mind.",
        "Built using a scalable and modular architecture to adapt to growing business demands.",
        "Seamless integration with APIs, third-party tools, and modern frameworks.",
      ],
      image: "https://i.ibb.co/m6dq2fX/image-04.jpg",
      link: "https://example.com/web-app", // Add the actual project link
    },

    {
      id: "marketing",
      name: "Social Media Marketing",
      description:
        "This project focuses on leveraging the power of social media to drive brand awareness, audience engagement, and business growth through tailored campaigns and innovative content strategies.",
      List: [
        "Data-driven campaigns designed to maximize audience reach and engagement.",
        "Custom content creation optimized for various social media platforms.",
        "Real-time analytics and performance tracking for continuous improvement.",
      ],
      image: "https://i.ibb.co/mCPjBsH/image-05.jpg",
      link: "https://example.com/marketing",
    },
    {
      id: "development",
      name: "Development",
      description:
        "This project focuses on building scalable, high-performance web and mobile applications using modern technologies, aiming to improve user experience and streamline business processes.",
      List: [
        "Interactive and intuitive user interface designed with user experience in mind.",
        "Built using a scalable and modular architecture to adapt to growing business demands.",
        "Seamless integration with APIs, third-party tools, and modern frameworks.",
      ],
      image: "https://i.ibb.co/3FKqS1G/image-03.jpg",
      link: "https://example.com/development", // Add the actual project link
    },
    {
      id: "creative-agency",
      name: "Creative Agency",
      description:
        "This project focuses on building scalable, high-performance web and mobile applications using modern technologies, aiming to improve user experience and streamline business processes.",
      List: [
        "Crafted visually stunning designs that captivate and engage users.",
        "Developed scalable solutions to ensure optimal performance under heavy loads.",
        "Integrated advanced APIs and tools for seamless workflows and enhanced functionality.",
      ],
      image: "https://i.ibb.co/3FKqS1G/image-03.jpg",
      link: "https://example.com/creative-agency", // Add the actual project link
    }
  ];

  const project = projects.find((p) => p.id === project_Id);

  if (!project) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-20 min-h-screen">
      <div className="container mx-auto p-6 px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">{project.name}</h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">{project.description}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {project.List.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-white bg-blue-700 hover:bg-blue-600 rounded-md shadow transition duration-300"
            >
              Learn more
            </a>
          </div>
          <div className="md:w-1/3">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
