"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function Card({
  title,
  children,
  className = ""
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOpacity(0)}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:border-glassBorder group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-10"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${coords.x}px ${coords.y}px, rgba(0, 229, 255, 0.07), transparent 80%)`
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 border border-transparent rounded-2xl group-hover:border-none -z-10"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(123, 97, 255, 0.4), transparent 60%)`,
          maskImage: `linear-gradient(black, black) exclude, linear-gradient(black, black)`,
          WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          WebkitMaskComposite: "xor"
        }}
      />
      {title ? <h2 className="mb-3 text-xl font-semibold tracking-tight">{title}</h2> : null}
      <div className="text-sm leading-6 text-muted">{children}</div>
    </motion.div>
  );
}
