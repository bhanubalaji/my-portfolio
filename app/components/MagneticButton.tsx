"use client";

import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
};

export default function MagneticButton({
  children,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // remove transition while moving (feels natural)
    ref.current.style.transition = "none";
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const reset = (): void => {
    if (!ref.current) return;

    // smooth return
    ref.current.style.transition = "transform 0.4s ease-out";
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium transition-transform duration-200"
    >
      {children}
    </button>
  );
}