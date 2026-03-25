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
  const typedText = useTyping(
    "React • Next.js • Node.js • System Design • Performance Optimization"
  );

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
          rotateX: [-4, 4, -4],
          rotateY: [4, -4, 4],
          scale: [1, 1.03, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="space-y-6 p-10 md:p-14 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">

          {/* 🧠 SYSTEM HEADER */}
          <p className="text-xs tracking-widest text-indigo-300 uppercase">
            System Initialized
          </p>

          {/* ✨ MAIN TEXT */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            I&apos;m a{" "}
            <span className="text-indigo-400">Full Stack Developer</span>
            <br />
            building{" "}
            <span className="text-purple-400">scalable, modern applications</span>
          </h1>
          {/* 👇 Typing */}
          <p className="text-lg md:text-xl text-gray-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* 🔗 SOCIAL / ACTION */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-2">

            <MagneticButton>
              <a
                href="https://github.com/bhanubalaji"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Projects
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bezawadabalaji3018@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let&apos;s Connect
              </a>
            </MagneticButton>

          </div>

        </div>
      </motion.div>
    </section>
  );
}