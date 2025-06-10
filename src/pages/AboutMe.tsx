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
      I'm <strong>Kankati Mokshagna Anurag</strong>, passionate about building secure, intelligent, and autonomous systems. I love working at the intersection of <strong>cybersecurity</strong>, <strong>embedded IoT</strong>, <strong>robotics</strong>, and <strong>AI/ML</strong> to solve real-world problems.
    </p>

    <p>
      Currently, I'm a <strong>Summer Research Intern at NIT Karnataka</strong>, where I’ve enhanced <strong>Internet of Vehicles (IoV)</strong> performance by optimizing V2I communication and improving edge data processing efficiency by <strong>22%</strong>. I also developed lightweight modules using <strong>MQTT</strong> and <strong>CAN protocols</strong>.
    </p>

    <p>
      In cybersecurity, I’ve performed advanced <strong>penetration testing</strong>, improving test coverage by <strong>15%</strong> and reducing attack surfaces by <strong>30%</strong> using tools like <strong>Metasploit</strong> and <strong>Burp Suite</strong>.
    </p>

    <p>
      At the <strong>Center for Embedded Systems, MVGR</strong>, I worked on wireless sensor networks and <strong>PID control systems</strong> using <strong>STM32</strong> and <strong>Arduino</strong>, improving robotics precision through real-time data integration.
    </p>

    <p>
      I actively contribute to open-source projects like <strong>Voice AI Telugu</strong> and <strong>OpenStreetMap</strong>. I'm also a volunteer at <strong>SwechaAP</strong>, <strong>MVGR GLUG</strong>, and the <strong>National Service Scheme (NSS)</strong>, promoting community-driven technology through workshops and awareness programs.
    </p>

    <p><strong>Some of my achievements include:</strong></p>
    <ul className="list-disc pl-5">
      <li>🏆 Winner – <strong>Cyber Secured Champion Competition</strong> (500+ participants)</li>
      <li>🥈 2nd Place – <strong>AVISHKAR Season-2 Hackathon</strong> (₹1 Lakh prize)</li>
      <li>🎯 <strong>Top 6 Rank</strong> – Embedded Scholarship Exam by SENSE Academia</li>
      <li>🚁 Presented drone-based innovations at <strong>Andhra Pradesh Hackathon on Drones</strong></li>
      <li>🏅 <strong>Top 10 Finalist</strong> – Serve Smart Hackathon by IIT BHU</li>
      <li>🎖️ Finalist – <strong>Hack IITK</strong> by IIT Kanpur's C3i Hub</li>
    </ul>

    <p>
      I’m currently pursuing a <strong>B.Tech in Electronics and Communication Engineering</strong> at <strong>MVGR College of Engineering</strong> and completed my Class 12 (PCM) at <strong>Apex Junior College</strong>.
    </p>

    <p>
      I enjoy creating solutions where innovation, impact, and security come together. If you're working on the future of tech, <strong>let’s connect</strong>!
      <br /><br />
      🔗 <a href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" target="_blank"><strong>Connect with me on LinkedIn</strong></a>
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
