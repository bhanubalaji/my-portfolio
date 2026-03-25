"use client";

import { useEffect, useState } from "react";

type Position = { x: number; y: number };

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function Cursor() {
  const [target, setTarget] = useState<Position>({ x: 0, y: 0 });
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  // 🎯 Mouse tracking
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🌊 Smooth cursor follow
  useEffect(() => {
    let frame: number;

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [target]);

  // 🌌 Background particles system
  useEffect(() => {

    let frame: number;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          const dx = pos.x - p.x;
          const dy = pos.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // 🧲 Attraction to cursor
          if (dist < 120) {
            return {
              ...p,
              x: p.x + dx * 0.01 + p.vx,
              y: p.y + dy * 0.01 + p.vy,
            };
          }

          // normal drift
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
          };
        })
      );

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [pos]);

  return (
    <>
      {/* 🌌 Background Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed w-[2px] h-[2px] bg-white/40 rounded-full pointer-events-none z-[0]"
          style={{
            transform: `translate(${p.x}px, ${p.y}px)`,
          }}
        />
      ))}

      {/* 🔦 Spotlight */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(300px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 80%)`,
        }}
      />

      {/* 🎮 Cursor */}
      <div
        className="fixed pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        <div className="w-5 h-5 rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  );
}