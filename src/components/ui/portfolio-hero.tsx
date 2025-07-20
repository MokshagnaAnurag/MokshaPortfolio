"use client"

import { useEffect, useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Github,
  Download,
  ExternalLink,
  Cpu,
  Shield,
  Zap,
  Brain,
  Wifi,
  Bot,
} from "lucide-react";
import * as React from "react";
import { SplineScene } from "@/components/ui/spline";
import { Link as RouterLink } from "react-router-dom";

// Utility function for classNames merging (uses cn but fallback)
function cnUtil(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Icon Cloud Config
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  // @ts-ignore - react-icon-cloud types issue
  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}

// Gradient Text Component
interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export function GradientText({
  children,
  className,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
  ...props
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  } as React.CSSProperties;

  return (
    <div
      className={cnUtil(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center",
        "rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500",
        "overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-background rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Hover Button Component
interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [isListening, setIsListening] = React.useState(false);
    const [circles, setCircles] = React.useState<
      Array<{
        id: number;
        x: number;
        y: number;
        color: string;
        fadeState: "in" | "out" | null;
      }>
    >([]);
    const lastAddedRef = React.useRef(0);

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const xPos = x / buttonWidth;
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
        xPos * 100
      }%)`;

      setCircles((prev) => [...prev, { id: Date.now(), x, y, color, fadeState: null }]);
    }, []);

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return;

        const currentTime = Date.now();
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime;
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          createCircle(x, y);
        }
      },
      [isListening, createCircle]
    );

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true);
    }, []);

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false);
    }, []);

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) => prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "in" } : c)));
          }, 0);

          setTimeout(() => {
            setCircles((prev) => prev.map((c) => (c.id === circle.id ? { ...c, fadeState: "out" } : c)));
          }, 1000);

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id));
          }, 2200);
        }
      });
    }, [circles]);

    return (
      <button
        ref={buttonRef}
        className={cnUtil(
          "relative isolate px-8 py-3 rounded-3xl",
          "text-foreground font-medium text-base leading-6",
          "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
          "cursor-pointer overflow-hidden",
          "before:content-[''] before:absolute before:inset-0",
          "before:rounded-[inherit] before:pointer-events-none",
          "before:z-[1]",
          "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
          "before:mix-blend-multiply before:transition-transform before:duration-300",
          "active:before:scale-[0.975]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
        style={
          {
            "--circle-start": "var(--tw-gradient-from, #a0d9f8)",
            "--circle-end": "var(--tw-gradient-to, #3a5bbf)",
          } as React.CSSProperties
        }
      >
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={cnUtil(
              "absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full",
              "blur-lg pointer-events-none z-[-1] transition-opacity duration-300",
              fadeState === "in" && "opacity-75",
              fadeState === "out" && "opacity-0 duration-[1.2s]",
              !fadeState && "opacity-0"
            )}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        {children}
      </button>
    );
  }
);

HoverButton.displayName = "HoverButton";

// Floating Animation Component
function FloatingElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Sequential typing effect hook
function useSequentialTypingEffect(lines: string[], speed: number = 60) {
  const [displayed, setDisplayed] = React.useState<string[]>(lines.map(() => ""));
  React.useEffect(() => {
    let line = 0;
    let char = 0;
    setDisplayed(lines.map(() => ""));
    function typeNext() {
      setDisplayed((prev) => {
        const updated = [...prev];
        updated[line] = lines[line].slice(0, char + 1);
        return updated;
      });
      char++;
      if (char < lines[line].length) {
        setTimeout(typeNext, speed);
      } else if (line < lines.length - 1) {
        line++;
        char = 0;
        setTimeout(typeNext, speed * 2);
      }
    }
    typeNext();
    // eslint-disable-next-line
  }, [lines.join("|"), speed]);
  return displayed;
}

// Main Portfolio Hero Component
interface PortfolioHeroProps {
  name?: string;
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
}

export function PortfolioHero({
  name: nameProp = "Mokshagna Anurag Kankati",
  title = "",
  description =
    "Building Smarter Systems — From Securing Web Apps to Powering Autonomous Robots with AI & Sensor Fusion ",
  primaryCta = {
    text: "View My Work",
    href: "#projects",
    icon: <ExternalLink className="w-4 h-4" />,
  },
  secondaryCta = {
    text: "Download Resume",
    href: "/resume.pdf",
    icon: <Download className="w-4 h-4" />,
  },
}: PortfolioHeroProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Sequential typing effect for greeting and name
  const [greeting, name] = useSequentialTypingEffect([
    "Hi I'm",
    nameProp
  ], 60);
  // Scroll to expertise section handler
  const handleExpertiseClick = () => {
    const expertise = document.getElementById('expertise');
    if (expertise) {
      expertise.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#expertise';
    }
  };

  // Tech stack icons for the cloud
  const techIcons = [
    "python",
    "javascript",
    "typescript",
    "react",
    "nodejs",
    "arduino",
    "raspberrypi",
    "tensorflow",
    "pytorch",
    "opencv",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "mongodb",
    "postgresql",
    "redis",
    "elasticsearch",
    "linux",
    "ubuntu",
    "git",
    "github",
    "gitlab",
    "jenkins",
    "nginx",
    "wireshark",
    "metasploit",
    "burpsuite",
    "nmap",
    "kalilinux",
  ];

  const domains = [
    {
      icon: Wifi,
      title: "Internet of Things",
      description: "Connected devices & smart systems",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Microcontrollers & real-time systems",
    },
    {
      icon: Bot,
      title: "Robotics",
      description: "Autonomous systems & control",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent algorithms & data science",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security analysis & penetration testing",
    },
  ];

  return (
    <section className="relative min-h-[500px] flex flex-col justify-center overflow-hidden bg-white dark:bg-black">
      {/* Experience-style background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--muted)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Main content: two-column layout */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 w-full max-w-6xl mx-auto px-4 gap-8">
        {/* Name, subtitle, buttons */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl break-words">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-left min-h-[40px]">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              {greeting}
            </span>
            <span className="animate-pulse text-violet-400">|</span>
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-left min-h-[60px]">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              {name}
            </span>
            <span className="animate-pulse text-fuchsia-400">|</span>
          </h2>
          {title && <div className="text-2xl font-semibold mb-2 text-foreground text-left">{title}</div>}
          <p className="text-lg text-muted-foreground max-w-2xl text-left mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border-none">
              <RouterLink to="/projects">
                View Projects <ExternalLink className="w-4 h-4 ml-2" />
              </RouterLink>
            </Button>
            <Button size="lg" className="border border-neutral-700 text-white bg-black rounded-lg sm:rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95" onClick={handleExpertiseClick}>
              About My Expertise <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioHeroDemo() {
  return <PortfolioHero />;
} 