"use client";

import { Mail, Phone, GitBranch } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "bezawadabalaji3018@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91-7780369814",
    },
    {
      icon: <GitBranch size={18} />,
      label: "GitHub",
      value: "https://github.com/bhanubalaji",
    },
  ];

  return (
    <section id="contact" className="h-full bg-black text-white flex flex-col items-center justify-center px-4 py-20">

      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-12 max-w-xl text-center">
        I&apos;m open to opportunities, collaborations, and interesting projects.
        Feel free to reach out 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {contactItems.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-[1px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r  opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-4">

              <div className="text-purple-400">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  {item.label}
                </p>
                <p className="text-sm font-medium break-all">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        {/* <a
          href="mailto:bezawadabalaji3018@gmail.com"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition"
        >
          Let's Connect
        </a> */}

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bezawadabalaji3018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 transition"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}