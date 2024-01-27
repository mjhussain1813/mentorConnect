import React from 'react'
import HeroImage from '../images/hero.png';

const HeroSection = ({}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-36 mx-24'>
        <h1 className='font-semibold text-6xl text-center'>How does our platform work?</h1>
        <div className='flex justify-center mt-14'>
        <div className='flex flex-col w-1/2 mt-24'>
            <h3 className='text-4xl font-bold'>Begin your learning journey</h3>
            <p className='text-justify mt-4 leading-6'>As a user, you can start learning on our platform without any prior knowledge.
                Once you\'ve signed up and accessed our learning resources, 
                you can dive into various career paths and courses tailored 
                to your interests and goals.',
            </p>
            <button className='px-3 py-2 mt-12 w-40 bg-neutral-950 text-white'>Learn more</button>
        </div>
        <img src={HeroImage} className='object-contain w-1/4 h-auto' />
        </div>
        
    </div>
  )
}

export default HeroSection