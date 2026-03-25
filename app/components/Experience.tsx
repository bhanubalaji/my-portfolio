"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
};

const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "NexusIQ Solutions",
    duration: "Jul 2025 – Present",
    highlights: [
      "Developed full-stack features for an online examination platform serving 1000+ users",
      "Optimized REST APIs, improving response time by ~30%",
      "Improved performance using server-side rendering (Next.js)",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nextazy Software Solutions Pvt. Ltd.",
    duration: "Aug 2023 – Jun 2025",
    highlights: [
      "Built modular Angular applications",
      "Integrated frontend with backend APIs",
      "Worked in Agile development and code reviews",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // ✅ Fixed scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section id="experience" className=" bg-black text-white px-4 py-24 flex flex-col items-center h-full">
      
      <h2 className="text-4xl font-bold mb-20">Experience</h2>

      <div
        ref={containerRef}
        className="relative max-w-4xl w-full py-10"
      >
        {/* Base Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/10 md:-translate-x-1/2" />

        {/* Animated Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 origin-top md:-translate-x-1/2"
        />

        {experienceData.map((exp, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-20 flex ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 mt-6 shadow-lg shadow-purple-500/50" />

              {/* Card */}
              <div
                className={`w-full md:w-[45%] ml-12 md:ml-0 ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                } group relative rounded-2xl p-[1px]`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl  opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

                {/* Glass Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden">
                  
                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-purple-400">
                      {exp.role}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {exp.company}
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                      {exp.duration}
                    </p>

                    <ul className="text-gray-300 text-sm space-y-1">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}