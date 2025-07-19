
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, GraduationCap, ExternalLink, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
  id: 3,
  title: "Finalist - Hack IITK by C3i Hub, IIT Kanpur",
  date: "February 2025",
  description:
    "Selected as one of the finalists in Hack IITK, a premier international cybersecurity hackathon organized by C3i Hub, IIT Kanpur. Participated in the Grand Finale hosted at IIT Kanpur after multiple competitive rounds.",
  icon: <Award className="h-6 w-6 text-yellow-500" />,
  driveLink: "https://www.c3ihub.org/hackiitk", // Replace with actual link if you have one for proof
  backgroundImage: "url('https://www.iitk.ac.in/new/images/home/slider/slider01.jpg')",
  tag: "Hackathon",
  tags: ["Cybersecurity", "Innovation", "Competitive Programming", "Finalist"],
  category: "hackathon",
  status: "completed"
},

  {
    id: 1,
    title: "Cyber Secured Champion",
    date: "July 2024",
=======
    id: 1,
    title: "Cyber Secured Champion",
    date: "July 2023",
>>>>>>> ab37948 (Initial commit)
=======
    id: 1,
    title: "Cyber Secured Champion",
    date: "July 2023",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    description:
      "Won the Cyber Secured Champion Competition hosted by Cyber Intelligence Global LLP among 500+ participants.",
    icon: <Award className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/1N1XWaoUaqoBECPDg6XV9sdhnWVatWH1V/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQF_y8DX0rfq4A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724253109368?e=1746878400&v=beta&t=uMsJGK0QXil3s7gPZRH4u6eyQMxdMLsvVrH-0iG5lYc')",
    tag: "Cybersecurity",
    tags: ["CTF", "Python", "Networking"],
    category: "competition",
    status: "completed"
  },
  {
    id: 2,
    title: "2nd Place - AVISHKAR Season-2",
<<<<<<< HEAD
<<<<<<< HEAD
    date: "December 2024",
=======
    date: "August 2023",
>>>>>>> ab37948 (Initial commit)
=======
    date: "August 2023",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    description:
      "Secured 2nd place in AVISHKAR Season-2 Hackathon with a prize of ₹1,00,000.",
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_a-few-months-ago-my-team-team-four-bytes-activity-7304902751681949696-AIT0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQEvawsLhVnoNQ/feedshare-shrink_2048_1536/B56ZWA6QxyGUAs-/0/1741624512246?e=1749081600&v=beta&t=my0UOzYIpeXxzm0Yr4zRsgWL3QwrgvOFp4L-5TP7sz8')",
    tag: "Hackathon",
    tags: ["Innovation", "Problem Solving", "Teamwork"],
    category: "hackathon",
    status: "completed"
  },
  {
    id: 3,
    title: "Top 6 - Embedded Systems Exam",
<<<<<<< HEAD
<<<<<<< HEAD
    date: "November 2024",
=======
    date: "October 2023",
>>>>>>> ab37948 (Initial commit)
=======
    date: "October 2023",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    description:
      "Ranked in the Top 6 nationally in the Embedded Systems Scholarship Exam by SENSE Academia.",
    icon: <Award className="h-6 w-6 text-red-500" />,
    driveLink: "https://www.linkedin.com/posts/senseacademia_senseacademia-scholarshipexam-results-ugcPost-7262801188801122304-ni-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQGjsR5laW2FWQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731586735832?e=1749081600&v=beta&t=2FwLJiql33PJWpl8aBFxGIfQhyVEwzGH2KRE9OXXZoY')",
    tag: "Embedded Systems",
    tags: ["STM32", "Microcontrollers", "IoT"],
    category: "scholarship",
    status: "completed"
  },
  {
    id: 4,
    title: "Drone Hackathon - AP",
<<<<<<< HEAD
<<<<<<< HEAD
    date: "November 2024",
=======
    date: "November 2023",
>>>>>>> ab37948 (Initial commit)
=======
    date: "November 2023",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    description:
      "Proposed drone-based solutions and delivered impactful presentations at the Andhra Pradesh Drone Hackathon.",
    icon: <Award className="h-6 w-6 text-purple-500" />,
    driveLink: "https://drive.google.com/file/d/18j4-OSqKCFlrUx9Mxl1Agnbu25uOdDYG/view?usp=sharing",
    backgroundImage: "url('https://i.pinimg.com/originals/95/33/eb/9533eb7ed05a5de4ccaef103e8f3415d.jpg')",
    tag: "Aerospace",
    tags: ["Drones", "Innovation", "Presentations"],
    category: "hackathon",
    status: "completed"
  },
  {
    id: 5,
    title: "Volunteer & IoT Speaker - Freedom Fest 2025",
<<<<<<< HEAD
<<<<<<< HEAD
    date: "March 2025",
=======
    date: "April 2025",
>>>>>>> ab37948 (Initial commit)
=======
    date: "April 2025",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    description:
      "Served as a Volunteer and IoT Speaker at Freedom Fest 2025 organized by Swecha. Trained 25 students in IoT using Arduino UNO, NodeMCU (ESP8266), real-time sensors, LIDAR, and Tinkercad simulations. Facilitated cloud-based IoT integration and hands-on learning for embedded systems and automation.",
    icon: <Award className="h-6 w-6 text-pink-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_freedomfest2025-iot-swecha-activity-7313936884324282372-syAo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQFJTdn0lseLOg/feedshare-shrink_2048_1536/B56ZYBSztnHQAo-/0/1743778432398?e=1749081600&v=beta&t=FwhcBwdfJuHq9AMhAJX6hgWnVGf-V1N1Q1qttN_JKkM')",
    tag: "IoT & Education",
    tags: ["IoT", "Arduino", "NodeMCU", "LIDAR", "Cloud", "Open Source"],
    category: "teaching",
    status: "completed"
  }
];

const certifications = [
  {
    id: 1,
    title: "Practical Ethical Hacking - TCM Security",
    date: "October 2024",
    description:
      "Successfully completed Practical Ethical Hacking from TCM Security. Gained hands-on experience in penetration testing, vulnerability assessment, and ethical hacking methodologies. Credential ID: 196z74v0.",
    icon: <GraduationCap className="h-6 w-6 text-red-600" />,
    driveLink: "https://drive.google.com/file/d/1kdsOZyErVJECMUDYf6qOco5fzTSd2_x9/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQFYPmQFN93dKg/profile-treasury-image-shrink_800_800/B56ZaWF6G4GkAY-/0/1746274854565?e=1746882000&v=beta&t=qPUSY1rxKLQow2mjmvPY7_dtA5mJO4ZP3UhMApMejEU')",
    tag: "Cybersecurity",
    tags: ["Ethical Hacking", "Pentesting", "TCM Security"],
    category: "certification",
    status: "completed"
  },
  {
    id: 2,
    title: "NLP Challenge Participation - IIT Kharagpur",
    date: "January 2025",
    description:
      "Participated in the NLP Challenge hosted by IIT Kharagpur. Worked on real-world NLP problems, collaborated with top minds, and explored transformative AI applications.",
    icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    driveLink: "https://drive.google.com/file/d/19zoCsqkPZzLSQChxGIOCoY_e_RGXkU8H/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQE_0CuZdU0nhg/profile-treasury-image-shrink_800_800/B56ZaWFpHPGoAY-/0/1746274784642?e=1746882000&v=beta&t=VMtrlrfuFr2chgYPeqmB46OniXvoQKkH3Ngg7338Woc')",
    tag: "AI & NLP",
    tags: ["NLP", "AI", "Hackathon", "IIT Kharagpur"],
    category: "participation",
    status: "completed"
  },
  {
    id: 3,
    title: "Embedded For Beginners - NIELIT",
    date: "August 2024",
    description:
      "Completed the Embedded For Beginners course from NIELIT, covering fundamentals of embedded systems, microcontrollers, and interfacing. Credential ID: OLC 20958.",
    icon: <GraduationCap className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/10wrOmLbETQkml0__fOLIg-LwJJz62M36/view?usp=sharing",
<<<<<<< HEAD
<<<<<<< HEAD
    driveLink: "https://drive.google.com/file/d/10wrOmLbETQkml0__fOLIg-LwJJz62M36/view?usp=sharing",
    backgroundImage: "",
=======
    backgroundImage: "url('https://media.licdn.com/dms/image/D4D22AQHq9u6G0Nhyfw/feedshare-shrink_800/0/1685079401784?e=2147483647&v=beta&t=xnFXgoAqAnuLX8SkZOMMbIBdOs_7TYk6aeyL7ZldYo4')",
>>>>>>> ab37948 (Initial commit)
=======
    backgroundImage: "url('https://media.licdn.com/dms/image/D4D22AQHq9u6G0Nhyfw/feedshare-shrink_800/0/1685079401784?e=2147483647&v=beta&t=xnFXgoAqAnuLX8SkZOMMbIBdOs_7TYk6aeyL7ZldYo4')",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    tag: "Embedded Systems",
    tags: ["Embedded", "NIELIT", "IoT", "Microcontrollers"],
    category: "certification",
    status: "completed"
  },
  {
  id: 4,
  title: "Introduction To Industry 4.0 and Industrial Internet Of Things - NPTEL",
  date: "April 2025",
  description:
    "Completed the NPTEL course on Introduction to Industry 4.0 and Industrial Internet of Things offered by IIT Kharagpur, covering smart manufacturing, cyber-physical systems, IIoT architecture, and use cases in modern industries.",
  icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
  driveLink: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing", // <-- replace with actual link
  backgroundImage: "url('https://media.licdn.com/dms/image/D4D22AQHq9u6G0Nhyfw/feedshare-shrink_800/0/1685079401784?e=2147483647&v=beta&t=xnFXgoAqAnuLX8SkZOMMbIBdOs_7TYk6aeyL7ZldYo4')",
  tag: "Industry 4.0",
<<<<<<< HEAD
<<<<<<< HEAD
  tags: ["Industry 4.0", "IIoT", "Smart Manufacturing"],
=======
  tags: ["Industry 4.0", "IIoT", "Smart Manufacturing", "Cyber-Physical Systems"],
>>>>>>> ab37948 (Initial commit)
=======
  tags: ["Industry 4.0", "IIoT", "Smart Manufacturing", "Cyber-Physical Systems"],
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
  category: "certification",
  status: "completed"
}

];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");
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
  }, [activeTab]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "competition":
<<<<<<< HEAD
<<<<<<< HEAD
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
      case "hackathon":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
      case "certification":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800";
      case "scholarship":
        return "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800";
      case "teaching":
        return "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-800";
      case "participation":
        return "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700";
=======
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-600 shadow-sm shadow-green-500/20";
      case "hackathon":
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-600 shadow-sm shadow-blue-500/20";
      case "certification":
        return "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-600 shadow-sm shadow-purple-500/20";
      case "scholarship":
        return "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-600 shadow-sm shadow-orange-500/20";
      case "teaching":
        return "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-pink-600 shadow-sm shadow-pink-500/20";
      case "participation":
        return "bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600 text-white border-gray-600 shadow-sm shadow-gray-500/20";
<<<<<<< HEAD
>>>>>>> ab37948 (Initial commit)
    }
  };

  const renderCards = (items: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => {
        const isExpanded = expandedItems.includes(item.id);
        
        return (
          <div
            key={item.id}
            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group"
            style={{ transitionDelay: `${100 * index}ms` }}
          >
<<<<<<< HEAD
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden group-hover:-translate-y-2 h-full flex flex-col">
              {/* Background Image Header */}
              <div
                className="h-48 relative bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                style={{
                  backgroundImage: item.backgroundImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.category)}`}>
                    {item.tag}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.slice(0, isExpanded ? undefined : 3).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                    {!isExpanded && item.tags && item.tags.length > 3 && (
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="px-2 py-1 text-xs text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        +{item.tags.length - 3} more
                      </button>
                    )}
                  </div>
                  {isExpanded && item.tags && item.tags.length > 3 && (
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="mt-2 flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ChevronUp className="w-3 h-3 mr-1" />
                      Show less
                    </button>
                  )}
                </div>

                {/* View Button */}
                <div className="mt-auto">
                  <a
                    href={item.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
=======
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div
                className="bg-white/90 dark:bg-[#18192a]/95 backdrop-blur-xl border border-blue-200 dark:border-[#23234a] rounded-2xl shadow-lg flex flex-col h-full overflow-hidden text-black dark:text-white"
              >
                {/* Background Image Header */}
                <div
                  className="h-48 relative rounded-t-2xl overflow-hidden"
                  style={{
                    backgroundImage: item.backgroundImage || "url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="px-3 py-1 rounded-full text-sm font-medium border bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md border-white/20">
                      {item.tag}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg">
                      {item.icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  {/* Skills Tags */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {item.tags?.slice(0, isExpanded ? undefined : 3).map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {!isExpanded && item.tags && item.tags.length > 3 && (
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="px-2 py-1 text-xs text-blue-600 dark:text-blue-300 font-medium hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
                        >
                          +{item.tags.length - 3} more
                        </button>
                      )}
                    </div>
                    {isExpanded && item.tags && item.tags.length > 3 && (
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="mt-2 flex items-center text-xs text-blue-600 dark:text-blue-300 font-medium hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
                      >
                        <ChevronUp className="w-3 h-3 mr-1" />
                        Show less
                      </button>
                    )}
                  </div>
                  {/* View Button */}
                  <div className="mt-auto">
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 group/btn border border-blue-700/20"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
>>>>>>> ab37948 (Initial commit)
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
<<<<<<< HEAD
=======
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
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
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-lg shadow-blue-500/25">
              <Award className="w-10 h-10 text-white" />
            </div>
<<<<<<< HEAD
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-100 dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
=======
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent mb-6">
>>>>>>> ab37948 (Initial commit)
              Achievements & Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my accomplishments, certifications, and recognitions in technology, cybersecurity, and innovation.
            </p>
          </div>
<<<<<<< HEAD

          {/* Enhanced Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl p-2 shadow-xl">
=======
          {/* Enhanced Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/60 dark:bg-[#23234a]/90 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl p-2 shadow-xl">
>>>>>>> ab37948 (Initial commit)
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "achievements" ? "default" : "ghost"}
                  onClick={() => setActiveTab("achievements")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "achievements" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
<<<<<<< HEAD
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
=======
                      : "hover:bg-gray-100 dark:hover:bg-[#23234a]"
>>>>>>> ab37948 (Initial commit)
                  }`}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Achievements
                </Button>
                <Button
                  variant={activeTab === "certifications" ? "default" : "ghost"}
                  onClick={() => setActiveTab("certifications")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "certifications" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
<<<<<<< HEAD
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
=======
                      : "hover:bg-gray-100 dark:hover:bg-[#23234a]"
>>>>>>> ab37948 (Initial commit)
                  }`}
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Certifications
                </Button>
              </div>
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> ab37948 (Initial commit)
          {/* Content */}
          <div key={activeTab}>
            {activeTab === "achievements" && renderCards(achievements)}
            {activeTab === "certifications" && renderCards(certifications)}
          </div>
<<<<<<< HEAD

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
=======
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/60 dark:bg-[#23234a]/90 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
>>>>>>> ab37948 (Initial commit)
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Collaborate
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in working together or learning more about my achievements? I'd love to connect!
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
            </div>
=======
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/50 dark:from-emerald-950/20 dark:via-transparent dark:to-teal-950/20" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Achievements & Certifications</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "achievements" ? "default" : "outline"}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "outline"}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "achievements" ? achievements : certifications).map((item, index) => {
            const isExpanded = expandedItems.includes(item.id);
            const visibleTags = isExpanded ? item.tags : item.tags?.slice(0, 3);
            const extraTagCount = item.tags && item.tags.length > 3 ? item.tags.length - 3 : 0;
            // Tag color map (all lowercase for matching)
            const tagColors: Record<string, string> = {
              hackathon: "bg-blue-800 text-blue-200",
              cybersecurity: "bg-green-800 text-green-200",
              "embedded systems": "bg-purple-800 text-purple-200",
              "ai & nlp": "bg-pink-800 text-pink-200",
              aerospace: "bg-indigo-800 text-indigo-200",
              "iot & education": "bg-yellow-800 text-yellow-200",
              "industry 4.0": "bg-orange-800 text-orange-200",
              participation: "bg-indigo-800 text-indigo-200",
              certification: "bg-purple-800 text-purple-200",
            };
            const tagKey = (item.tag || "").toLocaleLowerCase();
            const tagClass = tagColors[tagKey] || "bg-blue-800 text-blue-200";
            return (
              <div
                key={item.id}
                className="bg-white text-gray-900 dark:bg-[#181A20] dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg flex flex-col h-full p-0"
              >
                {/* Header: Icon, Tag, Title, Date */}
                <div className="flex flex-col gap-2 px-6 pt-6 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                      {item.icon}
                    </div>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-semibold ${tagClass}`}>{item.tag}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white leading-tight mt-1">{item.title}</div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                {/* Description */}
                <div className="px-6 pb-2">
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">{item.description}</p>
                  {/* Technologies */}
                  <div className="mb-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase mb-1">
                      <Tag className="w-3 h-3" /> TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {visibleTags && visibleTags.map((tag: string, i: number) => (
                        <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                      {!isExpanded && extraTagCount > 0 && (
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="text-xs text-blue-600 dark:text-blue-400 underline focus:outline-none"
                        >
                          +{extraTagCount} more
                        </button>
                      )}
                      {isExpanded && extraTagCount > 0 && (
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="text-xs text-blue-600 dark:text-blue-400 underline focus:outline-none"
                        >
                          Show less
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div className="mt-auto px-6 pb-6 pt-2">
                  {item.driveLink && (
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                    >
                      View Details <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Collaborate
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in working together or learning more about my achievements? I'd love to connect!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
