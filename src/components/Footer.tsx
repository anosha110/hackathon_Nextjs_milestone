import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
          ©2024 Anosha Portfolio. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black mx-2">
              <AiOutlineGithub size={24} />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black mx-2">
              <SiVercel size={24} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
