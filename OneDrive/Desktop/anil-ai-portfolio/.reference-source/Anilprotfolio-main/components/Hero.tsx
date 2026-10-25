"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Sparkles, Mail, Code2 } from "lucide-react";
import GlowButton from "./ui/GlowButton";
import Magnetic from "./ui/Magnetic";
import { SOCIAL_LINKS } from "@/config/social";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 space-y-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-glassBorder bg-glass px-3 py-1.5 font-mono text-xs text-primaryCyan"
          >
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            <span>AVAILABLE FOR INDUSTRIAL AI INFRASTRUCTURE ROLE</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primaryCyan via-secondaryPurple to-accentPink bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                Anil Mali
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 font-heading text-2xl text-textMuted sm:text-3xl"
            >
              <span>AI / ML Engineer</span>
              <span className="text-secondaryPurple">•</span>
              <span className="text-white">Computer Vision</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-base leading-relaxed text-textMuted sm:text-lg"
          >
            Building intelligent systems for real-world industrial automation
            using Machine Learning, Deep Learning, Computer Vision, MLOps, and
            Large Language Models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <GlowButton variant="primary">View Projects</GlowButton>
            <GlowButton
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileText className="h-4 w-4" /> Resume
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 pt-6"
          >
            {[
              { icon: <Github className="h-5 w-5" />, href: SOCIAL_LINKS.github, label: "GitHub" },
              { icon: <Github className="h-5 w-5" />, href: SOCIAL_LINKS.portfolioRepo, label: "Portfolio Repo" },
              { icon: <Linkedin className="h-5 w-5" />, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
              { icon: <Code2 className="h-5 w-5" />, href: SOCIAL_LINKS.leetcode, label: "LeetCode" },
              { icon: <Mail className="h-5 w-5" />, href: SOCIAL_LINKS.email, label: "Email" }
            ].map((social, idx) => (
              <Magnetic key={idx}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-glassBorder text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-primaryCyan glass-panel"
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        <div className="relative flex h-[560px] w-full items-center justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel relative w-full max-w-md overflow-hidden rounded-3xl border border-glassBorder shadow-2xl"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/profile-circle.png"
                alt="Portrait of Anil Mali"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDeep/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-glassBorder bg-bgDeep/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-primaryCyan backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primaryCyan animate-pulse" />
                  AI / ML Engineer
                </div>
                <div className="mt-3 max-w-xs space-y-1">
                  <h3 className="font-heading text-xl font-bold text-white">
                    Anil Mali
                  </h3>
                  <p className="text-sm text-textMuted">
                    Building intelligent systems for industrial automation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
