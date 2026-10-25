"use client";

import Card from "./ui/Card";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Operational Artifacts
        </h3>
        <h2 className="font-heading text-3xl font-bold">Featured AI Implementations</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Card key={project.title} className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-glassBorder bg-glass text-primaryCyan">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-textMuted transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-textMuted transition-colors hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-primaryCyan">
                  {project.title}
                </h4>
                <p className="font-sans text-xs leading-relaxed text-textMuted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="rounded-full border border-primaryCyan/20 bg-primaryCyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-primaryCyan">
                    {project.metrics}
                  </span>
                  <span className="rounded-full border border-secondaryPurple/20 bg-secondaryPurple/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-secondaryPurple">
                    {project.deployment}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-glassBorder pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-glassBorder bg-bgDeep px-2 py-0.5 font-mono text-[10px] text-textMuted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-primaryCyan/30 bg-primaryCyan/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-primaryCyan transition-colors hover:border-primaryCyan hover:bg-primaryCyan/20"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-glassBorder bg-glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
