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

// Simple typing effect hook (similar to previous home page implementation)
function useTypingEffect(text: string, speed: number = 80) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
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
  name = "Mokshagna Anurag Kankati",
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

  // Typing effect for the name
  const typedName = useTypingEffect(name, 90);

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
    <section ref={ref} className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,200,119,0.1),transparent_50%)]" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0.5} className="absolute top-20 left-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/10" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-40 right-20">
          <div className="w-16 h-16 rotate-45 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm border border-white/10" />
        </FloatingElement>
        <FloatingElement delay={1.5} className="absolute bottom-40 left-20">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/10" />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-20 right-10">
          <div className="w-24 h-24 rotate-12 bg-gradient-to-r from-yellow-400/20 to-red-400/20 backdrop-blur-sm border border-white/10 rounded-lg" />
        </FloatingElement>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <GradientText colors={["#3b82f6", "#8b5cf6", "#06b6d4"]} className="inline-block">
                  {typedName}
                </GradientText>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl lg:text-3xl text-muted-foreground font-medium"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Domain Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {domains.map((domain, index) => (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30 hover:bg-muted/50 hover:border-border/50 transition-all duration-300"
                >
                  <domain.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{domain.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20 rounded-full blur-3xl" />

              {/* Icon Cloud */}
              <div className="relative z-10 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <IconCloud iconSlugs={techIcons} />
              </div>
            </div>

            {/* Floating tech badges */}
            <FloatingElement delay={2} className="absolute -top-4 -left-4">
              <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300">
                IoT
              </div>
            </FloatingElement>

            <FloatingElement delay={2.5} className="absolute -top-4 -right-4">
              <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-300">
                AI/ML
              </div>
            </FloatingElement>

            <FloatingElement delay={3} className="absolute -bottom-4 -left-4">
              <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300">
                Robotics
              </div>
            </FloatingElement>

            <FloatingElement delay={3.5} className="absolute -bottom-4 -right-4">
              <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-medium text-red-300">
                Security
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default function PortfolioHeroDemo() {
  return <PortfolioHero />;
} 