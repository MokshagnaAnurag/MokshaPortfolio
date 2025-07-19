<<<<<<< HEAD
=======

>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
<<<<<<< HEAD

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 50;
    const mouse = { x: 0, y: 0, radius: 100 };

=======
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 50;
    
    // Set canvas size to match window size
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
<<<<<<< HEAD

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resizeCanvas();

=======
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Create particles
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
<<<<<<< HEAD
          color: theme === "dark"
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(0, 0, 0, 0.2)",
        });
      }
    };

    createParticles();

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Mouse repulsion
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const repulsionX = Math.cos(angle) * force * 2;
          const repulsionY = Math.sin(angle) * force * 2;

          particle.x += repulsionX;
          particle.y += repulsionY;
        }

        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;

=======
          color: theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"
        });
      }
    };
    
    createParticles();
    
    // Draw particles and connect them
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
<<<<<<< HEAD

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }

=======
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
<<<<<<< HEAD

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(255, 255, 255, ${0.1 * (1 - dist / 150)})`
                : `rgba(0, 0, 0, ${0.05 * (1 - dist / 150)})`;
=======
        
        // Connect particles within a certain distance
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = theme === "dark" 
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})` 
              : `rgba(0, 0, 0, ${0.05 * (1 - distance / 150)})`;
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
    };
<<<<<<< HEAD

=======
    
    // Animation loop
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
<<<<<<< HEAD

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

=======
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
