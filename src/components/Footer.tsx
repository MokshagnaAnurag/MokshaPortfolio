<<<<<<< HEAD
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 py-10 border-t-4 border-blue-500 dark:border-blue-700 bg-white dark:bg-[#0a0a13] shadow-2xl text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-black dark:text-white">
              &copy; {currentYear} Mokshagna Anurag Kankati Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
=======

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-white/10 bg-[#13131a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-300">
          {/* Left */}
          <div className="md:w-1/3 w-full text-center md:text-left">
            &copy; {currentYear} Mokshagna Anurag Kankati Portfolio. All rights reserved.
          </div>
          {/* Center */}
          <div className="md:w-1/3 w-full flex justify-center space-x-6">
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            <a 
              href="https://github.com/MokshagnaAnurag" 
              target="_blank" 
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
=======
              className="hover:text-blue-400 transition-colors"
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" 
              target="_blank" 
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
=======
              className="hover:text-blue-400 transition-colors"
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:kankati.mokshagna@gmail.com" 
<<<<<<< HEAD
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
=======
              className="hover:text-blue-400 transition-colors"
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
<<<<<<< HEAD
            <a 
              href="https://www.fiverr.com/users/mokshagnaanurag/seller_dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Fiverr"
            >
              <Briefcase size={22} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-black dark:text-white">
              Based in India • Open to Internships, Freelance, and Full-Time Roles
            </p>
=======
          </div>
          {/* Right */}
          <div className="md:w-1/3 w-full text-center md:text-right text-gray-400">
            Based in India  Open to Internships, Freelance, and Full-Time Roles
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
