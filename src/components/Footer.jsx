// src/components/Footer.jsx

const Footer = () => {
    return (
      <footer className="bg-gray-950 text-stone-100 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Utkarsh Singh. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/realutkarshh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/realutkarshh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:utkarsh2020051@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  