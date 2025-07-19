import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

<<<<<<< HEAD
  // Load audio (sound effect)
  const sendSound = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (sendSound.current) {
      sendSound.current.currentTime = 0; // Restart from beginning
      sendSound.current.play().catch((err) => {
        console.error("Sound play error:", err);
      });
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    playSound(); // 👈 Play sound on click
=======
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
<<<<<<< HEAD
        "service_z60mnhb",
        "template_k2i3kob",
        form.current,
        "Xx408ITmVJDb4iFXW"
=======
        "service_z60mnhb", // EmailJS service ID
        "template_k2i3kob", // EmailJS template ID
        form.current,
        "Xx408ITmVJDb4iFXW" // EmailJS public key
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
      )
      .then(
        () => {
          const formData = new FormData(form.current!);
          const name = formData.get("user_name") as string;
          const email = formData.get("user_email") as string;
          const message = formData.get("message") as string;

          sendTelegramMessage(name, email, message);

          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(`Failed to send message. Error: ${error.text}`);
        }
      );
  };

<<<<<<< HEAD
  const sendTelegramMessage = async (name: string, email: string, message: string) => {
    const botToken = "7739141586:AAFBMmeQZv-DBSMQ8XCifXpBErDoQ7Dd_ZM";
    const chatId = "1147649504";
=======
  // ✅ Telegram Bot Integration
  const sendTelegramMessage = async (name: string, email: string, message: string) => {
    const botToken = "7739141586:AAFBMmeQZv-DBSMQ8XCifXpBErDoQ7Dd_ZM"; // Your bot token
    const chatId = "1147649504"; // Replace with your Telegram chat ID
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    const text = `📥 *New Contact Form Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Message:* ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.error("Telegram Error:", err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Have a question or want to collaborate? Send me a message!
        </p>

<<<<<<< HEAD
        {/* Hidden audio element */}
        <audio ref={sendSound} src="/sounds/send.mp3" preload="auto" />

        <form
          ref={form}
          onSubmit={sendEmail}
<<<<<<< HEAD
          className="space-y-6 bg-card p-8 rounded-xl shadow-lg text-left"
=======
          className="space-y-6 bg-white dark:bg-[#18192a] p-8 rounded-xl shadow-lg text-left text-black dark:text-white"
>>>>>>> ab37948 (Initial commit)
=======
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-card p-8 rounded-xl shadow-lg text-left"
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        >
          <div>
            <label htmlFor="user_name" className="block mb-2 font-medium">
              Name
            </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
<<<<<<< HEAD
=======
            <Input
              type="text"
              name="user_name"
              required
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-2 font-medium">
              Email
            </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
<<<<<<< HEAD
=======
            <Input
              type="email"
              name="user_email"
              required
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message"
            ></textarea>
<<<<<<< HEAD
=======
            <Textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
            />
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground hover:brightness-110 transition-colors rounded-lg font-semibold"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("successfully") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center gap-8 text-muted-foreground text-2xl">
          <a
            href="mailto:kankati.mokshagnaanurag@gmail.com"
            className="hover:text-primary"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/MokshagnaAnurag"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/kankati-mokshagna-anurag/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
