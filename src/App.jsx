// Updated code to replace <Link> components with <a> tags as requested
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import image from './images/portfolio-1.jpg';
import { IoReorderThreeSharp,IoClose } from "react-icons/io5"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-blue-500 text-white py-4 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">
            <a href="#home" className="hover:text-secondary transition duration-300">
              Navbar
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation">
              {isOpen ? <IoClose /> : <IoReorderThreeSharp />}
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`absolute top-16 left-0 w-full bg-blue-500 text-white lg:static lg:flex lg:items-center lg:space-x-8 lg:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center">
              <li className="py-2 lg:py-0">
                <a
                  href="#home"
                  className="block hover:text-secondary cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="#about"
                  className="block hover:text-secondary cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="#projects"
                  className="block hover:text-secondary cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="#resume"
                  className="block hover:text-secondary cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  Resume
                </a>
              </li>
              <li className="py-2 lg:py-0">
                <a
                  href="#contact"
                  className="block hover:text-secondary cursor-pointer transition duration-300"
                  onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
