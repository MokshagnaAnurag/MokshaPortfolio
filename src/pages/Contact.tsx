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
        "service_z60mnhb",         
        "template_k2i3kob",        
        form.current,             
        "Xx408ITmVJDb4iFXW"       
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(`Failed to send message. Error: ${error.text}`);
        }
      );
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
