import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import { ArrowRight, Zap, Smartphone, Cpu, Bot, Database, Lock } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TechDomain from "@/components/TechDomain";
import { SplineScene } from "@/components/ui/splite";
import { Vortex } from "@/components/ui/vortex";
import { useInView as useCustomInView } from "@/hooks/use-in-view";

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

// Utility function for cn
function cnUtil(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Icon Cloud Component
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme ? useTheme() : { theme: "light" };

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

function GradientText({ children, className, colors = ["#ffaa40", "#9c40ff", "#ffaa40"], animationSpeed = 8, showBorder = false, ...props }) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };
  return (
    <div
      className={cnUtil(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center",
        "rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500",
        "overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-background rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function FloatingElement({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Particle({ delay = 0 }) {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomSize = Math.random() * 4 + 2;
  const randomDuration = Math.random() * 20 + 10;
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
        y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}

const techDomains = [
  {
    title: "Embedded Systems & IOT",
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

const YourMainComponent = () => {
  return (
    <div className="relative">
      <ParticleBackground />

      <section className="z-10 relative">
        {techDomains.map((domain, index) => (
          <div key={index} className={`p-4 rounded-xl ${domain.color}`}>
            <div className="flex items-center gap-2 mb-2">
              {domain.icon}
              <h3 className="text-lg font-semibold">{domain.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{domain.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const Home = () => {
  const aboutRef = useRef(null);
  const [expertiseRef, expertiseInView] = useCustomInView(0.2);
  // Tech stack icons for the cloud
  const techIcons = [
    // Programming Languages & Libraries
    "python", "c", "matlab", "numpy", "pandas", "scikit-learn", "tensorflow", "keras", "opencv", "gradio",
    
    // Web & Cybersecurity Tools
    "nmap", "burpsuite", "nikto", "gobuster", "sqlmap", "metasploit", "wireshark", "netcat",
    "sublist3r", "theharvester", "shodan", "whois", "exploitdb",
  
    // Web Security Concepts (represented symbolically)
    "csrf", "xss", "idor", "lfi", "rfi", "brokenauth", "commandinjection", // custom icons can be used
  
    // Platforms & Labs
    "tryhackme", "hackthebox", "owasp", "juice-shop", // symbolic/platform icons
  
    // Robotics, Embedded & IoT
    "stm32", "esp32", "nodemcu", "raspberrypi", "arduino", "mqtt", "rtos", "ros2", "gazebo", "rviz", "slam", "nav2", "moveit",
    "rplidar", "ultrasonic", "ir", "mpu6050", "imu", "urdf", "tf",
  
    // Networking & Communication
    "lora", "zigbee", "wifi", "bluetooth", "rfid", "nfc",
  
    // Cloud & Hosting Platforms
    "firebase", "thingspeak",
  
    // ML & NLP Tools
    "huggingface", "transformers", "seaborn", "matplotlib",
  
    // OS & DevOps
    "linux", "kalilinux", "parrotos", "windows", "git", "github",
  
    // Hardware & Debugging
    "oscilloscope", "multimeter", "soldering", "circuitdebugging"
  ];
  
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const typedName = useTypingEffect("Mokshagna Anurag Kankati", 70);
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        {/* Hero Section - always visible, no conditional animation */}
        <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
          <ParticleBackground />
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="opacity-100 translate-y-0 transition-all duration-700">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <GradientText
                      colors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
                      className="inline-block"
                    >
                      {typedName}
                    </GradientText>
                  </h1>
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 text-xl lg:text-2xl text-muted-foreground">
                  Building Smarter Systems — From Securing Web Apps to Powering Autonomous Robots with AI & Sensor Fusion 🚀
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {/* You can add a more detailed description here if needed */}
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                    <Link to="/projects">
                      View Projects <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToAbout}
                    className="rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    About My Expertise
                  </Button>
                </div>
              </div>
              {/* Right Content - Tech Stack Cloud */}
              <div className="opacity-100 translate-y-0 transition-all duration-700 relative flex items-center justify-center">
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-64 h-64" />
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="opacity-100 translate-y-0 transition-all duration-700 absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2" />
            </div>
          </div>
          <style>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient {
              animation: gradient 8s linear infinite;
            }
          `}</style>
        </section>
        {/* Skills Icon Cloud - moved below hero, before expertise section */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 py-20 md:py-32">
          {/* My Technical Expertise (main column) */}
          <div className="lg:w-2/3 w-full order-2 lg:order-1">
            <div className="max-w-3xl mx-auto text-center mb-16 opacity-100 translate-y-0 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My Technical Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm passionate about intelligent automation and cybersecurity, and I use a wide range of technologies to create secure, efficient, and innovative solutions that solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {techDomains.map((domain, index) => (
                <div
                  key={domain.title}
                  className="opacity-100 translate-y-0 transition-all duration-700 hover:scale-[1.03] hover:shadow-lg transition-transform"
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <TechDomain {...domain} />
                </div>
              ))}
            </div>
            <div className="mt-16 text-center opacity-100 translate-y-0 transition-all duration-700"
              style={{ transitionDelay: "800ms" }}
            >
              <Button asChild size="lg">
                <Link to="/projects">
                  Explore My Projects <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Tech Stack & Tools (side column) */}
          <div className="lg:w-1/3 w-full flex flex-col items-center justify-start mb-12 lg:mb-0 order-1 lg:order-2 lg:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Tech Stack & Tools
            </h2>
            <div className="w-full bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-xl shadow-lg p-6 flex justify-center items-center">
              <IconCloud iconSlugs={techIcons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
