"use client";
import { motion } from "framer-motion";
import { User, Code, Briefcase, Folder, GraduationCap } from "lucide-react";

export default function About() {

  const cards = [
    {
      title: "Summary",
      icon: <User size={20} />,
      content:
        "Full Stack Developer with 2+ years building scalable apps using React, Next.js, Node.js, and MongoDB.",
    },
    {
      title: "Skills",
      icon: <Code size={20} />,
      content:
        "React, Next.js, Angular, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, REST APIs, JWT.",
    },
    {
      title: "Experience",
      icon: <Briefcase size={20} />,
      content:
        "Built systems for 1000+ users, improved API performance by ~30%, and worked with SSR.",
    },
    {
      title: "Projects",
      icon: <Folder size={20} />,
      content:
        "Online Exam Platform & Real-time Chat App using Socket.io.",
    },
    {
      title: "Education",
      icon: <GraduationCap size={20} />,
      content:
        "B.Tech – Sri Venkateswara College of Engineering (2019–2022).",
    },
  ];

  return (
    <section id="about" className="h-full bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {cards.map((card, i) => {

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-[1px]"
            >
              {/* Animated Gradient Border */}
              {/* <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_top_left,_#a855f7,_#ec4899,_#3b82f6,_#a855f7)] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm animate-spin-slow"></div> */}

              {/* Glass Card */}
              <div className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-purple-400">
                    {card.icon}
                    <h3 className="text-lg font-semibold">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}