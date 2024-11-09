import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
       
          <div className="flex flex-col md:flex-row w-full mb-10">
            <h1 className="text-2xl md:text-3xl font-medium title-font text-gray-900 md:w-1/3 mb-4 md:mb-0">
            Featured Projects
            </h1>
            <p className="md:pl-6 md:w-2/3 mx-auto leading-relaxed text-base">
            Here is a showcase of my mini-projects, each designed with care to demonstrate various web development skills. From interactive elements to a fully responsive website, these projects highlight my journey in building user-friendly and visually appealing applications. Explore each project to see how small ideas can come together to create something engaging and functional.
            </p>
          </div>
          
        
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/BMI calculator.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/num guessing.png.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-1 md:p-2 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/calculator.png.png"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="p-1 md:p-2 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/web1.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/digital-clock.png.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover hover:border-black hover:border-2"
                  src="/images/colorchanger.png.png"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
