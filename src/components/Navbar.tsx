import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-2">
      <nav
        className={`transition-all duration-300 ease-in-out px-6 py-3 mx-auto max-w-5xl backdrop-blur-xl
          ${location.pathname === "/"
            ? (theme === "dark" ? "bg-black" : "bg-white/90")
            : "rounded-b-xl shadow-lg border border-white/20 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70"}
          ${location.pathname === "/" ? "border-none shadow-none rounded-none" : ""}
          ${isScrolled && location.pathname !== "/" ? "bg-background/90" : ""}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-lg font-bold tracking-widest"
          >
            <span className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}>Moksh</span>
            <span className={`font-extrabold ${theme === "dark" ? "text-white" : "text-blue-700"}`}>Portfolio</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 transform active:scale-95 tracking-wide relative group ${
                    isActive
                      ? "text-blue-500"
                      : "text-foreground hover:text-blue-400"
                  }`
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
              className="transition hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Fluid Circular Menu for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <MenuContainer>
          <MenuItem
            icon={
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                  <MenuIcon size={24} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                  <X size={24} strokeWidth={1.5} />
                </div>
              </div>
            }
          />
          <MenuItem icon={<Home size={24} strokeWidth={1.5} />} onClick={() => navigate("/")} />
          <MenuItem icon={<UserIcon size={24} strokeWidth={1.5} />} onClick={() => navigate("/about")} />
          <MenuItem icon={<Briefcase size={24} strokeWidth={1.5} />} onClick={() => navigate("/experience")} />
          <MenuItem icon={<GraduationCap size={24} strokeWidth={1.5} />} onClick={() => navigate("/education")} />
          <MenuItem icon={<Code size={24} strokeWidth={1.5} />} onClick={() => navigate("/skills")} />
          <MenuItem icon={<Folder size={24} strokeWidth={1.5} />} onClick={() => navigate("/projects")} />
          <MenuItem icon={<Award size={24} strokeWidth={1.5} />} onClick={() => navigate("/achievements")} />
          <MenuItem icon={<Mail size={24} strokeWidth={1.5} />} onClick={() => navigate("/contact")} />
        </MenuContainer>
      </div>
    </div>
  );
};

export default Navbar;

// NOTE: Add 'pt-24' to main content containers on all pages to prevent navbar overlap.
