"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

/* ------------------ Typing Hook ------------------ */
function useTyping(text: string, speed: number = 80): string {
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    let i = 0;
    setDisplay("");

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}

/* ------------------ Particles ------------------ */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

/* ------------------ Hero ------------------ */
export default function Hero() {
  const typedText = useTyping("Balaji");

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">

      {/* 🌌 Particles */}
      <Particles />

      {/* 🌊 Blobs (clean + reduced) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-2xl"
        />
      </div>

      {/* 🧠 Content */}
<motion.div
  className="relative z-10"
  style={{ transformPerspective: 1000 }}
  animate={{
    rotateX: [-5, 5, -5],
    rotateY: [5, -5, 5],
    scale: [1, 1.05, 1],
    y: [0, -10, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
        <div className="space-y-6 p-10 md:p-14 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

          {/* ✨ Typing */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-indigo-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200">
            Full Stack Developer • React • Next.js • Node.js
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4 pt-2">
            <MagneticButton>View Work</MagneticButton>
            <MagneticButton>Contact Me</MagneticButton>
          </div>

        </div>
      </motion.div>

    </section>
  );
}