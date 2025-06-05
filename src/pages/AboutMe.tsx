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
                  <p> Mokshagna Anurag Kankati is driven by a passion for designing secure, intelligent, and autonomous systems that integrate <strong>cybersecurity</strong>, <strong>embedded IoT</strong>, <strong>robotics</strong>, and <strong>AI/ML</strong> to solve complex challenges with measurable impact. His interdisciplinary expertise enables him to architect technologies that are both resilient and transformative. </p> <p> Currently, he is a <strong>Summer Research Intern at the National Institute of Technology Karnataka</strong>, where he enhanced <strong>Internet of Vehicles (IoV)</strong> performance by optimizing V2I communication and increasing edge data processing efficiency by <strong>22%</strong>. He also developed lightweight IoT modules using <strong>MQTT</strong> and <strong>CAN protocols</strong> to improve system responsiveness and scalability. </p> <p> At <strong>Indux Solar</strong>, Mokshagna deployed a <strong>solar panel fault prediction model</strong> with <strong>95.3% accuracy</strong> using <strong>TensorFlow Lite</strong> on edge devices, enabling proactive maintenance and significantly reducing downtime. </p> <p> In the field of cybersecurity, he has conducted advanced penetration testing, improving security test coverage by <strong>15%</strong> and reducing client attack surfaces by <strong>30%</strong> through the identification and exploitation of critical vulnerabilities using tools like <strong>Metasploit</strong> and <strong>Burp Suite</strong>. </p> <p> At the <strong>Center for Embedded Systems, MVGR College of Engineering</strong>, Mokshagna designed wireless sensor networks and <strong>PID control systems</strong> using <strong>STM32</strong> microcontrollers and <strong>Arduino</strong>, integrating real-time data to enhance precision in robotics and automation. </p> <p> He is an active advocate for open-source technology, contributing to projects such as <strong>Voice AI Telugu</strong> and <strong>OpenStreetMap</strong>. As a member of <strong>SwechaAP</strong> and a volunteer at <strong>MVGR GLUG</strong> and the <strong>National Service Scheme (NSS)</strong>, he promotes community-driven technology and organizes hands-on workshops to foster technical awareness. </p> <p> Mokshagna’s achievements include: <ul> <li>🏆 <strong>Cyber Secured Champion Competition Winner</strong> among 500+ participants</li> <li>🥈 <strong>2nd Place at AVISHKAR Season-2 Hackathon</strong> with a prize of ₹1 Lakh</li> <li>🎯 <strong>Top 6 Rank</strong> in the Embedded Scholarship Exam by SENSE Academia</li> <li>🚁 Presented drone-based innovations at the <strong>Andhra Pradesh Hackathon on Drones</strong></li> <li>🏅 <strong>Top 10 finalist</strong> at the Serve Smart Hackathon by IIT BHU</li> <li>🎖️ Finalist at <strong>Hack IITK</strong> organized by <strong>IIT Kanpur's C3i Hub</strong></li> </ul> </p> <p> Academically, he is pursuing a <strong>Bachelor of Technology in Electronics and Communication Engineering</strong> at <strong>MVGR College of Engineering</strong> and completed his Class 12 (PCM) at <strong>Apex Junior College</strong>. </p> <p> Mokshagna excels at bridging the gaps between secure design, embedded systems, and AI-powered robotics. He thrives in environments where innovation, clarity, and impact intersect—building solutions that improve lives and withstand modern threats. </p> <p> <strong>Let’s connect</strong> if you’re working on the future of intelligent, secure, and resilient systems. <br> 🔗 <a href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" target="_blank"><strong>Connect with Mokshagna on LinkedIn</strong></a> </p>

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
