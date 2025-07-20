import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-t border-white/20 dark:border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mokshagna Anurag Kankati Portfolio. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/MokshagnaAnurag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-indigo-600 transition-colors bg-white/60 dark:bg-gray-900/60 rounded-full p-2 border border-white/20 dark:border-gray-800/50 shadow-sm hover:shadow-blue-500/20"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-indigo-600 transition-colors bg-white/60 dark:bg-gray-900/60 rounded-full p-2 border border-white/20 dark:border-gray-800/50 shadow-sm hover:shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:kankati.mokshagna@gmail.com" 
              className="text-blue-500 hover:text-indigo-600 transition-colors bg-white/60 dark:bg-gray-900/60 rounded-full p-2 border border-white/20 dark:border-gray-800/50 shadow-sm hover:shadow-blue-500/20"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.fiverr.com/users/mokshagnaanurag/seller_dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-indigo-600 transition-colors bg-white/60 dark:bg-gray-900/60 rounded-full p-2 border border-white/20 dark:border-gray-800/50 shadow-sm hover:shadow-blue-500/20"
              aria-label="Fiverr"
            >
              <Briefcase size={20} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Based in India • Open to Internships, Freelance, and Full-Time Roles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
