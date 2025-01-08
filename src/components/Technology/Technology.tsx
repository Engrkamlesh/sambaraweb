import Image from "next/image";

const technologies = [
  { name: 'HTML 5', icon: '/technologies/html.svg' },
  { name: 'JavaScript', icon: '/technologies/javascript-icon.svg' },
  { name: 'TypeScript', icon: '/technologies/typescript-icon.svg' },
  { name: 'React', icon: '/technologies/react-icon.svg' },
  { name: 'Next.js', icon: '/technologies/nextjs-icon.svg' },
  { name: 'Flutter', icon: '/technologies/flutter-icon.svg' },
  { name: 'Sql', icon: '/technologies/Sql.svg' },
  { name: 'Mongose', icon: '/technologies/mongodb.svg' },
  { name: 'NodeJs', icon: '/technologies/nodeJs.svg' },
  { name: 'ExpressJs', icon: '/technologies/express.svg' },
];

const Technology = () => (
  <div className="flex flex-col items-center space-y-6 mt-10 mb-10">
    <h2 className="text-4xl font-bold text-center">Technologies We Work With</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded-lg text-center shadow-md flex flex-col items-center hover:bg-gray-300 hover:shadow-lg transition duration-200"
        >
          <Image src={tech.icon} alt={`${tech.name} Icon`}  width={12} height={12} className="w-12 h-12 mb-2" />
          <h3 className="font-bold">{tech.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Technology;
