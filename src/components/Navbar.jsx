import React, { useState } from 'react';
import rocket from "../../public/rocket.png"
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black sticky top-0 z-50 shadow-lg border-b border-gray-500 h-auto py-1 md:py-3"> {/* Reduced padding for mobile */}
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">

                {/* Left side: Logo and Heading */}
                <div className="flex items-start text-white text-lg mt-2 p-2 md:mt-0 md:w-auto ml-4 md:ml-32">
                    {/* Rocket icon next to the text */}
                    <img src={rocket} alt="" className=' text-5xl mr-0 md:ml-0 md:mr-0 mt-0' />
                    <div className="text-left flex flex-col items-center justify-center  ">

                        <h1 className="tracking-wide text-white transition-transform duration-700 transform hover:translate-x-1 mr-4 md:mr-6 ">
                            Pinnacle Route
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base ml-2 md:ml-2 ">
                            Achieve Digital Excellence
                        </p>
                    </div>
                </div>

                {/* Right side: Navigation Links for Desktop */}
                <div className="hidden md:flex space-x-6 items-center md:gap-7 md:mr-11">
                    <a href="#home" className="text-white hover:text-gray-300 transition-all duration-700 hover:scale-105">Home</a>
                    <a href="#abouts" className="text-white hover:text-gray-300 transition-all duration-700 hover:scale-105">Abouts</a>
                    <a href="#services" className="text-white hover:text-gray-300 transition-all duration-700 hover:scale-105">Services</a>
                    <a href="#overwork" className="text-white hover:text-gray-300 transition-all duration-700 hover:scale-105">Overwork</a>
                    <a href="#faq" className="text-white hover:text-gray-300 transition-all duration-700 hover:scale-105">FAQ</a>

                    <a href="#contact" className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                        Contact Us <GoArrowUpRight className="ml-2" />
                    </a>

                </div>

                {/* Mobile Menu (Hamburger Icon) */}
                <div className="md:hidden flex items-center ml-auto">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="w-6 mb-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-500 mr-auto">
                    <a href="#home" className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors duration-700">Home</a>
                    <a href="#abouts" className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors duration-700">Abouts</a>
                    <a href="#services" className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors duration-700">Services</a>
                    <a href="#overwork" className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors duration-700">Overwork</a>
                    <a href="#faq" className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors duration-700">FAQ</a>
                    <a href="#contact" className="block text-white border-t border-gray-500 px-4 py-2 hover:bg-gray-700 transition-colors duration-700">Contact Us  </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
