"use client";

import React, { MouseEvent, useRef } from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function GlowButton({
  children,
  onClick,
  variant = "primary",
  className = ""
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  const variantStyles =
    variant === "primary"
      ? "bg-gradient-to-r from-primaryCyan to-secondaryPurple text-bgDeep font-semibold border-none"
      : "bg-glass border border-glassBorder text-white hover:border-primaryCyan/50";

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-heading uppercase tracking-wider transition-all duration-300 transform active:scale-95 ${variantStyles} ${className}`}
      style={{ isolation: "isolate" }}
    >
      <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.2),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </button>
  );
}
