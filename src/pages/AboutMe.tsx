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
  Mokshagna Anurag Kankati is a dedicated cybersecurity and robotics enthusiast with a strong focus on engineering secure, intelligent, and autonomous systems that drive innovation and resilience. His hands-on expertise spans <strong>Web Application Pentesting</strong>, <strong>Robotics Development</strong>, <strong>Microcontroller Systems</strong>, and <strong>AI/ML Integration</strong>, enabling him to design technologies that are both future-ready and transformative.
</p>

<p>
  Currently, Mokshagna is gaining valuable experience as a <strong>Summer Research Intern at the National Institute of Technology Karnataka</strong>, and as an <strong>AI Intern at Indux Solar</strong>. His previous roles include contributing to <strong>IoT and embedded systems solutions</strong> as a <strong>Student Member at the Center For Embedded Systems, MVGR College of Engineering</strong>, and promoting <strong>open-source technologies</strong> as a <strong>Member of SwechaAP</strong>.
</p>

<p>
  In addition to his technical roles, Mokshagna is actively involved in <strong>community building and volunteering</strong> through groups like <strong>MVGR GLUG</strong>, <strong>Swecha</strong>, and the <strong>National Service Scheme (NSS)</strong>. He also serves as a <strong>student member</strong> at the <strong>Center for Embedded Systems</strong> and the <strong>Center for Cyber Security Studies & Research</strong>, reflecting his commitment to <strong>learning</strong>, <strong>collaboration</strong>, and meaningful contributions to the <strong>tech ecosystem</strong>.
</p>

<p>
  Mokshagna's academic background includes a <strong>Bachelor of Technology in Electrical, Electronics, and Communications Engineering</strong> from <strong>MVGR College of Engineering</strong>, and a <strong>Class 12 PCM</strong> from <strong>Apex Junior College</strong>.
</p>

<p>
  With a passion for <strong>innovation</strong> and a <strong>collaborative spirit</strong>, Mokshagna is always eager to connect and drive technological advancements forward.
</p>

<p>
  Feel free to connect with Mokshagna on <a href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" target="_blank"><strong>LinkedIn</strong></a> to explore potential collaborations and innovations together!
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
