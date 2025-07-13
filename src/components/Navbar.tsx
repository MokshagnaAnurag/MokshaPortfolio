import { useState, useEffect } from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
=======
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import {
  Moon,
  Sun,
  Menu as MenuIcon,
  X,
  Home,
  Mail,
  User as UserIcon,
  Briefcase,
  GraduationCap,
  Code,
  Folder,
  Award,
} from "lucide-react";
import { MenuContainer, MenuItem } from "@/components/ui/fluid-menu";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import type { TabItem } from "@/components/ui/expandable-tabs";
>>>>>>> ab37948 (Initial commit)

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
<<<<<<< HEAD
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
=======
  const navigate = useNavigate();
>>>>>>> ab37948 (Initial commit)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/achievements", label: "Achievements" },
    { to: "/contact", label: "Contact" },
  ];

<<<<<<< HEAD
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-2">
      <nav
        className={`transition-all duration-300 ease-in-out rounded-b-xl px-6 py-3 mx-auto max-w-5xl ${
          isScrolled
            ? "bg-background/90 shadow-lg backdrop-blur-md border border-white/20"
            : "bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10"
        }`}
=======
  const mobileTabs: TabItem[] = [
    { title: "Home", icon: Home },
    { title: "About Me", icon: UserIcon },
    { title: "Experience", icon: Briefcase },
    { title: "Education", icon: GraduationCap },
    { type: "separator" },
    { title: "Skills", icon: Code },
    { title: "Projects", icon: Folder },
    { title: "Achievements", icon: Award },
    { title: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-2">
      <nav
        className={`transition-all duration-300 ease-in-out rounded-b-xl px-6 py-3 mx-auto max-w-5xl 
      bg-white dark:bg-[#0a0a13] 
      border border-blue-200 dark:border-white/20 
      shadow-lg
    `}
>>>>>>> ab37948 (Initial commit)
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
<<<<<<< HEAD
            className="text-lg font-bold text-white tracking-widest"
          >
            Moksh<span className="font-extrabold">Portfolio</span>
=======
            className="text-lg font-bold tracking-widest"
          >
            <span className="text-black dark:text-white">Moksh</span>
            <span className="font-extrabold text-blue-700 dark:text-white">Portfolio</span>
>>>>>>> ab37948 (Initial commit)
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
<<<<<<< HEAD
                  `text-sm font-medium transition-all duration-200 transform active:scale-95 tracking-wide relative group ${
                    isActive
                      ? "text-blue-500"
                      : "text-foreground hover:text-blue-400"
                  }`
=======
                  `text-sm font-medium transition-all duration-200 transform active:scale-95 tracking-wide relative group ` +
                  (isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-400")
>>>>>>> ab37948 (Initial commit)
                }
              >
                <span className="relative group-hover:underline group-hover:underline-offset-8 group-hover:decoration-2">
                  {link.label}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
<<<<<<< HEAD
              className="transition hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="transition hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen
              ? "max-h-[500px] mt-4 pt-4 border-t border-white/20 bg-black/20 dark:bg-white/10 rounded-xl backdrop-blur-md animate-fadeIn"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 px-2 pb-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-3 py-2 rounded-md tracking-wide transition-all duration-200 transform active:scale-95 ${
                    isActive
                      ? "text-blue-500 bg-blue-100/20 dark:bg-blue-900/40 backdrop-blur-sm"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
=======
              className="transition hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Fluid Circular Menu for Mobile */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] flex justify-center">
        <ExpandableTabs
          tabs={mobileTabs}
          className="shadow-lg"
          onChange={(index) => {
            if (index === null) return;
            const tab = mobileTabs[index];
            switch (tab.title) {
              case "Home": navigate("/"); break;
              case "About Me": navigate("/about"); break;
              case "Experience": navigate("/experience"); break;
              case "Education": navigate("/education"); break;
              case "Skills": navigate("/skills"); break;
              case "Projects": navigate("/projects"); break;
              case "Achievements": navigate("/achievements"); break;
              case "Contact": navigate("/contact"); break;
              default: break;
            }
          }}
        />
      </div>
>>>>>>> ab37948 (Initial commit)
    </div>
  );
};

export default Navbar;
