<<<<<<< HEAD
// src/components/Layout.tsx
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
<<<<<<< HEAD
<<<<<<< HEAD
import Chatbot from "./Chatbot"; // ✅ Import Chatbot
=======
import Chatbot from "./Chatbot";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, User, Briefcase, GraduationCap, Code, Folder, Award, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MobileTabs() {
  const navigate = useNavigate();
  const navTabs = [
    { title: "Home", icon: Home },
    { title: "About Me", icon: User },
    { title: "Experience", icon: Briefcase },
    { title: "Education", icon: GraduationCap },
    { title: "Skills", icon: Code },
    { title: "Projects", icon: Folder },
    { title: "Achievements", icon: Award },
    { title: "Contact", icon: Mail },
  ];
  const tabRoutes = [
    "/", "/about", "/experience", "/education", "/skills", "/projects", "/achievements", "/contact"
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/90 dark:bg-[#181A20]/90 border-t border-gray-200 dark:border-white/10 backdrop-blur-md block md:hidden">
      <ExpandableTabs
        tabs={navTabs}
        activeColor="text-blue-500"
        onChange={index => { if (index !== null) navigate(tabRoutes[index]); }}
        className="bg-transparent border-none shadow-none justify-center"
      />
    </div>
  );
}
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
<<<<<<< HEAD
      
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
=======
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Chatbot />
      <MobileTabs />
      <Footer />
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    </div>
  );
};

export default Layout;
