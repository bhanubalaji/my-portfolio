"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type LinkId = "about" | "skills" | "projects" | "experience" | "contact";

const Logo = () => {
  return (
    <motion.div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="cursor-pointer z-10 flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* 🔷 SVG Monogram */}
      <div className="relative">
        <svg
          width="34"
          height="34"
          viewBox="0 0 100 100"
          className="relative z-10"
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="gradB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradB)"
            strokeWidth="4"
            fill="transparent"
          />

          {/* Letter B */}
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="42"
            fontWeight="700"
            fill="url(#gradB)"
            fontFamily="sans-serif"
          >
            B
          </text>
        </svg>

        {/* ✨ Glow */}
        <div className="absolute inset-0 blur-md bg-indigo-500/30 rounded-full opacity-60"></div>
      </div>

      {/* Text */}
      <span className="text-white text-sm font-semibold tracking-wide">
        Balaji
      </span>
    </motion.div>
  );
}
export default function Navbar() {
  const links: LinkId[] = ["about", "skills", "projects", "experience", "contact"];

  const [active, setActive] = useState<LinkId>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<LinkId, HTMLAnchorElement | null>>({
    about: null,
    skills: null,
    projects: null,
    experience: null,
    contact: null,
  });

  const [pill, setPill] = useState({ left: 0, width: 0 });

  /* ------------------ Scroll Spy ------------------ */
  useEffect(() => {
    const handleScroll = () => {
      let current: LinkId = "about";

      links.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ------------------ Dynamic Pill ------------------ */
  const updatePill = () => {
    const el = linkRefs.current[active];
    const container = containerRef.current;

    if (el && container) {
      const rect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      setPill({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updatePill();
  }, [active]);

  /* 🔥 Fix: update on resize */
  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [active]);

  /* ------------------ Cursor Glow ------------------ */
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <nav
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-4xl px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg flex items-center justify-between overflow-hidden"
      >
        {/* 🔥 Cursor Glow */}
        <motion.div
          className="absolute pointer-events-none w-40 h-40 rounded-full bg-indigo-500/20 blur-2xl"
          animate={{
            x: glow.x - 80,
            y: glow.y - 80,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex relative items-center gap-6 z-10">
          {/* ✨ Dynamic Pill */}
          <motion.div
            className="absolute h-9 rounded-full bg-white/10"
            animate={{
              x: pill.left,
              width: pill.width,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          />

          {links.map((id) => (
            <a
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              href={`#${id}`}
              className={`relative px-3 py-1 text-sm capitalize transition-all duration-300 ${active === id
                ? "text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {id}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white z-10"
        >
          ☰
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 w-full max-w-4xl px-4"
        >
          <div className="rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4">
            {links.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 text-sm capitalize hover:text-white transition"
              >
                {id}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}