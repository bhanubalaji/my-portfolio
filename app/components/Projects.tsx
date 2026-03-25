"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Nexsaa – Online Examination Platform",
    desc: "Full-stack system for conducting online exams with authentication and performance optimization.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "JWT"],
    highlights: [
      "Built complete full-stack architecture",
      "Implemented secure authentication (JWT)",
      "Optimized MongoDB queries for performance",
    ],
  },
  {
    title: "Real-Time Chat Application",
    desc: "Real-time messaging app with live communication and scalability learning.",
    tech: ["Node.js", "Socket.io", "Express"],
    highlights: [
      "Implemented real-time messaging using WebSockets",
      "Handled multiple user connections",
      "Exploring scaling & persistence strategies",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-full bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl p-[1px]"
          >
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r  opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden">
              
              {/* Noise */}
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-gray-800 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="text-gray-400 text-sm space-y-1">
                  {project.highlights.map((h, idx) => (
                    <li key={idx}>• {h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}