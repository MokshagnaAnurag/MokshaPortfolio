
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

// Function to convert kebab-case to PascalCase
const kebabToPascalCase = (str: string): string => {
  return str.split('-').map(
    part => part.charAt(0).toUpperCase() + part.slice(1)
  ).join('');
};

// Type for our safe icon component
export type IconComponentType = React.ComponentType<LucideProps>;

// Get icon component safely
export const getIconComponent = (iconName: string): IconComponentType | null => {
  const pascalCase = kebabToPascalCase(iconName);
  
  // Cast as any first to resolve TypeScript issues
  const iconsObj = LucideIcons as any;
  
  // Check if the icon exists
  if (iconsObj[pascalCase] && typeof iconsObj[pascalCase] === 'function') {
    return iconsObj[pascalCase] as IconComponentType;
  }
  
  return null;
};
