// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
<<<<<<< HEAD
import Chatbot from "./Chatbot"; // ✅ Import Chatbot

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
      
      <Chatbot /> {/* ✅ Render Chatbot so it appears on all pages */}
=======
import Chatbot from "./Chatbot";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Very Dark Grid Pattern & Gradient Overlay for all pages - moved outside content */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundColor: 'transparent',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),\n' +
            'linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18192a] via-[#18192a] to-[#23234a] opacity-100" />
      </div>
      <Navbar />
      <div className="flex-1 relative bg-background text-foreground overflow-hidden">
        <main className="relative z-10">
        <Outlet />
      </main>
      </div>
      <Footer />
      <Chatbot />
>>>>>>> ab37948 (Initial commit)
    </div>
  );
};

export default Layout;
