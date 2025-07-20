interface ChatbotResponse {
  keywords: string[];
  response: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "greet"],
    response: "Hello! Welcome to Moksha's portfolio. How can I help you today?",
  },
  {
    keywords: ["name", "who are you", "who is"],
    response:
      "I'm Moksha's virtual assistant. I can tell you about Moksha's skills, projects, and experience.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "message"],
    response:
      "You can contact Moksha through the contact form on the Contact page, or via email at kankati.mokshagnaanurag@gmail.com.",
  },
  {
    keywords: ["skills", "abilities", "technologies", "tech stack", "languages", "coding"],
    response: `Mokshagna has a strong and diverse technical skill set across multiple domains:
  
  - **Programming Languages**: C, Python, JavaScript, HTML, CSS, Matlab
  - **Embedded Systems & IoT**: Arduino, Raspberry Pi, ESP32, ESP8266, NodeMCU, nRF24L01+, L298N Motor Driver, IR Sensors, Ultrasonic Sensors, RFID, MPU6050  
  - **Database & Web**: Firebase Realtime Database, Google Sheets (API integration), MySQL (basic)  
  - **AI/ML Tools**: Pandas, NumPy, Matplotlib, Scikit-learn (basic)  
  - **Cybersecurity**: Phishing Detection Systems, Ransomware Prevention using Honeypots, Network Security (Basics) 
  - **Tools & Platforms**: VS Code, Arduino IDE, MIT App Inventor, Git, GitHub, Tinkercad, Google Colab  
  - **Cloud & Hosting**: Firebase Hosting, AWS EC2  
  - **Soft Skills**: Public Speaking, Team Collaboration, Project Management  
  
  Check out the Skills page for a detailed breakdown of Mokshagna's technical expertise.`,
  },
  
  {
    keywords: ["python", "data", "analysis", "machine learning", "ml", "ai"],
    response:
      "Moksha uses Python for data analysis and has experience with machine learning libraries.",
  },
  {
    keywords: ["projects", "portfolio", "work", "samples"],
    response:
      "Moksha has worked on various web, IoT, and ML projects. You can find them on the projects page .",
  },
  {
    keywords: ["experience", "job", "professional"],
    response:
      "Moksha has experience in full-stack development and has worked on real-world applications with teams.",
  },
  {
    keywords: ["education", "university", "college", "degree"],
    response:
      "Moksha is pursuing a degree in ECE and takes additional courses on tech topics.",
  },
  {
    keywords: ["about", "personal", "background", "bio"],
    response:
      "To learn more about Moksha's journey and interests, check out the About page.",
  },
  {
    keywords: ["help", "options", "what can you do", "capabilities"],
    response:
      "I can answer questions about Moksha's skills, projects, experience, and how to get in touch. Ask away!",
  },
  {
    keywords: ["thanks", "thank you", "appreciated"],
    response: "You're welcome! Let me know if there's anything else I can help with.",
  },
  {
    keywords: ["bye", "goodbye", "exit", "close"],
    response: "Goodbye! Thanks for visiting Moksha's portfolio.",
  },
  {
    keywords: ["certification", "certifications", "courses", "training"],
    response:
      "Moksha has completed certifications in Cybersecurity, Ethical Hacking, Python, Machine Learning, and AWS. You can see the full list on the Certifications page.",
  },
  {
    keywords: ["awards", "recognition", "prize", "winner", "achievements"],
    response:
      "Moksha was the 2nd Prize Winner at AVISHKAR Season-2 (₹1,00,000) and won multiple awards in national-level hackathons and tech fests.",
  },
  {
    keywords: ["hackathon", "competitions", "events", "challenges"],
    response:
      "Moksha has participated in several hackathons, including SIH, Serve Smart Hackathon IIT Banaras, and AVISHKAR, where he secured top positions.",
  },
  {
    keywords: ["iot", "smart", "arduino", "embedded", "nrf24l01", "gesture", "car"],
    response:
      "Moksha has worked on IoT projects like the Hand Gesture Controlled Car using Arduino, MPU6050, and nRF24L01 modules.",
  },
  {
    keywords: ["cybersecurity", "security", "phishing", "malware", "ransomware"],
    response:
      "Moksha is passionate about Cybersecurity and has developed systems like AI-Powered Phishing Detection and Ransomware Prevention Tools.",
  },
  {
    keywords: ["leadership", "organizer", "events", "speaker", "workshop"],
    response:
      "Moksha organized and spoke at workshops like IoT at Freedom Fest and coordinated events like Smart India Hackathon (SIH) and AVISHKAR.",
  },
  {
    keywords: ["hobbies", "interests", "personal", "fun"],
    response:
      "Besides tech, Moksha enjoys reading, exploring new technologies, and sharing knowledge through speaking engagements and workshops.",
  },

  {
    keywords: ["resume", "cv", "download"],
    response:
      "You can download Moksha's resume from the Resume page. It includes his education, skills, and work experience.",
  },
];

export const fallbackResponses = [
  "I'm not sure I understand. Can you rephrase your question?",
  "I don't have that info yet. Try asking something about Moksha's skills or projects!",
  "Hmm, that's a tricky one. Try asking about Moksha's work or experience.",
  "I'm still learning! Ask about skills, projects, or how to contact Moksha.",
];

export function findBestResponse(input: string): string {
  input = input.toLowerCase();

  // Iterate over all chatbot responses and check for keyword matches using regular expressions
  for (const item of chatbotResponses) {
    for (const keyword of item.keywords) {
      const keywordPattern = new RegExp(`\\b${keyword}\\b`, 'i'); // Matching whole word, case-insensitive
      if (keywordPattern.test(input)) {
        return item.response;
      }
    }
  }

  // If no keyword matches, return a fallback response
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
