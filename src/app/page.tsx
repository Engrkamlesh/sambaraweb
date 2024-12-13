// import Footer from "@/components/Footer/Footer";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import ServiceCard from "@/components/Service/OurServices";
import ServicesCards from "@/components/Service/ServicesSection";


const servicesData  = [
  {
    title: 'Mobile App Development Services',
    description:
      'At SambaraTech, our dedication is centered on providing specialized mobile application development services, custom-tailored to meet the unique needs of each client. Our comprehensive approach spans the full spectrum of app development, from the initial ideation to the final launch and continued maintenance. We are committed to crafting mobile applications that are not just visually striking and easy to navigate, but also robust and reliable, ensuring a smooth and engaging user experience. Our focus is on aligning every facet of the app with your specific business goals and the expectations of your target audience. This ensures a holistic digital solution that truly encapsulates the spirit of your brand and resonates with your users.',
    imageSrc: '/services/app.jpg',
    features: [
      { icon: 'fas fa-fingerprint', text: 'Carefully crafted components' },
      { icon: 'fab fa-html5', text: 'Amazing page examples' },
      { icon: 'far fa-paper-plane', text: 'Dynamic components' },
    ],
  },
  { 
    title: 'Web Development Services',
    description:
      'SambaraTech stands out as a top-notch app development service company, specializing in tailored website development services. We prioritize creating visually appealing, user-friendly, and reliable websites from concept to launch. Our commitment is to align every aspect of the website with your business objectives and audience expectations, providing a comprehensive digital solution that truly represents your brand essence.',
    imageSrc: '/services/web.jpg',
    features: [
      { icon: 'fas fa-code', text: 'Modern coding practices' },
      { icon: 'fas fa-palette', text: 'Creative UI/UX design' },
      { icon: 'fas fa-server', text: 'Robust backend integration' },
    ],
  },
  { 
    title: 'UX UI Designer',
    description:
      'SambaraTech stands out as a top-notch app development service company, specializing in tailored website development services. We prioritize creating visually appealing, user-friendly, and reliable websites from concept to launch. Our commitment is to align every aspect of the website with your business objectives and audience expectations, providing a comprehensive digital solution that truly represents your brand essence.',
    imageSrc: '/services/ux-ui.jpg',
    features: [
      { icon: 'fas fa-code', text: 'Modern coding practices' },
      { icon: 'fas fa-palette', text: 'Creative UI/UX design' },
      { icon: 'fas fa-server', text: 'Robust backend integration' },
    ],
  },
  

];

export default function main() {
  return (
   
<>

 
     <Home /> 
     <ServicesCards/>
     <div className="flex items-center justify-center px-4 mt-4">
  <span className="text-4xl font-bold text-center text-black max-w-screen-md">
    The service we offer is designed to meet your business needs.
  </span>
</div>
<div className="container mx-auto px-6 lg:px-12">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          // features={service.features}
          reverse={index % 2 !== 0} // Alternate the layout
        />
      ))}
    </div>
     
      
      {/* <ServicesSection/> */}
   <Footer/> 
     </>
  );
}