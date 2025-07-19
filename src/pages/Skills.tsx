<<<<<<< HEAD
import { useState, useEffect } from "react";
import SkillCard from "../components/SkillCard";
import { skills, Skill } from "../data/skills";

type Category = Skill["category"] | "all" | "programming" | "signal_processing";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (selectedCategory === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories: Array<{ value: Category; label: string }> = [
    { value: "all", label: "All Skills" },
    { value: "iot", label: "Internet of Things" },
    { value: "embedded", label: "Embedded Systems" },
    { value: "robotics", label: "Robotics" },
    { value: "ai_ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "signal_processing", label: "Signal Processing" }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-16 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-gradient animate-fade-in`}>
            My Skills & Expertise
          </h1>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
            I've developed expertise across various technologies and tools.
            Here's a breakdown of my technical capabilities.
          </p>
        </div>

        {/* Skill filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category.value
                  ? "bg-primary text-white shadow-lg"
                  : "bg-secondary text-foreground hover:bg-accent/20 dark:bg-white/10 dark:text-white/80"}
              `}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? "translateY(0)" 
                  : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${index * 100 + 300}ms, transform 0.5s ease-out ${index * 100 + 300}ms`
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              delay={index * 100 + 500}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No skills found in this category.</p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            Constantly Learning & Growing
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "1200ms" }}>
            Technology evolves quickly, and I'm committed to staying current with the latest advancements.
            I'm always expanding my skillset through continuous learning and practical application.
          </p>
        </div>
      </div>
=======

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  Code, Database, Shield, Cpu, 
  Laptop, Cloud, Server, Layers 
} from "lucide-react";
// @ts-ignore
import { skills as skillsData } from "../data/skills";

interface SkillsData {
  [category: string]: typeof skillsData;
}

const groupSkillsByCategory = (skillsArr: typeof skillsData) => {
  return skillsArr.reduce((acc: SkillsData, skill) => {
    const cat = skill.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});
};

const categoryLabels: { [key: string]: string } = {
  all: "All Skills",
  iot: "Internet of Things",
  embedded: "Embedded Systems",
  robotics: "Robotics",
  ai_ml: "AI & Machine Learning",
  cybersecurity: "Cybersecurity",
  signal_processing: "Signal Processing",
  programming_language: "Programming Languages",
};

const categoryOrder = [
  "all",
  "iot",
  "embedded",
  "robotics",
  "ai_ml",
  "cybersecurity",
  "signal_processing",
];

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setSkills(groupSkillsByCategory(skillsData));
  }, []);

  // Get filtered skills
  const filteredSkills = selectedCategory === "all"
    ? Object.values(skills).flat()
    : skills[selectedCategory] || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Map category names to appropriate icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="text-tech-purple text-3xl" />;
      case "Frameworks":
        return <Layers className="text-tech-purple text-3xl" />;
      case "Tools":
        return <Laptop className="text-tech-purple text-3xl" />;
      case "Cloud":
        return <Cloud className="text-tech-purple text-3xl" />;
      case "Cybersecurity":
        return <Shield className="text-tech-purple text-3xl" />;
      case "IoT":
        return <Server className="text-tech-purple text-3xl" />;
      case "Embedded Systems":
        return <Cpu className="text-tech-purple text-3xl" />;
      default:
        return <Database className="text-tech-purple text-3xl" />;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-2">My Skills</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A comprehensive overview of my technical expertise
        </p>
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categoryOrder.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 text-white ${selectedCategory === cat ? "bg-blue-600" : "bg-purple-600 hover:bg-blue-500"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    </div>
  );
};

<<<<<<< HEAD
=======
// SkillCard component with animated progress bar
const SkillCard = ({ skill }: { skill: any }) => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      controls.start({ width: `${skill.proficiency}%` });
    } else {
      controls.start({ width: 0 });
    }
  }, [hovered, skill.proficiency, controls]);

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }}
      className="bg-[#181A20] rounded-xl p-6 shadow-lg flex flex-col h-full text-left border border-white/5 hover:border-tech-purple/50 transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <div className="flex items-start justify-between mb-2">
        <img src={skill.icon} alt={skill.name} className="w-12 h-12 rounded bg-white/10 p-1" />
        <span className="text-base font-semibold text-gray-300">{skill.proficiency}%</span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-extrabold text-white mb-1 leading-tight">{skill.name}</h3>
        <div className="w-full h-2 bg-[#23242a] rounded mb-2 overflow-hidden">
          <motion.div
            className="h-2 rounded bg-gradient-to-r from-blue-500 to-purple-500"
            animate={controls}
            initial={{ width: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
      </div>
    </motion.div>
  );
};

>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
export default Skills;
