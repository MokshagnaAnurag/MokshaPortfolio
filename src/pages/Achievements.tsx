import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    id: 1,
    title: "Cyber Secured Champion",
    date: "July 2023",
    description:
      "Won the Cyber Secured Champion Competition hosted by Cyber Intelligence Global LLP among 500+ participants.",
    icon: <Award className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/1N1XWaoUaqoBECPDg6XV9sdhnWVatWH1V/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQF_y8DX0rfq4A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724253109368?e=1746878400&v=beta&t=uMsJGK0QXil3s7gPZRH4u6eyQMxdMLsvVrH-0iG5lYc')",
    tag: "Cybersecurity",
    tags: ["CTF", "Python", "Networking"],
  },
  {
    id: 2,
    title: "2nd Place - AVISHKAR Season-2",
    date: "August 2023",
    description:
      "Secured 2nd place in AVISHKAR Season-2 Hackathon with a prize of ₹1,00,000.",
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_a-few-months-ago-my-team-team-four-bytes-activity-7304902751681949696-AIT0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQEvawsLhVnoNQ/feedshare-shrink_2048_1536/B56ZWA6QxyGUAs-/0/1741624512246?e=1749081600&v=beta&t=my0UOzYIpeXxzm0Yr4zRsgWL3QwrgvOFp4L-5TP7sz8')",
    tag: "Hackathon",
    tags: ["Innovation", "Problem Solving", "Teamwork"],
  },
  {
    id: 3,
    title: "Top 6 - Embedded Systems Exam",
    date: "October 2023",
    description:
      "Ranked in the Top 6 nationally in the Embedded Systems Scholarship Exam by SENSE Academia.",
    icon: <Award className="h-6 w-6 text-red-500" />,
    driveLink: "https://www.linkedin.com/posts/senseacademia_senseacademia-scholarshipexam-results-ugcPost-7262801188801122304-ni-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQGjsR5laW2FWQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731586735832?e=1749081600&v=beta&t=2FwLJiql33PJWpl8aBFxGIfQhyVEwzGH2KRE9OXXZoY')",
    tag: "Embedded Systems",
    tags: ["STM32", "Microcontrollers", "IoT"],
  },
  {
    id: 4,
    title: "Drone Hackathon - AP",
    date: "November 2023",
    description:
      "Proposed drone-based solutions and delivered impactful presentations at the Andhra Pradesh Drone Hackathon.",
    icon: <Award className="h-6 w-6 text-purple-500" />,
    driveLink: "https://drive.google.com/file/d/18j4-OSqKCFlrUx9Mxl1Agnbu25uOdDYG/view?usp=sharing",
    backgroundImage: "url('https://i.pinimg.com/originals/95/33/eb/9533eb7ed05a5de4ccaef103e8f3415d.jpg')",
    tag: "Aerospace",
    tags: ["Drones", "Innovation", "Presentations"],
  },
  {
    id: 5,
    title: "Volunteer & IoT Speaker - Freedom Fest 2025",
    date: "April 2025",
    description:
      "Served as a Volunteer and IoT Speaker at Freedom Fest 2025 organized by Swecha. Trained 25 students in IoT using Arduino UNO, NodeMCU (ESP8266), real-time sensors, LIDAR, and Tinkercad simulations. Facilitated cloud-based IoT integration and hands-on learning for embedded systems and automation.",
    icon: <Award className="h-6 w-6 text-pink-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_freedomfest2025-iot-swecha-activity-7313936884324282372-syAo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQFJTdn0lseLOg/feedshare-shrink_2048_1536/B56ZYBSztnHQAo-/0/1743778432398?e=1749081600&v=beta&t=FwhcBwdfJuHq9AMhAJX6hgWnVGf-V1N1Q1qttN_JKkM')",
    tag: "IoT & Education",
    tags: ["IoT", "Arduino", "NodeMCU", "LIDAR", "Cloud", "Open Source"],
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
  },
  {
    id: 3,
    title: "Embedded For Beginners - NIELIT",
    date: "August 2024",
    description:
      "Completed the Embedded For Beginners course from NIELIT, covering fundamentals of embedded systems, microcontrollers, and interfacing. Credential ID: OLC 20958.",
    icon: <GraduationCap className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/10wrOmLbETQkml0__fOLIg-LwJJz62M36/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQGqfk697LGShQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724252233547?e=1746882000&v=beta&t=QoWrH5kaMzPWbQRFQ08O1q2QG9Hub6j8P2bY-se9sPQ')",
    tag: "Embedded Systems",
    tags: ["Embedded", "NIELIT", "IoT", "Microcontrollers"],
  }
];
  


const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  const renderCards = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          className="bg-muted text-white rounded-xl overflow-hidden shadow-lg border border-gray-700 relative"
        >
          {/* Image Header */}
          <div
            className="h-52 relative"
            style={{
              backgroundImage: item.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
              {item.tag || "Achievement"}
            </span>
          </div>

          {/* Card Body */}
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-full">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
            </div>

            <p className="text-sm text-gray-800 dark:text-gray-100">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
            >
              View
            </a>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
              Achievements & Certifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-black dark:text-white/80">
              A collection of awards, certifications, and recognitions showcasing my learning journey and accomplishments.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            <Button
              variant={activeTab === "achievements" ? "default" : "outline"}
              onClick={() => setActiveTab("achievements")}
              className="capitalize"
            >
              Achievements
            </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "outline"}
              onClick={() => setActiveTab("certifications")}
              className="capitalize"
            >
              Certifications
            </Button>
          </div>

          {/* Content */}
          {activeTab === "achievements" && renderCards(achievements)}
          {activeTab === "certifications" && renderCards(certifications)}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
