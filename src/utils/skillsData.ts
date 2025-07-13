
import { Node, Edge } from '@xyflow/react';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 1-5
  description: string;
  icon?: string;
  relatedSkills: string[];
  [key: string]: unknown; // Add index signature to make it compatible with Record<string, unknown>
}

export type SkillCategory = 
  | 'embedded' 
  | 'iot' 
  | 'ai' 
  | 'programming' 
  | 'cybersecurity' 
  | 'data' 
  | 'theory';

export const categoryLabels: Record<SkillCategory, string> = {
  embedded: 'Embedded Systems',
  iot: 'IoT',
  ai: 'AI/ML',
  programming: 'Programming',
  cybersecurity: 'Cybersecurity',
  data: 'Data & Analytics',
  theory: 'Theory & Systems'
};

export const categoryColors: Record<SkillCategory, string> = {
  embedded: '#0891b2', // Cyan
  iot: '#4f46e5',     // Indigo
  ai: '#8b5cf6',      // Purple
  programming: '#f59e0b', // Amber
  cybersecurity: '#ef4444', // Red
  data: '#06b6d4',    // Teal
  theory: '#16a34a'   // Green
};

export const skills: Skill[] = [
  // Embedded Systems
  {
    id: 'embedded-mcu',
    name: 'Microcontrollers',
    category: 'embedded',
    proficiency: 5,
    description: 'Programming ARM, AVR, PIC, and ESP32/8266 microcontrollers',
    relatedSkills: ['programming-c', 'iot-protocols']
  },
  {
    id: 'embedded-rtos',
    name: 'RTOS',
    category: 'embedded',
    proficiency: 4,
    description: 'Real-Time Operating Systems including FreeRTOS and Zephyr',
    relatedSkills: ['programming-c', 'embedded-mcu']
  },
  {
    id: 'embedded-sensors',
    name: 'Sensor Integration',
    category: 'embedded',
    proficiency: 5,
    description: 'Integration of various sensors and actuators with microcontrollers',
    relatedSkills: ['iot-sensors', 'theory-signal']
  },
  {
    id: 'embedded-communication',
    name: 'Communication Interfaces',
    category: 'embedded',
    proficiency: 5,
    description: 'I2C, SPI, UART, CAN, and other communication protocols',
    relatedSkills: ['iot-protocols', 'programming-c']
  },

  // IoT
  {
    id: 'iot-protocols',
    name: 'IoT Protocols',
    category: 'iot',
    proficiency: 4,
    description: 'Expertise in MQTT, CoAP, AMQP, and other IoT communication protocols',
    relatedSkills: ['embedded-communication', 'cybersecurity-network', 'programming-networking']
  },
  {
    id: 'iot-platforms',
    name: 'IoT Platforms',
    category: 'iot',
    proficiency: 4,
    description: 'Experience with AWS IoT, Azure IoT, Google Cloud IoT, and ThingsBoard',
    relatedSkills: ['programming-cloud', 'cybersecurity-cloud']
  },
  {
    id: 'iot-sensors',
    name: 'Sensor Networks',
    category: 'iot',
    proficiency: 5,
    description: 'Designing and implementing large-scale sensor networks',
    relatedSkills: ['theory-signal', 'embedded-sensors']
  },

  // AI/ML
  {
    id: 'ai-ml',
    name: 'Machine Learning',
    category: 'ai',
    proficiency: 4,
    description: 'Supervised and unsupervised learning algorithms and frameworks',
    relatedSkills: ['programming-python', 'data-analysis']
  },
  {
    id: 'ai-dl',
    name: 'Deep Learning',
    category: 'ai',
    proficiency: 3,
    description: 'Neural networks with TensorFlow and PyTorch',
    relatedSkills: ['ai-ml', 'programming-python']
  },
  {
    id: 'ai-cv',
    name: 'Computer Vision',
    category: 'ai',
    proficiency: 3,
    description: 'Image processing and object detection techniques',
    relatedSkills: ['ai-dl', 'theory-signal']
  },

  // Programming
  {
    id: 'programming-c',
    name: 'C/C++',
    category: 'programming',
    proficiency: 5,
    description: 'Systems programming and embedded development',
    relatedSkills: ['embedded-mcu', 'embedded-rtos']
  },
  {
    id: 'programming-python',
    name: 'Python',
    category: 'programming',
    proficiency: 5,
    description: 'Rapid prototyping, data analysis, and ML development',
    relatedSkills: ['ai-ml', 'data-analysis']
  },
  {
    id: 'programming-web',
    name: 'Web Development',
    category: 'programming',
    proficiency: 3,
    description: 'Full-stack web development with modern frameworks',
    relatedSkills: ['programming-python', 'cybersecurity-web']
  },
  {
    id: 'programming-cloud',
    name: 'Cloud Services',
    category: 'programming',
    proficiency: 3,
    description: 'AWS, Azure, GCP services and architectures',
    relatedSkills: ['iot-platforms', 'cybersecurity-cloud']
  },
  {
    id: 'programming-networking',
    name: 'Network Programming',
    category: 'programming',
    proficiency: 4,
    description: 'Socket programming and networking protocols',
    relatedSkills: ['cybersecurity-network', 'iot-protocols']
  },

  // Cybersecurity
  {
    id: 'cybersecurity-network',
    name: 'Network Security',
    category: 'cybersecurity',
    proficiency: 4,
    description: 'Secure network design, firewalls, and intrusion detection',
    relatedSkills: ['programming-networking', 'iot-protocols']
  },
  {
    id: 'cybersecurity-embedded',
    name: 'Embedded Security',
    category: 'cybersecurity',
    proficiency: 4,
    description: 'Secure boot, firmware protection, and hardware security',
    relatedSkills: ['embedded-mcu', 'embedded-communication']
  },
  {
    id: 'cybersecurity-cloud',
    name: 'Cloud Security',
    category: 'cybersecurity',
    proficiency: 3,
    description: 'Securing cloud infrastructure and services',
    relatedSkills: ['programming-cloud', 'iot-platforms']
  },
  {
    id: 'cybersecurity-web',
    name: 'Web Security',
    category: 'cybersecurity',
    proficiency: 3,
    description: 'Web application security principles and testing',
    relatedSkills: ['programming-web', 'cybersecurity-network']
  },

  // Data & Analytics
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'data',
    proficiency: 4,
    description: 'Data processing with pandas, numpy, and visualization libraries',
    relatedSkills: ['programming-python', 'ai-ml']
  },

  // Theory & Systems
  {
    id: 'theory-signal',
    name: 'Signal Processing',
    category: 'theory',
    proficiency: 4,
    description: 'Filtering, Fourier transforms, and frequency analysis',
    relatedSkills: ['embedded-sensors', 'ai-ml']
  },
  {
    id: 'theory-control',
    name: 'Control Theory',
    category: 'theory',
    proficiency: 4,
    description: 'Design and analysis of control systems',
    relatedSkills: ['theory-control-systems', 'embedded-mcu']
  },
  {
    id: 'theory-control-systems',
    name: 'Control Systems',
    category: 'theory',
    proficiency: 4,
    description: 'PID controllers, adaptive control, and model predictive control',
    relatedSkills: ['theory-control', 'embedded-mcu']
  },
  {
    id: 'theory-robotics',
    name: 'Robot Kinematics',
    category: 'theory',
    proficiency: 4,
    description: 'Forward and inverse kinematics for robotic manipulators',
    relatedSkills: ['programming-python', 'ai-ml']
  },
];

// Generate structured node positions based on categories
export const generateInitialNodePositions = () => {
  // Define positions for each category (center positions)
  const categoryPositions: Record<SkillCategory, { x: number; y: number }> = {
    programming: { x: 0, y: 0 }, // Center (core skills)
    embedded: { x: 300, y: -150 },
    iot: { x: 0, y: -300 },
    cybersecurity: { x: -300, y: -150 },
    theory: { x: 300, y: 150 },
    ai: { x: 0, y: 300 },
    data: { x: -300, y: 150 }
  };
  
  // Count skills per category for spacing
  const categoryCounts: Record<SkillCategory, number> = {
    embedded: 0,
    iot: 0,
    ai: 0,
    programming: 0,
    cybersecurity: 0,
    data: 0,
    theory: 0
  };
  
  skills.forEach(skill => {
    categoryCounts[skill.category]++;
  });
  
  // Generate positions with a spiral arrangement within each category
  const nodes: Node[] = [];
  const categoryCounters: Record<SkillCategory, number> = { ...categoryCounts };
  
  skills.forEach(skill => {
    const category = skill.category;
    const basePos = categoryPositions[category];
    const count = categoryCounts[category];
    const index = count - categoryCounters[category];
    categoryCounters[category]--;
    
    // Spiral arrangement with golden ratio
    const goldenRatio = 1.618033988749895;
    const angle = index * goldenRatio * Math.PI;
    
    // Radius depends on category - core skills (programming) have smaller radius
    let radius = category === 'programming' ? 100 : 180;
    // Scale radius based on category size
    radius *= Math.sqrt((index + 1) / count);
    
    const offset = {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
    
    nodes.push({
      id: skill.id,
      type: 'skillNode',
      position: {
        x: basePos.x + offset.x,
        y: basePos.y + offset.y
      },
      data: skill as unknown as Record<string, unknown>, // Cast to expected type
      draggable: true, // Allow dragging for manual positioning
    });
  });
  
  return nodes;
};

export const generateEdges = () => {
  const edges: Edge[] = [];
  
  // Create edges based on relatedSkills with minimal overlap
  skills.forEach(skill => {
    skill.relatedSkills.forEach(relatedId => {
      if (skills.find(s => s.id === relatedId)) {
        // Create an ID for the edge that's consistent regardless of direction
        // This prevents duplicate edges
        const edgeIds = [skill.id, relatedId].sort();
        const edgeId = `${edgeIds[0]}-${edgeIds[1]}`;
        
        // Check if edge already exists
        if (!edges.find(e => e.id === edgeId)) {
          edges.push({
            id: edgeId,
            source: skill.id,
            target: relatedId,
            animated: false,
            style: {
              strokeWidth: 2,
              stroke: 'rgba(255, 255, 255, 0.3)'
            },
            // Use smoother edge type
            type: 'smoothstep'
          });
        }
      }
    });
  });
  
  return edges;
};

// Define icons for each category
export const getCategoryIcon = (category: SkillCategory) => {
  switch (category) {
    case 'embedded':
      return 'cpu';
    case 'iot':
      return 'globe';
    case 'ai':
      return 'brain';
    case 'programming':
      return 'code';
    case 'cybersecurity':
      return 'shield';
    case 'data':
      return 'bar-chart';
    case 'theory':
      return 'atom';
    default:
      return 'circle';
  }
};
