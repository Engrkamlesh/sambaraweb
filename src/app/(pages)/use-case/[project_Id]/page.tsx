import { list } from "postcss";

const ProjectDetails = ({
  params,
  searchParams,
}: {
  params: { project_Id: string };
  searchParams: { id: string };
}) => {
  // Get the projectId from params
  const { project_Id } = params;
  console.log("project>>>>Id", project_Id);

  // Example data
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
        "This project aims to enhance brand awareness and engagement through strategic social media campaigns and content creation.",
      List: [
        "Interactive and intuitive user interface designed with user experience in mind.",
        "Built using a scalable and modular architecture to adapt to growing business demands.",
        "Seamless integration with APIs, third-party tools, and modern frameworks.",
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
        "Interactive and intuitive user interface designed with user experience in mind.",
        "Built using a scalable and modular architecture to adapt to growing business demands.",
        "Seamless integration with APIs, third-party tools, and modern frameworks.",
      ],
      image: "https://i.ibb.co/3FKqS1G/image-03.jpg",
      link: "https://example.com/creative-agency", // Add the actual project link
    },
  ];
  console.log("list>>>", list);

  // Find the project by the projectId from params
  const project = projects.find((p) => p.id === project_Id);

  if (!project) {
    return (
      <div className="container mx-auto  p-6">
        <h1 className="text-2xl font-bold text-red-600">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-20 min-h-screen">
      <div className="container mx-auto p-6 px-8 bg-white rounded-lg shadow-lg">
        {/* Project Heading */}
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
          {project.name}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Description and Details */}

          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              {project.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {Array.isArray(project.List) &&
                project.List.map((item: string, index: number) => (
                  <li key={index} className="text-base">
                    {item}
                  </li>
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

          {/* Project Image */}
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
