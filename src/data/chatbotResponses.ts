
interface ChatbotResponse {
  keywords: string[];
  response: string;
}

export const chatbotResponses: ChatbotResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "greet"],
    response: "Hello! Welcome to Mokshagna Anurag's portfolio. How can I help you today?"
  },
  {
    keywords: ["name", "who are you", "who is"],
    response: "I'm Mokshagna Anurag's virtual assistant. I can tell you about his skills, projects, and experiences."
  },
  {
    keywords: ["contact", "email", "reach", "hire", "message"],
    response: "You can contact Mokshagna Anurag through the contact form on the Contact page or via email at mokshagnaanurag@example.com."
  },
  {
    keywords: ["skills", "abilities", "technologies", "tech stack", "languages", "coding"],
    response: "Mokshagna is skilled in Python, C, HTML/CSS, JavaScript, TypeScript, Node.js, React.js, MySQL, MongoDB, and GitHub. He also works with tools like Metasploit, Nmap, and Wireshark."
  },
  {
    keywords: ["react", "frontend", "ui", "interface"],
    response: "Mokshagna has built responsive frontend applications using React.js and TypeScript, emphasizing performance and UI/UX."
  },
  {
    keywords: ["node", "backend", "server", "api"],
    response: "He has experience creating backend APIs using Node.js and Express, integrating databases like MongoDB and MySQL."
  },
  {
    keywords: ["python", "data", "analysis", "machine learning", "ml", "ai"],
    response: "Mokshagna uses Python for scripting, data analysis, and has worked on projects involving image processing and feature extraction."
  },
  {
    keywords: ["projects", "portfolio", "work", "samples"],
    response: "Mokshagna has developed various projects including number plate detection, Boston house price prediction, ticketing platforms, and image-based feature extraction tools. Explore more on the Projects page!"
  },
  {
    keywords: ["experience", "work", "job", "professional"],
    response: "Mokshagna has interned as a Cyber Security Intern at ShadowFox, contributed to GirlScript Summer of Code, and worked with Swecha and various student centers like Embedded Systems and Cyber Security Studies."
  },
  {
    keywords: ["education", "university", "college", "degree"],
    response: "Mokshagna is currently pursuing a B.Tech in Electronics and Communication Engineering at MVGR College of Engineering, Vizianagaram (2022–2026)."
  },
  {
    keywords: ["about", "personal", "background", "bio"],
    response: "Mokshagna is passionate about cybersecurity, embedded systems, and AI. He's an active contributor to open-source communities and is driven to innovate in space and autonomous vehicle technologies."
  },
  {
    keywords: ["help", "options", "what can you do", "capabilities"],
    response: "I can help you learn about Mokshagna's skills, projects, experience, education, and how to get in touch. Just ask!"
  },
  {
    keywords: ["thanks", "thank you", "appreciated", "helpful"],
    response: "You're welcome! Feel free to ask if you need anything else."
  },
  {
    keywords: ["bye", "goodbye", "exit", "close"],
    response: "Thanks for stopping by! Reach out anytime you want to learn more about Mokshagna Anurag. Have a great day!"
  }
];


export const fallbackResponses = [
  "I'm not sure I understand. Can you rephrase your question?",
  "I don't have information about that yet. Is there something else I can help with?",
  "That's an interesting question! Let me suggest you contact Moksha directly for more specific information.",
  "I'm still learning! Could you try asking something about Moksha's skills, projects, or background?",
  "I don't have details about that, but I'd be happy to tell you about Moksha's technical expertise or projects."
];

export function findBestResponse(input: string): string {
  input = input.toLowerCase();
  
  // Check if input matches any keywords
  for (const item of chatbotResponses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        return item.response;
      }
    }
  }
  
  // Return a random fallback response if no match
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
