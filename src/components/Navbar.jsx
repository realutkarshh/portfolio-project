import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/60 bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-2xl font-light text-gray-800">UTKARSH SINGH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-950 transition duration-300 cursor-pointer">
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition duration-300 cursor-pointer"
          >
            CONTACT
          </Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-stone-100 shadow-md py-4 flex flex-col items-center gap-4 text-gray-700">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={800}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
            >
              FAQ
            </Link>
          </li>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300">
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition duration-300 cursor-pointer"
          >
            CONTACT
          </Link>
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
