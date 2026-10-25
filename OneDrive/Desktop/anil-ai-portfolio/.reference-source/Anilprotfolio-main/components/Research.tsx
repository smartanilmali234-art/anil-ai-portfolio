"use client";

import Card from "./ui/Card";
import { Award, BookOpenText, Presentation, Quote } from "lucide-react";

const ITEMS = [
  {
    icon: <BookOpenText className="h-5 w-5 text-primaryCyan" />,
    title: "Research Paper",
    desc: "Applied computer vision pipelines for industrial defect classification and anomaly detection."
  },
  {
    icon: <Presentation className="h-5 w-5 text-secondaryPurple" />,
    title: "Conference Talk",
    desc: "Deployment-first LLM workflows for knowledge retrieval and enterprise assistant systems."
  },
  {
    icon: <Quote className="h-5 w-5 text-accentPink" />,
    title: "Academic Highlight",
    desc: "Faculty-reviewed machine learning mini-projects with reproducible experiments and documentation."
  },
  {
    icon: <Award className="h-5 w-5 text-emerald-400" />,
    title: "Citations & Impact",
    desc: "Track publications, citations, poster sessions, and mentor-driven lab work in one place."
  }
];

export default function Research() {
  return (
    <section id="research" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Research & Publications
        </h3>
        <h2 className="font-heading text-3xl font-bold">Academic Signal</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {ITEMS.map((item) => (
          <Card key={item.title} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-glassBorder bg-glass">
                {item.icon}
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-white">{item.title}</h4>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-textMuted">
                  Coming soon / replace with real content
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-textMuted">{item.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
