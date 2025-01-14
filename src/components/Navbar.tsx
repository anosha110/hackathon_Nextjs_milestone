import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font border-b border-white shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="text-2xl font-bold text-custom-purple">Anosha</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-black hover:text-pink-900 font-bold">Home</Link>
      <Link href="/about" className="mr-5 text-black hover:text-pink-900 font-bold">About</Link>
      <Link href="/projects" className="mr-5 text-black hover:text-pink-900 font-bold">Projects</Link>
      <Link href="/contact" className="mr-5 text-black hover:text-pink-900 font-bold">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
      CV
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>


    </div>
  )
}

export default Navbar
