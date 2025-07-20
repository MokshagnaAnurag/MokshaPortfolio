import React, { useEffect, useRef, useState } from 'react';
import { Skill, categoryLabels, getCategoryIcon } from '../utils/skillsData';
import { X, ChevronRight, ExternalLink, ArrowRightLeft } from 'lucide-react';
import { getIconComponent } from '../utils/iconUtils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface SkillDetailPanelProps {
  skill: Skill | null;
  onClose: () => void;
}

const SkillDetailPanel: React.FC<SkillDetailPanelProps> = ({ skill, onClose }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [animation, setAnimation] = useState<'entering' | 'exiting' | null>(null);
  
  useEffect(() => {
    if (skill) {
      setAnimation('entering');
      // Set the CSS variable for the progress bar animation
      if (barRef.current) {
        barRef.current.style.setProperty('--progress-width', `${skill.proficiency * 20}%`);
      }
    } else if (panelRef.current) {
      // Handle exit animation
      setAnimation('exiting');
      const timer = setTimeout(() => {
        setAnimation(null);
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // Reset expanded section when skill changes
    setExpandedSection(null);
  }, [skill]);
  
  if (!skill && animation !== 'exiting') return null;
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  // Get the icon key for the category
  const iconKey = skill ? getCategoryIcon(skill.category) : 'circle';
  // Get the icon component
  const IconComponent = getIconComponent(iconKey);
  
  return (
    <div 
      ref={panelRef}
      className={`skills-detail-panel fixed right-8 top-24 w-96 rounded-lg p-6 z-50 ${
        animation === 'entering' ? 'animate-slide-in-right' : 
        animation === 'exiting' ? 'animate-slide-out-right' : ''
      }`}
    >
      {/* Decorative background element */}
      <div className="absolute -z-10 inset-0 opacity-30 animate-rotate-slow pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl"></div>
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {/* Add icon based on skill category */}
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-${skill?.category}-500/30 backdrop-blur-sm`}>
            {IconComponent && <IconComponent size={24} className="text-white" />}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white">{skill?.name}</h3>
            <div className="text-sm text-white/70">
              {skill && categoryLabels[skill.category]}
            </div>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="rounded-full p-2 hover:bg-white/10 transition-colors"
          aria-label="Close panel"
        >
          <X size={18} className="text-white/70 hover:text-white" />
        </button>
      </div>
      
      <div className="mb-6">
        <div className="text-sm text-white/90 mb-1 flex items-center justify-between">
          <span>Proficiency</span>
          <span className="text-white/60 text-xs">{skill?.proficiency}/5</span>
        </div>
        <div className="proficiency-bar">
          <div 
            ref={barRef}
            className="proficiency-bar-fill animate-fill-progress"
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-white/50">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
      
      {/* Description section with animation */}
      <div 
        className="mb-4 cursor-pointer p-3 hover:bg-white/5 rounded transition-colors"
        onClick={() => toggleSection('description')}
      >
        <div className="flex justify-between items-center text-sm text-white/90">
          <span>Description</span>
          <ChevronRight 
            size={16} 
            className={`text-white/50 transition-transform duration-300 ${expandedSection === 'description' ? 'rotate-90' : ''}`} 
          />
        </div>
        {expandedSection === 'description' && (
          <p className="text-white/80 text-sm mt-3 animate-fade-in">
            {skill?.description}
          </p>
        )}
      </div>
      
      {/* Related skills section with enhanced interaction */}
      {skill?.relatedSkills.length > 0 && (
        <div 
          className="mb-4 cursor-pointer p-3 hover:bg-white/5 rounded transition-colors"
          onClick={() => toggleSection('relatedSkills')}
        >
          <div className="flex justify-between items-center text-sm text-white/90">
            <span>Related Skills</span>
            <ChevronRight 
              size={16} 
              className={`text-white/50 transition-transform duration-300 ${expandedSection === 'relatedSkills' ? 'rotate-90' : ''}`} 
            />
          </div>
          {expandedSection === 'relatedSkills' && (
            <div className="flex flex-wrap gap-2 mt-3 animate-fade-in">
              {skill.relatedSkills.map(id => (
                <HoverCard key={id}>
                  <HoverCardTrigger asChild>
                    <div 
                      className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowRightLeft size={12} />
                      {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-black/80 border-white/10 text-white backdrop-blur-md w-56">
                    <div className="text-sm font-semibold mb-1">Skill Connection</div>
                    <div className="text-xs text-white/70">
                      This skill is connected to {skill.name}, indicating they are frequently used together or complement each other.
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Projects section with animations */}
      <div 
        className="mb-1 cursor-pointer p-3 hover:bg-white/5 rounded transition-colors"
        onClick={() => toggleSection('projects')}
      >
        <div className="flex justify-between items-center text-sm text-white/90">
          <span>Related Projects</span>
          <ChevronRight 
            size={16} 
            className={`text-white/50 transition-transform duration-300 ${expandedSection === 'projects' ? 'rotate-90' : ''}`} 
          />
        </div>
        {expandedSection === 'projects' && (
          <div className="mt-3 animate-fade-in">
            <div className="p-4 bg-white/5 rounded-lg mb-2 text-xs border border-white/10 hover:border-white/20 transition-colors">
              <div className="font-medium mb-1 text-white">Project Example</div>
              <p className="text-white/60">
                {skill?.name} was utilized in building a comprehensive system that demonstrates practical applications of this skill in real-world scenarios.
              </p>
              <button className="flex items-center gap-1 text-xs text-indigo-300 mt-3 hover:text-indigo-200 transition-colors group">
                <span>View Project Details</span>
                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillDetailPanel;
