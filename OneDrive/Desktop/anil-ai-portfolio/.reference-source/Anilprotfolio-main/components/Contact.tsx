"use client";

import Card from "./ui/Card";
import GlowButton from "./ui/GlowButton";
import { Mail, MapPin, Send, Github, Linkedin, Code2, Phone, Globe, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/social";

export default function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Synapse Connection
        </h3>
        <h2 className="font-heading text-3xl font-bold">Initialize Project Briefing</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Card className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <h4 className="font-heading text-xl font-semibold text-white">Contact Details</h4>
            <p className="text-sm leading-7 text-textMuted">
              The best way to reach me is by email or LinkedIn. I am open to internships,
              freelance ML projects, product collaborations, and full-time roles.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primaryCyan" />
              <a className="transition-colors hover:text-primaryCyan" href="mailto:smartanilmali234@gmail.com">
                smartanilmali234@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accentPink" />
              <a className="transition-colors hover:text-accentPink" href="tel:+918904722764">
                +91 89047 22764
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-secondaryPurple" />
              <span>India · Remote / Hybrid</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-textMuted">Profiles</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: SOCIAL_LINKS.github, label: "GitHub", icon: <Github className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.portfolioRepo, label: "Portfolio Repo", icon: <Github className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.leetcode, label: "LeetCode", icon: <Code2 className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.kaggle, label: "Kaggle", icon: <Globe className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.medium, label: "Medium", icon: <Globe className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.x, label: "X", icon: <Globe className="h-4 w-4" /> },
                { href: SOCIAL_LINKS.researchGate, label: "ResearchGate", icon: <Globe className="h-4 w-4" /> }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-glassBorder bg-glass px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-primaryCyan"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primaryCyan/30 bg-primaryCyan/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primaryCyan transition-colors hover:border-primaryCyan hover:bg-primaryCyan/20"
          >
            Download Resume <ArrowUpRight className="h-4 w-4" />
          </a>
        </Card>

        <Card className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <h4 className="font-heading text-xl font-semibold text-white">Send a Message</h4>
            <p className="text-sm leading-7 text-textMuted">
              Share role details, collaboration ideas, or project requirements. I will reply as soon as possible.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-glassBorder bg-glass px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-textMuted/60 focus:border-primaryCyan focus:outline-none"
                  placeholder="Anil Mali"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-glassBorder bg-glass px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-textMuted/60 focus:border-primaryCyan focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[10px] uppercase tracking-wider text-textMuted">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full resize-none rounded-2xl border border-glassBorder bg-glass px-4 py-3 font-sans text-sm text-white transition-colors placeholder:text-textMuted/60 focus:border-primaryCyan focus:outline-none"
                placeholder="Tell me about the role, project, or collaboration..."
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-glassBorder bg-[radial-gradient(circle_at_50%_35%,rgba(0,212,255,0.15),transparent_25%),radial-gradient(circle_at_65%_50%,rgba(139,92,246,0.14),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-textMuted">
                  Availability
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-white">
                  Open to remote roles and select freelance work
                </p>
              </div>

              <GlowButton
                variant="primary"
                className="flex h-full items-center justify-center gap-2"
              >
                <span>Transmit Message</span>
                <Send className="h-4 w-4" />
              </GlowButton>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
