import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-6">
    
      <div className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
        <Image 
          src="/images/pic.png.jpg" 
          alt="Anosha Mohsin" 
          width={260} 
          height={260} 
          className="object-cover ml-16" 
        />
      </div>

    
      <div className="flex-1 text-gray-800 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4 mx-4 md:mx-10">About Me</h2>
        <p className="text-3xl font-bold text-custom-purple mb-4 mx-4 md:mx-10">Front End Developer</p>
        <p className="text-base mb-6 mx-4 md:mx-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur corporis soluta reprehenderit libero numquam harum a, tenetur cum velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis labore autem repellat voluptatibus aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, repudiandae? Sint, suscipit. Quas odit asperiores rerum, maxime natus nulla vel.
        </p>
        <div className="flex justify-center md:justify-start mx-10">
          <button className="inline-flex items-center bg-custom-purple text-white border-0 py-2 px-3 focus:outline-none hover:bg-purple-700 rounded text-base">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
