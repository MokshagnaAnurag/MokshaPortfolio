import { useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  // Scroll animation for elements entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/kankati-mokshagna-anurag/",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/MokshagnaAnurag",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:kankati.mokshagnaanurag@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen py-20 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full overflow-hidden border-4 border-primary shadow-md">
              <img
                src="/lovable-uploads/2ababfc8-b745-4dfc-8090-286e082497d7.png"
                alt="Kankati Mokshagna Anurag"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Electronics and Communication Engineering student passionate about Cybersecurity, IoT, Embedded Systems, Robotics and AI/ML.
            </p>

            {/* Social Links */}
            <div className="flex justify-center mt-6 space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Card Section */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-card rounded-xl border p-8 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-xl overflow-hidden border shadow-md">
                  <img
                    src="/lovable-uploads/2ababfc8-b745-4dfc-8090-286e082497d7.png"
                    alt="Kankati Mokshagna Anurag"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right: Bio */}
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Kankati Mokshagna Anurag</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    I’m <strong>Kankati Mokshagna Anurag</strong>, a passionate and driven Electronics and Communication Engineering student at <strong>MVGR College of Engineering</strong>, graduating in <strong>2026</strong>. With a strong foundation in <strong>Cybersecurity, IoT, and Embedded Systems</strong>, I’m constantly exploring how these domains intersect with real-world applications — from <strong>autonomous vehicle technologies</strong> to <strong>space exploration</strong>.
                  </p>

                  <p>
                    My work spans across diverse technical areas, including <strong>penetration testing</strong>, <strong>exploit development</strong>, <strong>embedded system design</strong>, and <strong>AI/ML integration</strong>. I’ve built projects like <em>vehicle number plate detection using Python and OpenCV</em>, <em>Boston house price prediction using Gradient Boosting</em>, and contributed to open-source initiatives like <strong>GirlScript Summer of Code</strong> and <strong>Swecha Andhra Pradesh</strong>. I actively participate in <strong>hackathons</strong>, and recently, I took part in the <strong>NLP Challenge at IIT Kharagpur</strong>, which strengthened my enthusiasm for <strong>natural language processing</strong> and its role in intelligent applications.
                  </p>

                  <p>
                    I’m also a <strong>volunteer</strong> and <strong>community builder</strong> through groups like <strong>MVGR GLUG</strong>, <strong>Swecha</strong>, and the <strong>National Service Scheme (NSS)</strong>, and I serve as a <strong>student member</strong> at the <strong>Center for Embedded Systems</strong> and the <strong>Center for Cyber Security Studies & Research</strong>. These roles reflect my commitment to <strong>learning</strong>, <strong>collaboration</strong>, and contributing meaningfully to the <strong>tech ecosystem</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild size="lg">
              <Link to="/experience">View Experience</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/education">View Education</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
