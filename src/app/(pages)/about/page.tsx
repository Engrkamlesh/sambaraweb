import About from '@/components/About/About'
import AboutSection from '@/components/About/AboutSection'
import Testimonial from '@/components/About/Testimonial'
import Accordion from '@/components/Accordion/Accordion'
import Footer from '@/components/Footer/Footer'
import JoinOurCommunity from '@/components/JoinOurCommunity/JoinOurCommunity'
import React from 'react'


const page = () => {
  return (
   <>
  
 <About/>
 <AboutSection/>
 <Testimonial/>
 <JoinOurCommunity/>
 <Accordion/>
 <Footer/>
   </>
  )
}

export default page