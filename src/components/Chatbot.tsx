import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import Draggable from "react-draggable";
import { findBestResponse } from "../data/chatbotResponses";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Moksha's assistant. How can I help you?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Audio references
  const openSoundRef = useRef<HTMLAudioElement>(null);
  const sendSoundRef = useRef<HTMLAudioElement>(null);
  const replySoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Play user send sound
    sendSoundRef.current?.play();

    const userMessage: Message = {
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply: Message = {
        text: findBestResponse(message),
        isUser: false,
        timestamp: new Date(),
      };

      // Play bot reply sound
      replySoundRef.current?.play();

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      // Play chatbot open sound
      openSoundRef.current?.play();
    }
  };

  return (
    <div className="fixed z-50 bottom-6 right-6">
      {/* Sound effects */}
      <audio ref={openSoundRef} src="/sounds/opening.mp3" preload="auto" />
      <audio ref={sendSoundRef} src="/sounds/send.mp3" preload="auto" />
      <audio ref={replySoundRef} src="/sounds/reply.mp3" preload="auto" />

      <div className="relative">
        {isOpen ? (
          <Draggable handle=".chatbot-drag-handle" cancel="input,button,textarea">
            <div className="w-80 sm:w-96 h-[500px] max-h-[80vh] rounded-lg shadow-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="chatbot-drag-handle bg-blue-600 p-4 flex items-center justify-between cursor-move">
                <div className="flex items-center gap-2">
                  <img src="/robot.svg" alt="Chatbot" width={20} height={20} />
                  <h3 className="font-medium text-white">Moksh Bot</h3>
                </div>
                <button
                  onClick={toggleChatbot}
                  className="text-white hover:bg-blue-700 rounded-full p-1"
                  aria-label="Close chatbot"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 max-w-[80%] ${
                      msg.isUser ? "ml-auto text-right" : "mr-auto text-left"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        msg.isUser
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="mb-4 max-w-[80%] mr-auto text-left">
                    <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-3 rounded-lg rounded-tl-none inline-flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-150">.</span>
                      <span className="animate-bounce delay-300">.</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="border-t border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-900"
              >
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white disabled:opacity-50"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </Draggable>
        ) : (
          <Draggable cancel="button">
  <div className="flex flex-col items-center">
    {/* Tooltip */}
    <div className="mb-2 text-sm text-white px-3 py-1 rounded-full shadow-lg animate-bounce relative">
      💬 Chat with me!
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1">
        <svg
          className="w-4 h-4 animate-pulse"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </div>
    </div>

    {/* Chatbot Button */}
    <button
                onClick={toggleChatbot}
                className="bg-[#000000] hover:bg-[#2563eb] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Open chat assistant"
              >
                <img src="/robot.svg" alt="Open Chatbot" width={24} height={24} />
              </button>
            </div>
          </Draggable>

        )}
      </div>
    </div>
  );
};

export default Chatbot;
