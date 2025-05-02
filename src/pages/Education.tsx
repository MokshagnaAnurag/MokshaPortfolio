
import { useEffect } from "react";
import { Book, GraduationCap, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Education = () => {
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

  const educationItems = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "MVGR College of Engineering, Vizianagaram, Andhra Pradesh",
      period: "November 2022 - May 2026 (Expected)",
      description: "Focused on Cybersecurity, IoT, and Embedded Systems. Engaged in projects involving STM32 Boards, RPLIDAR, ROS2, and smart autonomous systems.",
      achievements: [
        "Won the Cyber Secured Champion Competition hosted by Cyber Intelligence Global LLP among 500+ participants",
        "Secured 2nd place in AVISHKAR Season-2 Hackathon with a prize of ₹1,00,000",
        "Ranked in the Top 6 nationally in the Embedded Systems Scholarship Exam by SENSE Academia",
        "Proposed drone-based solutions and delivered presentations at the Andhra Pradesh Drone Hackathon",
        "Advanced to the Top 10 finalist teams in the Serve Smart Hackathon organized by IIT Banaras",
        "Member - Center for Embedded Systems & Center for Cyber Security"
      ]
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Apex Junior College",
      period: "June 2020 - May 2022",
      description: "Studied foundational courses in Physics, Mathematics, and Chemistry",
      achievements: [
      ]
    },
    {
      degree: "Schooling (Class 5–10)",
      institution: "Fort City School",
      period: "June 2014 - March 2020",
      description: "Built academic fundamentals and early interests in technology and innovation.",
      achievements: [
        "Tech Club Member",
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Education</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and engineering.
            </p>
          </div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-card rounded-xl border p-6 shadow-sm"
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {index === 0 ? <GraduationCap size={24} className="text-primary" /> : 
                       index === 1 ? <Book size={24} className="text-primary" /> : 
                       <Award size={24} className="text-primary" />}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h2 className="text-2xl font-bold">{item.degree}</h2>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">{item.institution}</h3>
                    
                    <p className="mb-4 text-muted-foreground">
                      {item.description}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Achievements
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    </div>
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

export default Education;
