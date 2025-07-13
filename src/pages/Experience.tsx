
import { useEffect, useState } from "react";
import { 
  Briefcase, 
  Building, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Code, 
  Shield, 
  Cpu,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Experience = () => {
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

  const experienceItems = [
     {
<<<<<<< HEAD
    title: "Freelance",
=======
    title: "Freelance Developer",
>>>>>>> ab37948 (Initial commit)
    company: "Fiverr",
    location: "Remote",
    period: "June 2025 - Present",
    type: "Remote",
    description: "Providing freelance technical services including software development, debugging, and tech consultation for clients worldwide via the Fiverr platform.",
    responsibilities: [
      "Delivered tailored coding solutions to client-specific problems",
      "Provided consultation and troubleshooting for web and software projects",
      "Maintained clear communication with clients to understand and meet project requirements",
      "Managed project timelines and expectations as an independent contractor"
    ],
    skills: ["Freelancing", "Client Communication", "Web Development", "Debugging", "Consulting"],
    logo: "https://th.bing.com/th/id/OIP.DU-CEn_a5oYN4lobC2wgfwHaHa?r=0&rs=1&pid=ImgDetMain",
    category: "freelance",
    status: "current"
  },
    {
      title: "Summer Research Intern",
      company: "National Institute of Technology Karnataka",
      location: "Surathkal, Mangaluru, Karnataka, India",
      period: "May 2025 - Present",
      type: "Onsite",
      description: "Working on cutting-edge Internet of Vehicles (IoV) research, contributing to the future of connected transportation systems.",
      responsibilities: [
        "Developing IoV communication protocols and algorithms",
        "Research on vehicle-to-everything (V2X) technologies",
        "Performance analysis of vehicular networks",
        "Collaboration with research teams on innovative solutions"
      ],
      skills: ["IoT", "Research", "V2X", "Networking"],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQELOxKVJQ1O1Q/company-logo_100_100/company-logo_100_100/0/1630582637661/national_institute_of_technology_karnataka_logo?e=1753920000&v=beta&t=yvoigf0eBFqB6PUzBPo6f1xfoRxGpWbCwg61g7BTysk",
      category: "research",
      status: "current"
    },
    {
      title: "Academic Research Intern",
      company: "UnlockDiscounts",
      location: "Remote",
      period: "May 2025 - Present",
      type: "Remote",
      description: "Leading academic research initiatives focused on data-driven methodologies and innovative research practices.",
      responsibilities: [
        "Design and execute comprehensive research projects",
        "Collect, analyze, and interpret complex datasets",
        "Conduct thorough literature reviews and methodology development",
        "Present research findings to stakeholders and academic communities",
        "Collaborate with cross-functional teams on research initiatives"
      ],
      skills: ["Research", "Data Analysis", "Methodology", "Academic Writing"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE4eAG8McwTIQ/company-logo_100_100/B56ZUDMzjHHQAY-/0/1739515443888/unlockdiscounts_logo?e=1753920000&v=beta&t=tOWV9Tr3wjGWsAWMlU4jEGK2GjdE-4BsT7LUhqvY5Fw",
      category: "research",
      status: "current"
    },
    {
      title: "Cyber Security Intern",
      company: "ShadowFox",
      location: "Remote, India",
      period: "September 2024 - October 2024",
      type: "Remote",
      description: "Gained extensive hands-on experience in penetration testing, vulnerability analysis, and exploit development under expert industry mentorship.",
      responsibilities: [
        "Performed comprehensive penetration testing using Nmap, Gobuster, and Metasploit",
        "Conducted thorough vulnerability assessments and security audits",
        "Analyzed network traffic patterns using Wireshark",
        "Implemented secure configurations and data protection strategies",
        "Explored advanced encryption techniques with VeraCrypt"
      ],
      skills: ["Penetration Testing", "Metasploit", "Network Security", "Vulnerability Assessment"],
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEhtVaBN3hNjw/company-logo_100_100/B56ZbC67ftHgAU-/0/1747026952648/shadowfoxinfo_logo?e=1753920000&v=beta&t=vYHBzDiYQSbvBfX-F2hSvCatIbF6urD9PwOpH7HVzRw",
      category: "cybersecurity",
      status: "completed"
    },
    {
      title: "Student Member",
      company: "Center For Embedded Systems, MVGR College of Engineering",
      location: "Vizianagaram, Andhra Pradesh",
      period: "July 2024 - Present",
      type: "On-site",
      description: "Developing innovative embedded and IoT solutions using STM32 microcontrollers in a collaborative academic research environment.",
      responsibilities: [
        "Developed real-time IoT prototypes using STM32 microcontrollers",
        "Integrated advanced sensor modules and communication interfaces",
        "Collaborated on embedded system design and implementation",
        "Documented technical workflows and research methodologies",
        "Contributed to smart systems development projects"
      ],
      skills: ["STM32", "Embedded Systems", "IoT", "Sensor Integration"],
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFIUBurNyBI1A/company-logo_200_200/company-logo_200_200/0/1630485137495?e=1753920000&v=beta&t=LvPX-A3nT20mWHZMyL6XrWHQLVD7whBRKp9KItip8hg",
      category: "embedded",
      status: "ongoing"
    },
    {
      title: "Member",
      company: "Swecha Andhra Pradesh",
      location: "Remote",
      period: "October 2023 - Present",
      type: "Remote",
      description: "Actively promoting open-source technologies through collaborative development and community-driven innovation projects.",
      responsibilities: [
        "Contributed to Swecha Voice AI Telugu language processing",
        "Enhanced OpenStreetMap data accuracy and coverage",
        "Promoted open-source awareness in academic communities",
        "Organized and participated in regional tech workshops",
        "Mentored students in open-source contribution practices"
      ],
      skills: ["Open Source", "Community Building", "AI/ML", "Geographic Information Systems"],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQG87c6Y46rfxw/company-logo_100_100/company-logo_100_100/0/1630670125923?e=1753920000&v=beta&t=wQTlw2yHGywatX1NdNPY6XhoPbjVFOJO-GvwDr25fDk",
      category: "community",
      status: "ongoing"
    },
    {
      title: "Cybersecurity Research Intern",
      company: "Center for Cyber Security Studies & Research",
      location: "India · Remote",
      period: "September 2024 – December 2024",
      type: "Remote",
      description: "Contributed to advanced cybersecurity research addressing emerging threats and developing innovative defense strategies for modern organizations.",
      responsibilities: [
        "Collaborated on threat intelligence and advanced defense strategies",
        "Developed comprehensive training materials for security awareness",
        "Conducted research on emerging cybersecurity threats and vulnerabilities",
        "Supported organizations in implementing effective security measures",
        "Analyzed current cybersecurity trends and future implications"
      ],
      skills: ["Threat Intelligence", "Security Research", "Training Development", "Risk Assessment"],
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFafHZzL_xBNg/company-logo_100_100/company-logo_100_100/0/1699632075773?e=1753920000&v=beta&t=i9WW0LHucZ0dnXQh0lrZJYUejBWlmwpZEI8J57LOfHk",
      category: "cybersecurity",
      status: "completed"
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cybersecurity":
        return Shield;
      case "embedded":
        return Cpu;
      case "research":
        return Code;
      default:
        return Briefcase;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
<<<<<<< HEAD
        return "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800";
      case "ongoing":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
      case "completed":
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700";
=======
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-600 shadow-sm shadow-blue-500/20";
      case "ongoing":
        return "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-600 shadow-sm shadow-purple-500/20";
      case "completed":
        return "bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-teal-600 shadow-sm shadow-teal-500/20";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600 text-white border-gray-600 shadow-sm shadow-gray-500/20";
>>>>>>> ab37948 (Initial commit)
    }
  };

  const getTypeColor = (type: string) => {
    return type === "Remote" 
<<<<<<< HEAD
      ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800"
      : "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800";
=======
      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20"
      : "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-600 shadow-sm shadow-orange-500/20";
>>>>>>> ab37948 (Initial commit)
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
<<<<<<< HEAD
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--muted)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />

=======
      {/* Removed pattern and gradient overlays for full darkness */}
>>>>>>> ab37948 (Initial commit)
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
<<<<<<< HEAD
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 sm:mb-8 shadow-lg shadow-blue-500/25">
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
=======
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 sm:mb-8 shadow-lg shadow-blue-500/25">
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
>>>>>>> ab37948 (Initial commit)
              Professional Experience
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              My journey through technology, research, and innovation - from embedded systems and IoT to cybersecurity and academic research.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
<<<<<<< HEAD
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 hidden md:block rounded-full shadow-lg"></div>
=======
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-400 hidden md:block rounded-full shadow-lg"></div>
>>>>>>> ab37948 (Initial commit)

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {experienceItems.map((item, index) => {
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
                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-400 shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-purple-500 transition-all duration-300 z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
=======
                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-indigo-500 transition-all duration-300 z-10">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
>>>>>>> ab37948 (Initial commit)
                    </div>

                    {/* Experience Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'} ml-0 sm:ml-16 md:ml-20 lg:ml-0`}>
<<<<<<< HEAD
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
=======
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/50 dark:via-indigo-950/40 dark:to-purple-950/50 p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
>>>>>>> ab37948 (Initial commit)
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              {item.logo && (
                                <div className="relative group/logo flex-shrink-0">
                                  <img
                                    src={item.logo}
                                    alt={`${item.company} logo`}
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg sm:rounded-xl border-2 border-white dark:border-gray-700 shadow-md transition-transform group-hover/logo:scale-110"
                                    title={item.company}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-xl"></div>
                                </div>
                              )}
                              <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.title}
                                </h2>
                                <div className="flex items-center text-sm sm:text-base text-muted-foreground mb-2">
                                  <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                  <span className="font-medium line-clamp-1">{item.company}</span>
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
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <span
                                  key={i}
<<<<<<< HEAD
                                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105 active:scale-95"
=======
                                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/50 dark:via-indigo-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:via-indigo-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:via-indigo-800/50 dark:hover:to-purple-800/50 active:scale-95"
>>>>>>> ab37948 (Initial commit)
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Collapsible Responsibilities - Now with better touch targets */}
                          <div>
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center justify-between w-full py-2 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-4 hover:text-foreground transition-colors"
                              aria-expanded={isExpanded}
                            >
                              <span>Key Responsibilities</span>
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
                                {item.responsibilities.slice(0, isExpanded ? undefined : 2).map((responsibility, i) => (
                                  <div key={i} className="flex items-start space-x-2 sm:space-x-3 group/item">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-sm text-muted-foreground leading-normal sm:leading-relaxed group-hover/item:text-foreground transition-colors">
                                      {responsibility}
                                    </span>
                                  </div>
                                ))}
                                {!isExpanded && item.responsibilities.length > 2 && (
                                  <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium pl-5">
                                    +{item.responsibilities.length - 2} more...
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
                              <span className="capitalize">{item.category} Experience</span>
                            </div>
                            <button 
                              className="flex items-center space-x-1 sm:space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/btn p-1"
                              aria-label={`More about ${item.title} at ${item.company}`}
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

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-5 sm:mb-6">
                I'm always excited to work on innovative projects and contribute to cutting-edge research.
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Experience;
=======
export default Experience;
>>>>>>> ab37948 (Initial commit)
