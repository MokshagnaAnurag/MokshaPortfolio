export interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon: string;
  category: "iot" | "embedded" | "robotics" | "ai_ml" | "cybersecurity";
  description: string;
}

export const skills: Skill[] = [
  // Internet of Things
  {
    name: "IoT Architecture Design",
    proficiency: 85,
    icon: "iot",
    category: "iot",
    description: "Designing scalable and efficient IoT architectures for interconnected devices."
  },
  {
    name: "MQTT & CoAP Protocols",
    proficiency: 80,
    icon: "mqtt",
    category: "iot",
    description: "Using MQTT and CoAP for lightweight messaging and communication in IoT systems."
  },
  {
    name: "ThingSpeak, Google Firebase",
    proficiency: 80,
    icon: "firebase",
    category: "iot",
    description: "Leveraging ThingSpeak and Google Firebase for IoT data management and real-time analytics."
  },
  {
    name: "Wireless Sensor Networks",
    proficiency: 75,
    icon: "sensor_network",
    category: "iot",
    description: "Design and implementation of wireless sensor networks for IoT data collection and processing."
  },

  // Embedded Systems
  {
    name: "RTOS",
    proficiency: 80,
    icon: "rtos",
    category: "embedded",
    description: "Real-Time Operating Systems for efficient task scheduling and execution in embedded systems."
  },
  {
    name: "Microcontrollers",
    proficiency: 85,
    icon: "microcontroller",
    category: "embedded",
    description: "Programming microcontrollers for embedded system applications, including sensor integration and control."
  },
  {
    name: "Hardware Interfaces (SPI, I2C, UART)",
    proficiency: 90,
    icon: "hardware",
    category: "embedded",
    description: "Utilizing hardware interfaces like SPI, I2C, and UART for communication between microcontrollers and peripherals."
  },

  // Robotics
  {
    name: "ROS (Robot Operating System)",
    proficiency: 75,
    icon: "ros",
    category: "robotics",
    description: "Using ROS for robotic system development, including communication, simulation, and control."
  },
  {
    name: "Autonomous Navigation",
    proficiency: 80,
    icon: "navigation",
    category: "robotics",
    description: "Developing autonomous navigation systems for robots using algorithms like SLAM and path planning."
  },
  {
    name: "Computer Vision",
    proficiency: 85,
    icon: "computer_vision",
    category: "robotics",
    description: "Implementing computer vision techniques for object detection, recognition, and tracking in robotics."
  },
  {
    name: "Sensor Fusion",
    proficiency: 80,
    icon: "sensor_fusion",
    category: "robotics",
    description: "Combining data from multiple sensors to enhance the accuracy and reliability of robotic systems."
  },
  {
    name: "Motion Planning & Control",
    proficiency: 80,
    icon: "motion_planning",
    category: "robotics",
    description: "Designing motion planning algorithms and control systems for autonomous robots."
  },

  // AI & Machine Learning
  {
    name: "TensorFlow & PyTorch",
    proficiency: 85,
    icon: "tensorflow",
    category: "ai_ml",
    description: "Using TensorFlow and PyTorch for building and training AI models, particularly in computer vision and deep learning."
  },
  {
    name: "Machine Learning Algorithms",
    proficiency: 80,
    icon: "ml_algorithms",
    category: "ai_ml",
    description: "Implementing supervised, unsupervised, and reinforcement learning algorithms for various applications."
  },
  {
    name: "Neural Networks",
    proficiency: 85,
    icon: "neural_network",
    category: "ai_ml",
    description: "Designing and training neural networks for tasks like image classification and natural language processing."
  },
  {
    name: "Computer Vision",
    proficiency: 85,
    icon: "computer_vision",
    category: "ai_ml",
    description: "Applying computer vision techniques for image processing, object detection, and pattern recognition."
  },
  {
    name: "Edge AI Applications",
    proficiency: 75,
    icon: "edge_ai",
    category: "ai_ml",
    description: "Developing AI applications optimized for edge devices with limited computational resources."
  },

  // Cybersecurity
  {
    name: "Web Application Penetration Testing",
    proficiency: 80,
    icon: "pentesting",
    category: "cybersecurity",
    description: "Conducting security assessments on web applications to identify vulnerabilities and exploit weaknesses."
  },
  {
    name: "Network Security",
    proficiency: 80,
    icon: "network_security",
    category: "cybersecurity",
    description: "Ensuring the security and integrity of computer networks through risk analysis, threat mitigation, and encryption."
  }
];
