"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import { SOCIAL_LINKS } from "@/config/social";

const LINKS = [
  { href: SOCIAL_LINKS.github, label: "GitHub", icon: <Github className="h-4 w-4" /> },
  { href: SOCIAL_LINKS.portfolioRepo, label: "Portfolio Repo", icon: <Github className="h-4 w-4" /> },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { href: SOCIAL_LINKS.leetcode, label: "LeetCode", icon: <Code2 className="h-4 w-4" /> },
  { href: SOCIAL_LINKS.email, label: "Email", icon: <Mail className="h-4 w-4" /> }
];

export default function Footer() {
  return (
    <footer className="border-t border-glassBorder pt-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primaryCyan animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-textMuted">
              Anil Mali // AI Engineer
            </span>
          </div>
          <p className="max-w-xl text-sm leading-6 text-textMuted">
            Designing portfolio experiences that combine machine learning depth, product polish,
            and recruiter-friendly clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {LINKS.map((link) => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-glassBorder bg-glass px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-white"
              >
                {link.icon}
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-glassBorder pt-6 text-xs font-mono uppercase tracking-[0.3em] text-textMuted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Anil Mali</span>
        <span>Built for premium AI recruiting</span>
      </div>
    </footer>
  );
}
