export interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon: string;
  category:
    | "iot"
    | "embedded"
    | "robotics"
    | "ai_ml"
    | "cybersecurity"
    | "programming_language"
    | "signal_processing";
  description: string;
}

export const skills: Skill[] = [
  // Internet of Things
  {
    name: "IoT Architecture Design",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/354233/internet-of-things-iot.svg",
    category: "iot",
    description: "Designing scalable and efficient IoT architectures for interconnected devices."
  },
  {
    name: "MQTT & CoAP Protocols",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/416516/network-protocol.svg",
    category: "iot",
    description: "Using MQTT and CoAP for lightweight messaging and communication in IoT systems."
  },
  {
    name: "ThingSpeak, Google Firebase",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/373604/firebase.svg",
    category: "iot",
    description: "Leveraging ThingSpeak and Google Firebase for IoT data management and real-time analytics."
  },
  {
    name: "Wireless Sensor Networks",
    proficiency: 75,
    icon: "https://www.svgrepo.com/show/15178/satellite-dish.svg",
    category: "iot",
    description: "Design and implementation of wireless sensor networks for IoT data collection and processing."
  },

  // Embedded Systems
  {
    name: "RTOS",
    proficiency: 70,
    icon: "https://www.svgrepo.com/show/354249/cpu.svg",
    category: "embedded",
    description: "Real-Time Operating Systems for efficient task scheduling and execution in embedded systems."
  },
  {
    name: "Microcontrollers",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/377803/microcontroller-chip.svg",
    category: "embedded",
    description: "Programming microcontrollers for embedded system applications, including sensor integration and control."
  },
  {
    name: "Hardware Interfaces (I2C, UART)",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/374050/motherboard.svg",
    category: "embedded",
    description: "Utilizing hardware interfaces like SPI, I2C, and UART for communication between microcontrollers and peripherals."
  },

  // Robotics
  {
    name: "ROS (Robot Operating System)",
    proficiency: 75,
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
    category: "robotics",
    description: "Using ROS for robotic system development, including communication, simulation, and control."
  },
  {
    name: "Autonomous Navigation",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/148901/gps.svg",
    category: "robotics",
    description: "Developing autonomous navigation systems for robots using algorithms like SLAM and path planning."
  },
  {
    name: "Sensor Fusion",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/492071/sensor.svg",
    category: "robotics",
    description: "Combining data from multiple sensors to enhance the accuracy and reliability of robotic systems."
  },
  {
    name: "Motion Planning & Control",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/428953/movement.svg",
    category: "robotics",
    description: "Designing motion planning algorithms and control systems for autonomous robots."
  },

  // AI & Machine Learning
  {
    name: "TensorFlow & PyTorch",
    proficiency: 70,
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    category: "ai_ml",
    description: "Using TensorFlow and PyTorch for building and training AI models, particularly in computer vision and deep learning."
  },
  {
    name: "Neural Networks",
    proficiency: 70,
    icon: "https://www.svgrepo.com/show/373615/neural-network.svg",
    category: "ai_ml",
    description: "Designing and training neural networks for tasks like image classification and natural language processing."
  },
  {
    name: "Computer Vision",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/353699/computer-vision.svg",
    category: "ai_ml",
    description: "Applying computer vision techniques for image processing, object detection, and pattern recognition."
  },

  // Programming Languages
  {
    name: "C Language",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/136/browser.svg",
    category: "programming_language",
    description: "Proficient in structured programming using C, with a focus on embedded systems and low-level hardware control."
  },
  {
    name: "Python",
    proficiency: 90,
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    category: "programming_language",
    description: "Experienced in Python for scripting, automation."
  },

  // Signal Processing
  {
    name: "MATLAB",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/374034/matlab.svg",
    category: "signal_processing",
    description: "Skilled in using MATLAB for signal processing, numerical computing, and system modeling."
  },
  {
    name: "GNU Octave",
    proficiency: 75,
    icon: "https://www.svgrepo.com/show/354260/gnu.svg",
    category: "signal_processing",
    description: "Experienced with GNU Octave for numerical computations and compatibility with MATLAB for signal analysis."
  },

  // Cybersecurity
  {
    name: "Web Application Penetration Testing",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/473700/hacker.svg",
    category: "cybersecurity",
    description: "Conducting security assessments on web applications to identify vulnerabilities and exploit weaknesses."
  },
  {
    name: "Network Security",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/494272/security-network-connection.svg",
    category: "cybersecurity",
    description: "Ensuring the security and integrity of computer networks through risk analysis, threat mitigation, and encryption."
  }
];
