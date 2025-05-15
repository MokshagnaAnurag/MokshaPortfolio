
import { useEffect } from "react";
import { Briefcase, Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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

  const experienceItems = [
    {
      title: "Summer Research Intern ",
      company: "National Institute of Technology Karnataka",
      location: "	Surathkal, Mangaluru, Karnataka, India",
      period: "May 2025 - Present",
      description: "",
      responsibilities: [

      ]
    },
    {
      title: "Cyber Security Intern",
      company: "ShadowFox",
      location: "Remote, India",
      period: "September 2024 - October 2024",
      description: "Gained hands-on experience in penetration testing, vulnerability analysis, and exploit development under industry mentorship.",
      responsibilities: [
        "Performed penetration testing using tools like Nmap, Gobuster, and Metasploit",
        "Conducted vulnerability assessments and documented potential security issues",
        "Analyzed network traffic using Wireshark and implemented secure configurations",
        "Worked with VeraCrypt to explore secure data storage practices"
      ]
    },
    {
      title: "Intern",
      company: "Center for Cyber Security Studies & Research",
      location: "India",
      period: "September 2024 - December 2024",
      description: "Engaged in research-oriented cybersecurity initiatives, contributing to awareness and analytical studies on modern threats.",
      responsibilities: [
        "Collaborated on research projects to analyze current cybersecurity trends",
        "Assisted in developing awareness programs and security documentation",
        "Contributed to discussions influencing institutional cybersecurity strategy"
      ]
    },
    {
      title: "Student Member",
      company: "Center For Embedded Systems, MVGR College of Engineering",
      location: "Vizianagaram, Andhra Pradesh",
      period: "July 2024 - Present",
      description: "Worked on embedded and IoT solutions involving STM32 boards in a hands-on academic research setting.",
      responsibilities: [
        "Developed real-time IoT prototypes using STM32 microcontrollers",
        "Integrated sensor modules and communication interfaces for smart systems",
        "Collaborated with peers to simulate embedded applications",
        "Documented technical workflows and research findings"
      ]
    },
    {
      title: "Member",
      company: "Swecha Andhra Pradesh",
      location: "Remote",
      period: "October 2023 - Present",
      description: "Promoted open-source technologies through collaborative development and community-driven projects.",
      responsibilities: [
        "Contributed to Swecha Voice AI Telugu and OpenStreetMap projects",
        "Promoted open-source awareness in student communities",
        "Participated in regional workshops and tech outreach events",
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Professional Experience</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My career journey in technology, focusing on IoT, embedded systems, and robotics.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-border hidden md:block"></div>
            
            {experienceItems.map((item, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative"
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="bg-card rounded-xl border p-6 shadow-sm md:ml-16">
                  {/* Timeline dot - visible only on md screens and above */}
                  <div className="absolute left-6 top-10 w-6 h-6 rounded-full bg-primary hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-background"></div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full md:hidden">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold ml-3 md:ml-0">{item.title}</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-4 space-y-2 md:space-y-0 md:space-x-6">
                    <div className="flex items-center">
                      <Building size={16} className="mr-2 flex-shrink-0" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 flex-shrink-0" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-muted-foreground">
                    {item.description}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-muted-foreground">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
