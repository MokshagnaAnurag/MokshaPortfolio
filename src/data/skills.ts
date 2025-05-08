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
    icon: "https://cdn-icons-png.freepik.com/256/6702/6702322.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "iot",
    description: "Designing scalable and efficient IoT architectures for interconnected devices."
  },
  {
    name: "MQTT & CoAP Protocols",
    proficiency: 80,
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/mqtt-8ot5sapk9r2ye0mg3lpwc.png/mqtt-hw7teutszoc951aipqyuji.png?_a=DATAdtAAZAA0",
    category: "iot",
    description: "Using MQTT and CoAP for lightweight messaging and communication in IoT systems."
  },
  {
    name: "ThingSpeak, Google Firebase",
    proficiency: 80,
    icon: "https://img.freepik.com/premium-vector/cloud-data-connected-learning-engine-chips-supports-ai-automation-secure-processing-digital_4968-2880.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
    category: "iot",
    description: "Leveraging ThingSpeak and Google Firebase for IoT data management and real-time analytics."
  },
  {
    name: "Wireless Sensor Networks",
    proficiency: 75,
    icon: "https://cdn-icons-png.freepik.com/256/11232/11232043.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "iot",
    description: "Design and implementation of wireless sensor networks for IoT data collection and processing."
  },

  // Embedded Systems
  {
    name: "RTOS",
    proficiency: 80,
    icon: "https://icon.icepanel.io/AWS/svg/Internet-of-Things/FreeRTOS.svg",
    category: "embedded",
    description: "Real-Time Operating Systems for efficient task scheduling and execution in embedded systems."
  },
  {
    name: "Microcontrollers",
    proficiency: 85,
    icon: "https://cdn-icons-png.freepik.com/256/2332/2332743.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "embedded",
    description: "Programming microcontrollers for embedded system applications, including sensor integration and control."
  },
  {
    name: "Hardware Interfaces (I2C, UART)",
    proficiency: 90,
    icon: "https://freesvg.org/img/1551521251.png",
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
    icon: "https://img.freepik.com/free-vector/self-driving-car-concept-illustration_114360-10865.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
    category: "robotics",
    description: "Developing autonomous navigation systems for robots using algorithms like SLAM and path planning."
  },
  {
    name: "Sensor Fusion",
    proficiency: 80,
    icon: "https://cdn-icons-png.freepik.com/256/11232/11232043.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "robotics",
    description: "Combining data from multiple sensors to enhance the accuracy and reliability of robotic systems."
  },
  {
    name: "Motion Planning & Control",
    proficiency: 80,
    icon: "https://img.freepik.com/free-vector/isolated-robot-white-background_1308-46246.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
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
    name: "Machine Learning Algorithms",
    proficiency: 70,
    icon: "https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration_1284-82523.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
    category: "ai_ml",
    description: "Implementing supervised, unsupervised, and reinforcement learning algorithms for various applications."
  },
  {
    name: "Neural Networks",
    proficiency: 70,
    icon: "https://img.freepik.com/free-vector/neural-network-gradient_78370-3687.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
    category: "ai_ml",
    description: "Designing and training neural networks for tasks like image classification and natural language processing."
  },
  {
    name: "Computer Vision",
    proficiency: 85,
    icon: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png",
    category: "ai_ml",
    description: "Applying computer vision techniques for image processing, object detection, and pattern recognition."
  },

  // Programming Languages
  {
    name: "C Language",
    proficiency: 80,
    icon: "https://cdn-icons-png.freepik.com/256/3665/3665923.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
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
    icon: "https://icon.icepanel.io/Technology/svg/MATLAB.svg",
    category: "signal_processing",
    description: "Skilled in using MATLAB for signal processing, numerical computing, and system modeling."
  },
  {
    name: "GNU Octave",
    proficiency: 75,
    icon: "https://images.icon-icons.com/1381/PNG/512/octave_94226.png",
    category: "signal_processing",
    description: "Experienced with GNU Octave for numerical computations and compatibility with MATLAB for signal analysis."
  },

  // Cybersecurity
  {
    name: "Web Application Penetration Testing",
    proficiency: 80,
    icon: "https://cdn-icons-png.freepik.com/256/5423/5423920.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "cybersecurity",
    description: "Conducting security assessments on web applications to identify vulnerabilities and exploit weaknesses."
  },
  {
    name: "Network Security",
    proficiency: 80,
    icon: "https://cdn-icons-png.freepik.com/256/10214/10214694.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "cybersecurity",
    description: "Ensuring the security and integrity of computer networks through risk analysis, threat mitigation, and encryption."
  }
];
