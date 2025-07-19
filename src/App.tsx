<<<<<<< HEAD
// src/App.tsx
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

<<<<<<< HEAD
<<<<<<< HEAD
=======
// Layout & Pages
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
<<<<<<< HEAD
import Achievements from "./pages/Achievements";
<<<<<<< HEAD
import Skills from "./pages/Skills";
=======
import Skills from "./pages/Skills"; // ✅ Imported from skills app
>>>>>>> ab37948 (Initial commit)

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          {/* Notification Systems */}
          <Toaster />
          <Sonner />
<<<<<<< HEAD
          
=======

>>>>>>> ab37948 (Initial commit)
          {/* Routing */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="education" element={<Education />} />
                <Route path="experience" element={<Experience />} />
                <Route path="about" element={<AboutMe />} />
                <Route path="achievements" element={<Achievements />} />
<<<<<<< HEAD
                <Route path="skills" element={<Skills />} />
=======
                <Route path="skills" element={<Skills />} /> {/* ✅ Skills Page */}
>>>>>>> ab37948 (Initial commit)
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
=======
import Achievements from "./pages/Achievements"; // ✅ New import
import Skills from "./pages/Skills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="achievements" element={<Achievements />} /> {/* ✅ New Route */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
