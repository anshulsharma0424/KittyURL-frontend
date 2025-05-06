import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-4 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center lg:text-left">
          &copy; 2025 KittyURL. All rights reserved.
        </p>

        <div className="flex space-x-5">
          <a href="#" className="hover:text-gray-200 transition-colors duration-200">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-200">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-200">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-200">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
