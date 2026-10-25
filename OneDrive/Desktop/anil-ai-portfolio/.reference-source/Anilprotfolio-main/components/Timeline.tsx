"use client";

import { motion } from "framer-motion";

const JOURNEY = [
  {
    year: "2020",
    title: "10th Standard",
    detail: "Completed secondary education with 84.8% and built a strong academic foundation.",
    tag: "Foundation"
  },
  {
    year: "2022",
    title: "12th Standard",
    detail: "Completed higher secondary education with 84.8%, strengthening the path toward engineering.",
    tag: "Transition"
  },
  {
    year: "2023 - 2027",
    title: "Graduation",
    detail: "KLE College of Engineering and Technology, Chikodi. Current CGPA: 8.04.",
    tag: "Current Journey"
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const
    }
  }
};

export default function Timeline() {
  return (
    <section id="timeline" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Academic Journey
        </h3>
        <h2 className="font-heading text-3xl font-bold">Step by Step Progression</h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primaryCyan via-secondaryPurple to-accentPink opacity-40" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 py-2 pl-14"
        >
          {JOURNEY.map((step, index) => (
            <motion.div key={step.year} variants={item} className="group relative">
              <div className="absolute -left-[3.65rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-glassBorder bg-bgDeep shadow-[0_0_20px_rgba(0,229,255,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:border-primaryCyan">
                <div className="h-3 w-3 rounded-full bg-secondaryPurple transition-colors duration-300 group-hover:bg-primaryCyan" />
              </div>

              <div className="glass-panel relative overflow-hidden rounded-2xl border border-glassBorder p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primaryCyan/20 bg-primaryCyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primaryCyan">
                    {step.year}
                  </span>
                  <span className="rounded-full border border-glassBorder bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-textMuted">
                    Step {index + 1}
                  </span>
                  <span className="rounded-full border border-secondaryPurple/20 bg-secondaryPurple/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-secondaryPurple">
                    {step.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-primaryCyan">
                    {step.title}
                  </h4>
                  <p className="max-w-2xl font-sans text-sm leading-relaxed text-textMuted">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
