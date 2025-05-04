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
    name: "IoT",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/420202/internet-internet-of-things-iot.svg",
    category: "iot",
    description: "Designing scalable and efficient IoT architectures for interconnected devices."
  },
  {
    name: "MQTT & CoAP Protocols",
    proficiency: 80,
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/mqtt-8ot5sapk9r2ye0mg3lpwc.png/mqtt-hw7teutszoc951aipqyuji.png?_a=DATAdtWOZAA0",
    category: "iot",
    description: "Using MQTT and CoAP for lightweight messaging and communication in IoT systems."
  },
  {
    name: "ThingSpeak, Google Firebase",
    proficiency: 80,
    icon: "https://cdn-icons-png.freepik.com/256/17421/17421626.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "iot",
    description: "Leveraging ThingSpeak and Google Firebase for IoT data management and real-time analytics."
  },
  {
    name: "Wireless Sensor Networks",
    proficiency: 75,
    icon: "https://img.freepik.com/premium-vector/wireless-technology-isometric-stock-illustration-eps-file-stock-illustration_357500-4549.jpg?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid&w=740",
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
    icon: "https://cdn-icons-png.flaticon.com/128/2752/2752878.png",
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
    icon: "https://www.svgrepo.com/show/296329/industrial-robot-factory.svg",
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
    icon: "https://cdn-icons-png.freepik.com/256/2172/2172891.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "ai_ml",
    description: "Implementing supervised, unsupervised, and reinforcement learning algorithms for various applications."
  },
  {
    name: "Neural Networks",
    proficiency: 70,
    icon: "https://cdn-icons-png.freepik.com/256/13320/13320544.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "ai_ml",
    description: "Designing and training neural networks for tasks like image classification and natural language processing."
  },
  {
    name: "Computer Vision",
    proficiency: 85,
    icon: "https://www.svgrepo.com/show/354139/opencv.svg",
    category: "ai_ml",
    description: "Applying computer vision techniques for image processing, object detection, and pattern recognition."
  },
// Programming Languages
  {
    name: "C Language",
    proficiency: 80,
    icon: "https://www.svgrepo.com/show/452046/c.svg",
    category: "programming_language",
    description: "Proficient in structured programming using C, with a focus on embedded systems and low-level hardware control."
  },
  {
    name: "Python",
    proficiency: 90,
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    category: "programming_language",
    description: "Experienced in Python for scripting, automation, data analysis, and backend development."
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
    proficiency: 75,
    icon: "https://cdn-icons-png.freepik.com/256/5423/5423920.png?ga=GA1.1.1063440746.1746326841&semt=ais_hybrid",
    category: "cybersecurity",
    description: "Conducting security assessments on web applications to identify vulnerabilities and exploit weaknesses."
  },
  {
    name: "Network Security",
    proficiency: 70,
    icon: "https://www.svgrepo.com/show/48197/network.svg",
    category: "cybersecurity",
    description: "Ensuring the security and integrity of computer networks through risk analysis, threat mitigation, and encryption."
  }
];
