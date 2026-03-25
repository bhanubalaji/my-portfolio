"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 px-6 bg-black text-white">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Bezawada Bhanu Balaji</h2>
          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer • React • Next.js • Node.js
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-lg">
          
          <a
            href="https://github.com/bhanubalaji"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaGithub className="transition group-hover:scale-110" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/bezawada-bhanu-balaji-1ba593239"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaLinkedin className="transition group-hover:scale-110" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              LinkedIn
            </span>
          </a>

          <a
            href="mailto:bezawadabalaji3018@gmail.com"
            className="group relative"
          >
            <FaEnvelope className="transition group-hover:scale-110" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
              Email
            </span>
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Bezawada Bhanu Balaji. All rights reserved.
        </div>
      </div>

      {/* Bottom subtle line glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40"></div>
    </footer>
  );
}