'use client'

import { useState, useEffect } from "react";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ExternalLink, ArrowRight } from "lucide-react";

// Typing effect hook
const useTypingEffect = (text: string, speed: number = 80) => {
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
};

export function Hero3D() {
  const typedName = useTypingEffect("Mokshagna Anurag Kankati", 80);
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-8 md:py-16 bg-[#0a0a13]">
      {/* Completely dark background for both light and dark mode */}
      {/* Removed gradients and overlays for full darkness */}
      {/* <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" /> */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Left: Text and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Hello, I'm <span>{typedName}</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold">
              <Link to="/projects">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neutral-600 text-neutral-100 bg-black hover:bg-neutral-900 font-semibold">
              <Link to="/experience">
                About My Expertise <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mt-4">
            Building Smarter Systems — From Securing Web Apps to Powering Autonomous Robots with AI & Sensor Fusion
          </p>
        </div>
        {/* Right: 3D Robot */}
        <div className="flex-1 flex items-center justify-center min-h-[350px]">
          <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 