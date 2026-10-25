"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Research", href: "#research" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => NAV_ITEMS.map((item) => item.href.slice(1)), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.15, 0.25, 0.4, 0.6]
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="sticky top-4 z-40 mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="glass-panel flex items-center justify-between rounded-full border border-glassBorder px-4 py-3 shadow-[0_0_40px_rgba(0,212,255,0.08)] backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primaryCyan/30 bg-primaryCyan/10 font-heading text-sm font-bold text-primaryCyan">
            AM
          </span>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-semibold text-white">Anil Mali</p>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-textMuted">
              Machine Learning Engineer
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-2 xl:flex">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.href}>
              <a
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] transition-colors",
                  active === item.href.slice(1)
                    ? "bg-white/8 text-white"
                    : "text-textMuted hover:text-white"
                ].join(" ")}
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-primaryCyan/30 bg-primaryCyan/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-primaryCyan transition-colors hover:border-primaryCyan hover:bg-primaryCyan/20 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-glassBorder bg-glass text-white transition-colors hover:border-primaryCyan/40 xl:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel mt-3 rounded-3xl border border-glassBorder p-4 xl:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "rounded-2xl px-3 py-3 text-center text-xs font-mono uppercase tracking-[0.18em] transition-colors",
                  active === item.href.slice(1)
                    ? "bg-primaryCyan/10 text-primaryCyan"
                    : "bg-white/5 text-textMuted"
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
