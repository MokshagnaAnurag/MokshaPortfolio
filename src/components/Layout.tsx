// src/components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
    </div>
  );
};

export default Layout;
