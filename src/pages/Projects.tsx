
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
};

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Define project data
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Self-Driving Robot with RPLIDAR C1",
      description: "Engineered an autonomous navigation system leveraging ROS and Python. Integrated LiDAR-based SLAM for precise obstacle detection and implemented real-time path planning algorithms for seamless movement.",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1580894906475-403276d3942d?auto=format&fit=crop&q=80&w=800", // Updated image for Robotics
      tags: ["ROS", "Python", "LiDAR", "SLAM"],
      links: {
        github: "https://github.com",
      }
    },
    {
      id: 2,
      title: "Self-Balancing Robot",
      description: "Built a two-wheeled self-balancing robot using the MPU6050 sensor for tilt detection and implemented PID control for stability. Tuned PID parameters for real-time response and smooth balancing on various surfaces.",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1600984695792-8ca1c6042b50?auto=format&fit=crop&q=80&w=800", // Updated image for Robotics
      tags: ["Arduino", "MPU6050", "PID Control"],
      links: {
        github: "https://github.com",
      }
    },
    {
      id: 3,
      title: "Smart Traffic Management System",
      description: "Developed an AI-powered traffic light system using Raspberry Pi and OpenCV to optimize real-time traffic flow. Implemented vehicle detection and priority-based traffic control, reducing congestion by 30%.",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800", // Updated image for IoT/Traffic
      tags: ["IoT", "Raspberry Pi", "OpenCV"],
      links: {
        github: "https://github.com",
      }
    },
    {
      id: 4,
      title: "Cybercrime Reporting Chatbot",
      description: "Developed intent recognition and sentiment analysis using Scikit-learn to classify user inputs and extract report insights. Launched a Gradio-based frontend to enhance accessibility and streamline crime reporting workflows.",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1544198998-7f0fd1a2f050?auto=format&fit=crop&q=80&w=800", // Updated image for AI/ML
      tags: ["Python", "AI", "Gradio", "NLP"],
      links: {
        github: "https://github.com/MokshagnaAnurag/Cybercrime-Reporting-Chatbot.git",
      }
    },
    {
      id: 5,
      title: "Automatic Vehicle Number Plate Detection",
      description: "Built a real-time license plate recognition system using OpenCV, achieving over 95% detection accuracy. Optimized image preprocessing for consistent performance in varying lighting and weather conditions.",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1565571183-4ab05f9b1b94?auto=format&fit=crop&q=80&w=800", // Updated image for CV
      tags: ["Python", "OpenCV"],
      links: {
        github: "https://github.com/MokshagnaAnurag/anpr.raspberrypi.git",
      }
    },
    {
      id: 6,
      title: "Phishing Link Scanner",
      description: "Developed a scanner analyzing 200+ URLs for phishing risks, integrating VirusTotal API for comprehensive security analysis. Incorporated user-friendly outputs with intuitive, color-coded feedback for enhanced usability.",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1553835787-86e89cced7e2?auto=format&fit=crop&q=80&w=800", // Updated image for Cybersecurity
      tags: ["Python", "VirusTotal API"],
      links: {
        github: "https://github.com/MokshagnaAnurag/Phishing-Link-Scanner.git",
      }
    },
    {
      id: 7,
      title: "Steganography in Images using LSB",
      description: "Implemented LSB-based steganography technique to embed and extract messages securely within images. Integrated AES encryption for added message confidentiality and used OpenCV and NumPy to maintain image fidelity while embedding hidden content.",
      category: "Security",
      image: "https://images.unsplash.com/photo-1593704406971-d9d4dbd1a7b4?auto=format&fit=crop&q=80&w=800", // Updated image for Security
      tags: ["Python", "OpenCV", "LSB", "AES"],
      links: {
        github: "https://github.com/MokshagnaAnurag/Steganography-in-Images-LSB.git",
      }
    }
  ];
  
  // Filter categories
  const categories = ["all", ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  // Filtered projects
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);
  
  // Animation for elements entering viewport
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
    
    document.querySelectorAll(".project-animate").forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(".project-animate").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [filteredProjects]);
  
  return (
    <div className="min-h-screen py-20 grid-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">My Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A collection of my work across various tech domains, from IoT systems to AI solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-animate opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                tags={project.tags}
                links={project.links}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
