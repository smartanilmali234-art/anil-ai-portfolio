"use client";

import Card from "./ui/Card";
import { Terminal } from "lucide-react";

const STATS = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "8+" },
  { label: "Research Papers", value: "1+" },
  { label: "Certifications", value: "5+" },
  { label: "Kaggle Competitions", value: "10+" }
];

export default function About() {
  return (
    <section id="about" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // About Me
        </h3>
        <h2 className="font-heading text-3xl font-bold">A Builder of Applied AI Products</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="space-y-4 lg:col-span-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondaryPurple/30 bg-secondaryPurple/10 text-secondaryPurple">
            <Terminal className="h-5 w-5" />
          </div>
          <h4 className="font-heading text-xl font-semibold">Professional Summary</h4>
          <p className="text-sm leading-7 text-textMuted">
            I design and ship modern machine learning systems that combine strong
            engineering discipline with clean product thinking. My focus spans
            computer vision, large language models, predictive analytics, and
            MLOps workflows that are reliable, explainable, and ready for scale.
          </p>
          <p className="text-sm leading-7 text-textMuted">
            The goal is simple: create AI experiences that impress recruiters,
            delight users, and stand up in production environments.
          </p>
        </Card>

        <Card className="space-y-4 bg-gradient-to-br from-glass to-secondaryPurple/5">
          <h4 className="font-heading text-xl font-semibold text-primaryCyan">
            Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Computer Vision", "NLP", "Generative AI", "MLOps", "Cloud"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-glassBorder bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-textMuted"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="space-y-1 border-t border-glassBorder pt-4 font-mono text-xs">
            <div className="text-white">FOCUS // Applied ML Product Engineering</div>
            <div className="text-textMuted">TARGET // Industrial Scale Intelligence</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {STATS.map((stat) => (
          <Card key={stat.label} className="space-y-2">
            <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-textMuted">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
