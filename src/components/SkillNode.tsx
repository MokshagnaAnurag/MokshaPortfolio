import React, { useState, memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Skill, getCategoryIcon } from '../utils/skillsData';
import { getIconComponent } from '../utils/iconUtils';

interface SkillNodeProps {
  data: Record<string, unknown>;
  selected: boolean;
}

const SkillNode = memo(({ data, selected }: SkillNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Cast data to Skill type
  const skillData = data as unknown as Skill;
  
  // Calculate size based on proficiency (3-5 for visual balance)
  const baseSize = 60;
  const size = baseSize + (skillData.proficiency * 5);
  const nodeClass = `skill-node skill-node-${skillData.category}`;
  
  // Icon to display based on category
  const iconKey = getCategoryIcon(skillData.category);
  
  // Get the correct icon component from our utility
  const IconComponent = getIconComponent(iconKey);
  
  // Trigger pulse animation when node is clicked
  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  return (
    <div 
      className={`
        ${nodeClass} 
        ${selected ? 'ring-2 ring-white scale-110 shadow-glow' : ''} 
        ${isHovered ? 'z-10 hover:scale-110 shadow-glow-soft' : ''} 
        ${isAnimating ? 'animate-pulse-light' : ''}
        transition-all duration-300 ease-in-out
      `}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle 
        type="source" 
        position={Position.Right} 
        className="!bg-transparent !w-3 !h-3 !border-2 transition-all duration-300 hover:!scale-150 hover:!border-white" 
      />
      <Handle 
        type="target" 
        position={Position.Left} 
        className="!bg-transparent !w-3 !h-3 !border-2 transition-all duration-300 hover:!scale-150 hover:!border-white" 
      />
      
      <div className="flex flex-col items-center justify-center h-full w-full p-2">
        <div className={`text-white/80 mb-1 ${selected || isHovered ? 'animate-bounce-gentle' : ''}`}>
          {IconComponent && <IconComponent size={20} />}
        </div>
        <div className="text-white font-medium text-sm text-center">
          {skillData.name}
        </div>
        {selected && (
          <div className="mt-1 text-xs text-white/70">
            {skillData.proficiency}/5
          </div>
        )}
      </div>
      
      {/* Enhanced tooltip on hover */}
      {isHovered && !selected && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-2 px-4 rounded-lg whitespace-nowrap z-50 animate-fade-in backdrop-blur-sm border border-white/10 shadow-xl min-w-[150px]">
          <div className="flex items-center gap-2 justify-center mb-1">
            {IconComponent && <IconComponent size={14} />}
            <span className="font-semibold">{skillData.name}</span>
          </div>
          <div className="flex justify-between text-white/60 text-[10px]">
            <span>{skillData.category.charAt(0).toUpperCase() + skillData.category.slice(1)}</span>
            <span>Proficiency: {skillData.proficiency}/5</span>
          </div>
        </div>
      )}
    </div>
  );
});

export default SkillNode;
