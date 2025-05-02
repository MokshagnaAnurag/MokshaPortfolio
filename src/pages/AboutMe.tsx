import { useEffect } from "react";
import { Github, Linkedin, Mail, UserRound, Cpu, Database, Lock, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

  const skills = [
    {
      category: "Internet of Things",
      items: [
        "IoT Architecture Design",
        "MQTT & CoAP Protocols",
        "ThingSpeak, Google Firebase",
        "Wireless Sensor Networks",
      ],
      icon: <Smartphone size={24} className="text-tech-iot" />
    },
    {
      category: "Embedded Systems",
      items: [,
        "RTOS",
        "Microcontrollers",,
        "Hardware Interfaces (SPI, I2C, UART)"
      ],
      icon: <Cpu size={24} className="text-tech-embedded" />
    },
    {
      category: "Robotics",
      items: [
        "ROS (Robot Operating System)",
        "Autonomous Navigation",
        "Computer Vision",
        "Sensor Fusion",
        "Motion Planning & Control"
      ],
      icon: <Bot size={24} className="text-tech-robotics" />
    },
    {
      category: "AI & Machine Learning",
      items: [
        "TensorFlow & PyTorch",
        "Machine Learning Algorithms",
        "Neural Networks",
        "Computer Vision",
        "Edge AI Applications"
      ],
      icon: <Database size={24} className="text-tech-ai" />
    },
    {
      category: "Cybersecurity",
      items: [
        "Web Application Penetration Testing",
        "Network Security"
      ],
      icon: <Lock size={24} className="text-tech-cybersec" />
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen py-20 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <UserRound size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Electronics and Communication Engineering student passionate about Cybersecurity, IoT, Embedded Systems, Robotics and AI/ML.
            </p>
            
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
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-card rounded-xl border p-8 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/2ababfc8-b745-4dfc-8090-286e082497d7.png" 
                    alt="Kankati Mokshagna Anurag" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Kankati Mokshagna Anurag</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    I'm an enthusiastic Electronics and Communication Engineering (ECE) student at MVGR College of Engineering, graduating in 2026. My passion lies at the intersection of Cybersecurity, IoT, Embedded Systems, and AI/ML, where I strive to build intelligent and secure systems that have real-world impact.
                  </p>
                  <p>
                    I'm deeply driven by curiosity and innovation—whether it's developing autonomous vehicle prototypes, securing industrial control systems, or building smart embedded platforms using STM32 boards. I enjoy working on diverse projects, from automatic number plate recognition using Python and OpenCV to participating in NLP challenges and open-source contributions through platforms like GirlScript Summer of Code and Swecha.
                  </p>
                  <p>
                    With a growing interest in Security Operations Center (SOC) roles, I'm honing my skills in threat detection, incident response, and penetration testing, backed by tools like Metasploit, Nmap, and Wireshark. I'm also actively involved in tech communities like NSS, MVGR GLUG, and the Center for Cyber Security Studies & Research, fostering collaborative learning and tech outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          
          
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-card rounded-xl border p-6 shadow-sm"
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
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
