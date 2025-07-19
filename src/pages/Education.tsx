import { useEffect, useState } from "react";
import { 
  GraduationCap, 
  Building, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Book, 
  Award,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Education = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const educationItems = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "MVGR College of Engineering",
      location: "Andhra Pradesh, India",
      period: "November 2022 - April 2026 (Expected)",
      type: "Full-time",
      description: "Pursuing comprehensive education in Electronics and Communication Engineering with specialized focus on modern technologies and research applications.",
      highlights: [
        "Specialized coursework in Cybersecurity and Network Security",
        "Hands-on experience with STM32 microcontrollers and embedded systems",
        "Research projects involving RPLIDAR and ROS2 frameworks",
        "Development of smart autonomous systems and IoT applications",
        "Active participation in the Center for Embedded Systems"
      ],
      skills: ["Embedded Systems", "IoT", "Cybersecurity", "STM32", "ROS2"],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFIUBurNyBI1A/company-logo_200_200/company-logo_200_200/0/1630485137495?e=1753920000&v=beta&t=LvPX-A3nT20mWHZMyL6XrWHQLVD7whBRKp9KItip8hg",
      category: "higher",
      status: "ongoing"
    },
    {
      degree: "Higher Secondary School (Class 11-12)",
      institution: "Apex Junior College",
      location: "Andhra Pradesh, India",
      period: "June 2020 - May 2022",
      type: "Full-time",
      description: "Completed intermediate education with focus on science subjects, building strong foundation for engineering studies.",
      highlights: [
        "Comprehensive study of Physics with emphasis on modern applications",
        "Advanced Mathematics including calculus and analytical geometry",
        "Chemistry fundamentals with laboratory practical experience",
      ],
      skills: ["Physics", "Mathematics", "Chemistry"],
      logo: "https://th.bing.com/th/id/OIP.duljyJ3eIdH2hIICWH2zFgHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "secondary",
      status: "completed"
    },
    {
      degree: "Secondary School (Class 5-10)",
      institution: "Fort City School",
      location: "Andhra Pradesh, India", 
      period: "June 2014 - March 2020",
      type: "Full-time",
      description: "Foundational education years that sparked interest in technology and innovation, building essential academic and personal skills.",
      highlights: [
        "Strong foundation in core subjects including Science and Mathematics",
        "Early exposure to computer science and basic programming concepts",
        "Active participation in science exhibitions and technology fairs",
        "Development of communication skills and teamwork abilities",
      ],
      skills: ["Academic Fundamentals", "Science", "Mathematics", "Computer Basics"],
      logo: "https://www.joonsquare.com/usermanage/image/business/fort-city-school-vizianagaram-8936/fort-city-school-vizianagaram-logo.jpg",
      category: "primary",
      status: "completed"
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "higher":
        return GraduationCap;
      case "secondary":
        return Book;
      case "primary":
        return Award;
      default:
        return GraduationCap;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
<<<<<<< HEAD
<<<<<<< HEAD
        return "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700";
=======
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-600 shadow-sm shadow-blue-500/20";
      case "completed":
        return "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-600 shadow-sm shadow-purple-500/20";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600 text-white border-gray-600 shadow-sm shadow-gray-500/20";
<<<<<<< HEAD
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    }
  };

  const getTypeColor = (type: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
    return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800";
=======
    return "bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-teal-600 shadow-sm shadow-teal-500/20";
>>>>>>> ab37948 (Initial commit)
=======
    return "bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-teal-600 shadow-sm shadow-teal-500/20";
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--muted)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Overlay */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />

=======
      {/* Removed pattern and gradient overlays for full darkness */}
>>>>>>> ab37948 (Initial commit)
=======
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30" />

>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 sm:mb-8 shadow-lg shadow-blue-500/25">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
=======
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 sm:mb-8 shadow-lg shadow-blue-500/25">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
<<<<<<< HEAD
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              Educational Journey
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              My academic path from foundational learning to specialized engineering education, building expertise in technology and innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 hidden md:block rounded-full shadow-lg"></div>
=======
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-400 hidden md:block rounded-full shadow-lg"></div>
>>>>>>> ab37948 (Initial commit)
=======
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-400 hidden md:block rounded-full shadow-lg"></div>
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {educationItems.map((item, index) => {
                const CategoryIcon = getCategoryIcon(item.category);
                const isExpanded = expandedItems.includes(index);
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex flex-col lg:flex lg:items-center`}
                    style={{ transitionDelay: `${100 * index}ms` }}
                  >
                    {/* Timeline Node - Hidden on mobile */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-400 shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-purple-500 transition-all duration-300 z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
=======
                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300 z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
>>>>>>> ab37948 (Initial commit)
=======
                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300 z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
                    </div>

                    {/* Education Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'} ml-0 sm:ml-16 md:ml-20 lg:ml-0`}>
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
=======
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/50 dark:via-indigo-950/40 dark:to-purple-950/50 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
>>>>>>> ab37948 (Initial commit)
=======
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/50 dark:via-indigo-950/40 dark:to-purple-950/50 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              {item.logo && (
                                <div className="relative group/logo flex-shrink-0">
                                  <img
                                    src={item.logo}
                                    alt={`${item.institution} logo`}
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg sm:rounded-xl border-2 border-white dark:border-gray-700 shadow-md transition-transform group-hover/logo:scale-110"
                                    title={item.institution}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-xl"></div>
                                </div>
                              )}
                              <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.degree}
                                </h2>
                                <div className="flex items-center text-sm sm:text-base text-muted-foreground mb-2">
                                  <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                  <span className="font-medium line-clamp-1">{item.institution}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getStatusColor(item.status)}`}>
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                              </div>
                              <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${getTypeColor(item.type)}`}>
                                {item.type}
                              </div>
                            </div>
                          </div>

                          {/* Location and Date */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 mt-3 sm:mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="line-clamp-1">{item.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="font-medium">{item.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 sm:p-6">
                          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Skills Tags */}
                          <div className="mb-4 sm:mb-6">
                            <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                              Key Subjects
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <span
                                  key={i}
<<<<<<< HEAD
<<<<<<< HEAD
                                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105 active:scale-95"
=======
                                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/50 dark:via-indigo-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:via-indigo-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:via-indigo-800/50 dark:hover:to-purple-800/50 active:scale-95"
>>>>>>> ab37948 (Initial commit)
=======
                                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/50 dark:via-indigo-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:via-indigo-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:via-indigo-800/50 dark:hover:to-purple-800/50 active:scale-95"
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Collapsible Highlights - Now with better touch targets */}
                          <div>
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center justify-between w-full py-2 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4 hover:text-foreground transition-colors"
                              aria-expanded={isExpanded}
                            >
                              <span>Academic Highlights</span>
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            
                            <div 
                              className={`transition-all duration-300 overflow-hidden ${
                                isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-60'
                              }`}
                              aria-hidden={!isExpanded}
                            >
                              <div className="space-y-2 sm:space-y-3">
                                {item.highlights.slice(0, isExpanded ? undefined : 2).map((highlight, i) => (
                                  <div key={i} className="flex items-start space-x-2 sm:space-x-3 group/item">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-sm text-muted-foreground leading-normal sm:leading-relaxed group-hover/item:text-foreground transition-colors">
                                      {highlight}
                                    </span>
                                  </div>
                                ))}
                                {!isExpanded && item.highlights.length > 2 && (
                                  <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium pl-5">
                                    +{item.highlights.length - 2} more...
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50/80 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground">
                              <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="capitalize">{item.category} Education</span>
                            </div>
                            <button 
                              className="flex items-center space-x-1 sm:space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/btn p-1"
                              aria-label={`More about ${item.degree} at ${item.institution}`}
                            >
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Education;
=======
export default Education;
>>>>>>> ab37948 (Initial commit)
=======
export default Education;
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
