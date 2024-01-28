import React from 'react'

interface GenericSectionProps {
 rowReverse: boolean;
 headingText: string;
 image: any;
 description: string;
 buttonText: string;
 backgroundColor: string;
}

const GenericSection = ({rowReverse, headingText,image,description, buttonText, backgroundColor}:GenericSectionProps) => {
  return (
    <div className={`flex flex-col bg-[${backgroundColor}] justify-center items-center`}>
        <div className={`flex ${rowReverse? 'flex-row-reverse' : 'flex-row'} justify-center mt-14`}>
        <div className='flex flex-col w-1/2 mt-24'>
            <h3 className='text-4xl font-bold '>{headingText}</h3>
            <p className='text-justify mt-4 leading-6'>
                {description}
            </p>
            <button className='px-3 py-2 mt-12 w-40 bg-neutral-950 text-white'>{buttonText}</button>
        </div>
        <img src={image} className='object-contain w-1/4 h-auto' />
        </div>
        
    </div>
  )
}

export default GenericSection