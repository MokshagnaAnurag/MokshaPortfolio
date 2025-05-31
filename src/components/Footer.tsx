import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column: About & Social */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Mokshagna Anurag Kankati</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A passionate engineer and security enthusiast working at the intersection of software, AI, and embedded systems. I love crafting innovative solutions that are not just functional—but intelligent.
              </p>
              <blockquote className="italic text-xs text-muted-foreground border-l-4 border-blue-500 pl-3">
                “Building Smarter Systems — From Securing Web Apps to Powering Autonomous Robots with AI & Sensor Fusion 🚀”
              </blockquote>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/MokshagnaAnurag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kankati-mokshagna-anurag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kankati.mokshagnaanurag@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Column: What I Do */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">What I Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
  <li>🔒 Web App Security (VAPT)</li>
  <li>🚗 Autonomous Systems</li>
  <li>🤖 Robotics & Sensor Fusion</li>
  <li>🧠 AI/ML Development</li>
  <li>🛰️ Embedded Systems & IoT</li>
</ul>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Mokshagna Anurag Kankati Portfolio. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Based in India • Open to Internships, Freelance, and Full-Time Roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
