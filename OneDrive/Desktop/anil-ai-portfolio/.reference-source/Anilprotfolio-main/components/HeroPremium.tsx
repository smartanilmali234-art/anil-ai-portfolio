"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import GlowButton from "./ui/GlowButton";
import Magnetic from "./ui/Magnetic";
import { SOCIAL_LINKS } from "@/config/social";

const ROLES = [
  "Machine Learning Engineer",
  "AI Engineer",
  "Deep Learning Engineer",
  "MLOps Engineer",
  "Data Scientist",
  "Generative AI Developer"
];

const METRICS = [
  { label: "ML Systems", value: "8+" },
  { label: "Deep Learning Stacks", value: "10+" },
  { label: "Featured Case Studies", value: "8" }
];

export default function HeroPremium() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = ROLES[roleIndex];
    let charIndex = 0;
    setTyped("");

    const typeTimer = window.setInterval(() => {
      charIndex += 1;
      setTyped(current.slice(0, charIndex));
      if (charIndex >= current.length) window.clearInterval(typeTimer);
    }, 45);

    const rotateTimer = window.setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);

    return () => {
      window.clearInterval(typeTimer);
      window.clearTimeout(rotateTimer);
    };
  }, [roleIndex]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-10 lg:pt-16">
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-72 w-72 rounded-full bg-primaryCyan/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-secondaryPurple/10 blur-[120px]" />

      <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 space-y-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-glassBorder bg-glass px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-primaryCyan"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Hi, I&apos;m Anil</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m Anil.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-base leading-8 text-textMuted sm:text-lg"
            >
              I build production-grade machine learning experiences for real-world
              teams across computer vision, NLP, generative AI, recommendation
              systems, and MLOps. Fast, elegant, measurable, and built to scale.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass-panel inline-flex flex-wrap items-center gap-3 rounded-2xl border border-glassBorder px-4 py-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-textMuted">
              Currently playing role:
            </span>
            <span className="border-l border-glassBorder pl-3 font-heading text-lg font-semibold text-white">
              {typed}
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 bg-primaryCyan animate-pulse" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <GlowButton
              variant="primary"
              className="flex items-center gap-2"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </GlowButton>
            <GlowButton
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </GlowButton>
            <GlowButton
              variant="secondary"
              className="flex items-center gap-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me <Mail className="h-4 w-4" />
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="grid max-w-2xl grid-cols-3 gap-4"
          >
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel rounded-2xl border border-glassBorder p-4"
              >
                <p className="font-heading text-2xl font-bold text-white">{metric.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-textMuted">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {[
              {
                icon: <Github className="h-5 w-5" />,
                href: SOCIAL_LINKS.github,
                label: "GitHub"
              },
              {
                icon: <Github className="h-5 w-5" />,
                href: SOCIAL_LINKS.portfolioRepo,
                label: "Portfolio Repo"
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                href: SOCIAL_LINKS.linkedin,
                label: "LinkedIn"
              },
              {
                icon: <Code2 className="h-5 w-5" />,
                href: SOCIAL_LINKS.leetcode,
                label: "LeetCode"
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: SOCIAL_LINKS.email,
                label: "Email"
              }
            ].map((social) => (
              <Magnetic key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex items-center gap-3 rounded-full border border-glassBorder bg-glass px-4 py-3 text-sm text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-white"
                >
                  {social.icon}
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    {social.label}
                  </span>
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-glassBorder shadow-[0_0_90px_rgba(0,212,255,0.08)]"
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.24),transparent_28%),radial-gradient(circle_at_55%_40%,rgba(0,212,255,0.18),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.7),rgba(15,23,42,0.25))]" />
              <img
                src="/profile-circle.png"
                alt="Anil Mali portrait"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bgDeep/30 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-bgDeep/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-textMuted backdrop-blur">
                Neural profile
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-bgDeep/55 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-2xl font-bold text-white">Anil Mali</p>
                    <p className="mt-1 text-sm text-textMuted">
                      Machine Learning Engineer · Generative AI · MLOps
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primaryCyan/20 bg-primaryCyan/10 text-primaryCyan">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Computer Vision", "NLP", "LLMs", "Cloud MLOps"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-glassBorder bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-textMuted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
