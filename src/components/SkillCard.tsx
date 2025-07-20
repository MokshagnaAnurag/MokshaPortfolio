import { useState, useEffect } from "react";
import { Skill } from "../data/skills";

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard = ({ skill, delay }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className="gradient-border p-0.5 h-full transition-opacity duration-500 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-card h-full rounded-lg p-6 flex flex-col transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isHovered ? "animate-pulse-glow" : ""
            }`}
          >
            <SkillIcon iconName={skill.icon} />
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {skill.proficiency}%
          </span>
        </div>

        <h3 className={`text-xl font-bold mb-2 ${isHovered ? "text-gradient" : ""}`}>
          {skill.name}
        </h3>

        <div className="skill-progress-bar h-2 w-full bg-muted rounded-full mb-4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${isHovered ? skill.proficiency : 0}%`,
              background: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))",
            }}
          />
        </div>

        <p className="text-sm text-muted-foreground flex-grow">{skill.description}</p>
      </div>
    </div>
  );
};

const SkillIcon = ({ iconName }: { iconName: string }) => {
  const isUrl = iconName.startsWith("http");

  const getIconColor = (icon: string) => {
    const colorMap: Record<string, string> = {
      react: "text-blue-400",
      javascript: "text-yellow-400",
      typescript: "text-blue-500",
      html: "text-orange-500",
      css: "text-blue-600",
      node: "text-green-500",
      python: "text-blue-700",
      mongodb: "text-green-600",
      git: "text-orange-600",
      docker: "text-blue-500",
      aws: "text-orange-400",
      tailwind: "text-teal-400",
      graphql: "text-pink-500",
      jest: "text-red-400",
      webpack: "text-blue-300",
    };
    return colorMap[icon] || "text-primary";
  };

  return isUrl ? (
    <img
      src={iconName}
      alt="skill-icon"
      className="w-10 h-10 object-contain rounded-full bg-white p-1"
    />
  ) : (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${getIconColor(
        iconName
      )}`}
    >
      {iconName?.slice(0, 2)?.toUpperCase() || "SK"}
    </div>
  );
};

export default SkillCard;