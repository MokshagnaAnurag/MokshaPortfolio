<<<<<<< HEAD

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mokshagna Anurag Kankati Portfolio. All rights reserved.
            </p>
          </div>
          
=======
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

>>>>>>> ab37948 (Initial commit)
          <div className="flex space-x-4">
            <a 
              href="https://github.com/MokshagnaAnurag" 
              target="_blank" 
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
=======
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
>>>>>>> ab37948 (Initial commit)
            </a>
            <a 
              href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" 
              target="_blank" 
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kankati.mokshagnaanurag@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Based in India • Open to Internships, Freelance, and Full-Time Roles
              </p>
            </div>
=======
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:kankati.mokshagna@gmail.com" 
              className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
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
          </div>
>>>>>>> ab37948 (Initial commit)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
