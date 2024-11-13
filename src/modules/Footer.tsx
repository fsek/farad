import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import fsek from '../assets/fseklogga.svg';

function Footer() {
    return (
      <footer className="grid grid-cols-3 gap-4 content-center w-full">
        <div className="mx-16 my-10 flex justify-start space-x-6">
          <a
            href="https://www.linkedin.com/company/f-sek-farad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="h-12 w-12" />
          </a>
          <a
            href="https://instagram.com/fsek_farad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-black dark:text-white hover:text-pink-500 transition-colors"
          >
            <FaInstagram className="h-12 w-12" />
          </a>
        </div>
        <div className="text-center my-6 font-bold">
          <div className="text-2xl">Kontakt:</div>
          <a href="mailto:farad@fsektionen.se" className="text-black dark:text-white text-2xl font-bold hover:text-gray-300">farad@fsektionen.se</a>
        </div>
        <a href="https://fsektionen.se/" className="flex justify-end">
          <img src={fsek} alt="Logo" className="h-20 my-4 mx-8" />
        </a>
      </footer>
      );
}

export default Footer;