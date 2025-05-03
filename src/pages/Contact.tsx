import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_z60mnhb", // EmailJS service ID
        "template_k2i3kob", // EmailJS template ID
        form.current,
        "Xx408ITmVJDb4iFXW" // EmailJS public key
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

  // ✅ Telegram Bot Integration
  const sendTelegramMessage = async (name: string, email: string, message: string) => {
    const botToken = "7739141586:AAFBMmeQZv-DBSMQ8XCifXpBErDoQ7Dd_ZM"; // Your bot token
    const chatId = "1147649504"; // Replace with your Telegram chat ID
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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-card p-8 rounded-xl shadow-lg text-left"
        >
          <div>
            <label htmlFor="user_name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message"
            ></textarea>
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
