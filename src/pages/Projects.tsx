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
      image: "https://thumbs.dreamstime.com/z/self-driving-delivery-bot-travels-along-urban-path-ai-generated-autonomous-delivery-robot-navigating-city-sidewalk-dusk-313006773.jpg", // Updated image for Robotics
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
      image: "https://hackster.imgix.net/uploads/attachments/1460483/_ihMxXCqSaS.blob?auto=compress%2Cformat&w=900&h=675&fit=min", // Updated image for Robotics
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
      image: "https://dvg.karnatakasmartcity.in/wp-content/uploads/2019/12/smart-city-solution-800x423.png", // Updated image for IoT/Traffic
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
      image: "https://tse4.mm.bing.net/th/id/OIP.xnF6HHtq3PBRQpvygevRUwHaDt?rs=1&pid=ImgDetMain", // Updated image for AI/ML
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
      image: "https://tse3.mm.bing.net/th/id/OIP.W5UtlzGJMLx4cMa6s_ih7gHaEg?rs=1&pid=ImgDetMain", // Updated image for CV
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
      image: "https://thumbs.dreamstime.com/b/phishing-fish-hook-computer-keyboard-computer-crime-data-theft-cyber-crime-41526513.jpg", // Updated image for Cybersecurity
      tags: ["Python", "VirusTotal API"],
      links: {
        github: "https://github.com/MokshagnaAnurag/Phishing-Link-Scanner.git",
      }
    },
      {
        id: 7,
        title: "Voice Gender Recognition Using MATLAB",
        description: "Designed a voice-based gender classification system using MATLAB. Extracted features like pitch, formants, and MFCCs to train and evaluate machine learning classifiers for accurate gender prediction.",
        category: "Signal Processing",
        image: "https://1.bp.blogspot.com/-os0fFsNoOhY/Xfn5lQKq0JI/AAAAAAAAAdU/l9jMt7QApOEP3PufPWR_qbtddBzEDWi4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Gender%2BDetection%2Bfrom%2Bspeech.jpg",
        tags: ["MATLAB", "MFCC", "Audio Processing", "Machine Learning"],
        links: {
          github: "https://github.com/MokshagnaAnurag/Voice-Gender-Recognition-Using-Matlab.git",
        }
      },
      {
        id: 8,
        title: "Semantic Segmentation in Autonomous Vehicles",
        description: "Implemented semantic segmentation models using deep learning to classify each pixel in driving scenes. Utilized datasets like Cityscapes and frameworks such as TensorFlow/Keras to enhance perception systems in self-driving applications.",
        category: "Autonomous Systems",
        image: "https://tse2.mm.bing.net/th/id/OIP.XNBjTvyLeuov7vkDFzcJFQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
        tags: ["Deep Learning", "TensorFlow", "Semantic Segmentation", "Autonomous Driving"],
        links: {
          github: "https://github.com/MokshagnaAnurag/SEMANTIC-SEGMENTATION-IN-AUTONOMOUS-VEHICLES.git",
        }
      },
    {
  id: 3,
  title: "Map Text Extractor",
  description: "A Python tool that extracts region numbers and place names from topographic maps using OCR. Utilizes EasyOCR, OpenCV, and image processing techniques to enhance accuracy. Outputs results as CSV files and visualization images, organized in timestamped directories.",
  category: "Computer Vision",
  image: "https://img.freepik.com/premium-vector/optical-character-recognition-ocr-technology-by-recognize-text-from-photo_518018-304.jpg?w=2000", // Replace with your actual image if available
  tags: ["Python", "OCR", "EasyOCR", "OpenCV", "Map Processing"],
  links: {
    github: "https://github.com/MokshagnaAnurag/OCR.git", // Replace with actual GitHub repo link for this project
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
