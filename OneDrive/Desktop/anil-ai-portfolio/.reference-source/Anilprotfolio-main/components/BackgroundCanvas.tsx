"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      targetRadius: number;
    }> = [];

    const mouse = { x: -1000, y: -1000, radius: 150 };

    const count = Math.min(Math.floor(width / 15), 80);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        targetRadius: Math.random() * 1.5 + 1
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width * 0.2,
        height * 0.2,
        10,
        width * 0.2,
        height * 0.2,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, "rgba(123, 97, 255, 0.04)");
      gradient.addColorStop(0.5, "rgba(0, 229, 255, 0.02)");
      gradient.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          p.radius = Math.min(p.targetRadius * 2.5, p.radius + 0.1);
          p.x += (dx / dist) * 0.2;
          p.y += (dy / dist) * 0.2;
        } else {
          p.radius = Math.max(p.targetRadius, p.radius - 0.1);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${dist < mouse.radius ? 0.8 : 0.3})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const edgeDist = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (edgeDist < 120) {
            const alpha = (1 - edgeDist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(123, 97, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 block"
      aria-hidden="true"
    />
  );
}
