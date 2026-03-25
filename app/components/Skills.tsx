"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools & Concepts",
    skills: [
      "Git",
      "Performance Optimization",
      "System Design (Learning)",
      "Cloud Deployment (Learning)",
    ],
  },
];

export default function Skills() {

  return (
    <section id="skills" className="h-full bg-black text-white flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {skillData.map((category, i) => {
          return (
            <motion.div
              key={i}
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
                
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-800/80 border border-gray-700 hover:bg-gray-700 transition"
                      >
                        {skill}
                      </span>
                    ))}
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