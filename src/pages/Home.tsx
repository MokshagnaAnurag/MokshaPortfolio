import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  ChevronRight,
  Database,
  Lock,
  Smartphone,
  Bot,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TechDomain from "@/components/TechDomain";

// Custom hook for typing effect
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Reset text on update
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const typedName = useTypingEffect("H Hello, I'm Kankati Mokshagna Anurag ", 100);

  // Scroll animation for "animate-on-scroll" elements
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const techDomains = [
    {
      title: "Internet of Things",
      icon: <Smartphone size={20} className="text-tech-iot" />,
      color: "bg-tech-iot",
      description:
        "Built real-time IoT systems using STM32 and sensor modules; experienced in wireless communication and data fusion for smart environments.",
    },
    {
      title: "Embedded Systems",
      icon: <Cpu size={20} className="text-tech-embedded" />,
      color: "bg-tech-embedded",
      description:
        "Designed and implemented embedded solutions with STM32 boards, focusing on low-level programming and hardware integration for automation.",
    },
    {
      title: "Robotics",
      icon: <Bot size={20} className="text-tech-robotics" />,
      color: "bg-tech-robotics",
      description:
        "Specialized in autonomous navigation using ROS2, RPLIDAR, and sensor fusion; developed and simulated robotic behaviors using Gazebo and RViz.",
    },
    {
      title: "AI & Machine Learning",
      icon: <Database size={20} className="text-tech-ai" />,
      color: "bg-tech-ai",
      description:
        "Applied machine learning for intelligent decision-making in robotics and IoT; participated in NLP and predictive modeling challenges.",
    },
    {
      title: "Cybersecurity",
      icon: <Lock size={20} className="text-tech-cybersec" />,
      color: "bg-tech-cybersec",
      description:
        "Experienced in web application pentesting, exploit development, and network analysis using Metasploit, Nmap, Wireshark, and more.",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative hero-gradient min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">
                {typedName}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
            Building Smarter Systems — From Securing Web Apps to Powering Autonomous Robots with AI & Sensor Fusion 🚀
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/projects">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToAbout}
                className="font-medium"
              >
                About My Expertise <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-background/50 backdrop-blur-sm border"
            aria-label="Scroll down to expertise section"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path d="M12 17L6 9H18L12 17Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </section>

      {/* Expertise Section */}
      <section ref={aboutRef} className="py-20 md:py-32 grid-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
            I'm passionate about intelligent automation and cybersecurity, and I use a wide range of technologies to create secure, efficient, and innovative solutions that solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techDomains.map((domain, index) => (
              <div
                key={domain.title}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TechDomain
                  title={domain.title}
                  icon={domain.icon}
                  color={domain.color}
                  description={domain.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <Button asChild size="lg">
              <Link to="/projects">
                Explore My Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
