
import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import GenericSection from '../components/GenericSection'
import LearningImage from '../images/learning.png'
import OpportunitiesImage from '../images/opportunities.png'
import AccelerateImage from '../images/accelerate.png';

const Landing = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
       <Navbar/>
       <HeroSection/>
       <GenericSection rowReverse={true}
        backgroundColor='#d3d3d3' 
        description='Our platform is designed to be the ultimate learning destination for students and professionals in the Software Development and IT industry. It provides a decentralized, open-source, and accessible environment for individuals to enhance their skills and knowledge.'
        buttonText='Start learning now'
        headingText='Our platform and the learning'
        image={LearningImage}
         />
        <GenericSection rowReverse={false}
        backgroundColor='#ffffff' 
        description="Our platform enables users to unlock a world of career possibilities by offering comprehensive roadmaps, industry-relevant courses, and mentorship. It's a game-changer in the way individuals create value for their professional growth."
        buttonText='Learn more'
        headingText='Discover new career opportunities'
        image={OpportunitiesImage}
         />
        <GenericSection rowReverse={true}
        backgroundColor='#d3d3d3' 
        description="Learn how our platform's cutting-edge technology has revolutionized the way individuals acquire and exchange knowledge, leading to more efficient learning systems across every aspect of the Software Development and IT industry."
        buttonText='Explore our resources'
        headingText='Accelerate your learning journey'
        image={AccelerateImage}
         />
    </div>


  )
}

export default Landing