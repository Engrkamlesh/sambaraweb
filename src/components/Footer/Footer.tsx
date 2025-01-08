import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#725BD9] px-4 pt-12 pb-6">
        <div className='font-bold text-white text-5xl px-12 space-y-2'>
            Have an Idea? <br/> Lets talk!
        </div>
     
        <div className="flex justify-end gap-2 my-2 px-4">
  <div className="bg-white p-2 rounded-full w-10 h-10">
    <Image
      src="/icons/facebook.svg"
      alt="facebook-icon"
      width={40}
      height={40}
    />
  </div>
  <div className="bg-white p-2 rounded-full  w-10 h-10">
    <Image
      src="/icons/twitter.svg"
      alt="twitter-icon"
      width={30}
      height={30}
    />
  </div>
  <div className="bg-white  rounded-full p-2  w-10 h-10 ">
    <Image
      src="/icons/youtube.svg"
      alt="youtube-icon"
      width={30}
      height={30}
    />
  </div>
  <div className="bg-white rounded-full p-2 w-10 h-10">
    <Image
      src="/icons/linkedin.svg"
      alt="linkedin-icon"
      width={30}
      height={30}
    />
  </div>
  <div className="bg-white  rounded-full p-2  w-10 h-10">
    <Image
      src="/icons/instagram.svg"
      alt="instagram-icon"
      width={30}
      height={30}
    />
  </div> 
</div>

<div className="flex flex-wrap justify-between gap-10 px-4">

<div className="flex mt-4">
<Link
className="relative inline-flex items-center  rounded-full my-2 justify-center px-6 py-3 text-base font-medium
text-blue-600 bg-white hover:bg-blue-600 hover:text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:translate-y-1"
href="/contact-us"
>
Contact us
</Link> 
</div> 
  </div>
  <div className="flex flex-wrap  justify-between gap-4 px-4">
  {/* Google Ratings Section */}
  <div className="flex gap-2 mt-6">
  
    <span className="text-4xl font-bold text-white">Google Ratings</span>
  </div>
  {/* services */}
  <div className="grid grid-cols-3 gap-4 p-4  text-white">
  {/* Column 1 */}
  <div className="flex flex-col gap-2">
    <Link href="/" className="hover:underline font-semibold">Home</Link>
    <Link href="/about" className="hover:underline font-semibold">About</Link>
    <Link href="/contact-us" className="hover:underline font-semibold">Contact</Link>
  </div>

  {/* Column 2 */}
  <div className="flex flex-col gap-2">
    <Link href="#" className="hover:underline font-semibold">Flutter Development</Link>
    <Link href="#" className="hover:underline font-semibold">Cross Platform</Link>
    <Link href="#" className="hover:underline font-semibold">UX/UI Design</Link>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col gap-2">
  <Link href="#" className="hover:underline font-semibold">App MAintainance Service</Link>
    <Link href="#" className="hover:underline font-semibold">App Testing Service</Link>
    <Link href="#" className="hover:underline font-semibold">Consultation & Service</Link>
  </div>
  
</div>

</div>
<div className="w-full h-0.5 bg-gray-300 my-4"></div>

<div className="flex justify-center items-center py-4 ">
  <p className="text-sm text-white">
    All rights reserved by <span className="font-semibold">@Sambara Technologies</span>
  </p>
</div>






    
    </footer>
  );
};

export default Footer;
