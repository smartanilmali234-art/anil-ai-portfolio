"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingBox = ref.current?.getBoundingClientRect();
    if (boundingBox) {
      const x = clientX - (boundingBox.left + boundingBox.width / 2);
      const y = clientY - (boundingBox.top + boundingBox.height / 2);
      setPosition({ x: x * 0.35, y: y * 0.35 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
