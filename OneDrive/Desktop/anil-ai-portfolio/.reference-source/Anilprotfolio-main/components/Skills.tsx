"use client";

import { motion } from "framer-motion";
import Card from "./ui/Card";
import { SKILLS } from "@/data/skills";

const CATEGORIES = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Generative AI",
  "Reinforcement Learning",
  "Data Engineering",
  "MLOps",
  "Cloud Computing"
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Technical Core
        </h3>
        <h2 className="font-heading text-3xl font-bold">Capabilities Stack</h2>
      </div>

      <Card className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-glassBorder bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-textMuted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-heading text-white">{skill.name}</span>
                <span className="font-mono text-xs text-textMuted">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primaryCyan via-secondaryPurple to-emerald-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
}
