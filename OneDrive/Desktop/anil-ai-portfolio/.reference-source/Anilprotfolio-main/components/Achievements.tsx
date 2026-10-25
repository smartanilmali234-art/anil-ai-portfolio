"use client";

import Card from "./ui/Card";

const ACHIEVEMENTS = [
  "Kaggle medals and competition practice",
  "Hackathon builds and rapid prototypes",
  "Open-source contributions",
  "Awards and recognition",
  "Portfolio-first engineering storytelling"
];

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Achievements
        </h3>
        <h2 className="font-heading text-3xl font-bold">Proof of Execution</h2>
      </div>

      <Card className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement}
              className="rounded-2xl border border-glassBorder bg-glass px-4 py-4 text-sm text-textMuted"
            >
              {achievement}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
