
import React from 'react';
import { categoryLabels, categoryColors, SkillCategory, getCategoryIcon } from '../utils/skillsData';
import { getIconComponent } from '../utils/iconUtils';

const SkillCategoriesLegend: React.FC = () => {
  const categories = Object.keys(categoryLabels) as SkillCategory[];
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-lg p-4 animate-fade-in z-50 border border-white/10 shadow-xl">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(cat => {
          // Get the icon name for this category
          const iconKey = getCategoryIcon(cat);
          // Get the icon component
          const IconComponent = getIconComponent(iconKey);
          
          return (
            <div key={cat} className="flex items-center group">
              <div 
                className="w-4 h-4 rounded-full mr-2 group-hover:scale-125 transition-transform" 
                style={{ backgroundColor: categoryColors[cat] }} 
              />
              {IconComponent && <IconComponent size={14} className="text-white mr-1.5" />}
              <span className="text-white/80 text-sm">{categoryLabels[cat]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategoriesLegend;
