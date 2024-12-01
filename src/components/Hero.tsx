import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-black my-8 px-4 md:px-0">
     
      <div className="flex-1 md:pr-8 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-xl font-bold mb-2 text-gray-400 mx-12" >HELLO</h2>
        <h3 className="text-3xl font-semibold mb-2 mx-12">I am Anosha</h3>
        <p className="text-xl mb-4 mx-12">A Web Developer</p>
        <p className="text-base px-2 md:px-0 mx-12">
          Welcome to my web developer portfolio! Im Anosha, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I have worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
        </p>
        <div className="flex justify-center md:justify-start  my-8">
          <button className="inline-flex mx-12 items-center border-2 border-custom-purple bg-custom-purple text-white rounded text-base py-2 px-6 focus:outline-none hover:bg-purple-700 hover:border-purple-700">
            Portfolio
          </button>
          <button className="inline-flex items-center border-2 border-custom-purple bg-custom-purple text-white rounded text-base py-2 px-6 focus:outline-none hover:bg-purple-700 hover:border-purple-700">
            Hire me
          </button>
        </div>
      </div>

     
      <div className="flex justify-center md:justify-end mt-6 md:mt-0">
  <Image 
    src="/images/pic.png.jpg" 
    alt="Anosha Mohsin" 
    width={260} 
    height={260} 
    className="object-cover rounded-[90%] my-0 mx-auto md:my-24 md:mr-36" 
  />
</div>

      </div>
  
  )
}

export default Hero
