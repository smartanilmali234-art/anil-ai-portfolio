"use client";

import { motion } from "framer-motion";
import Card from "./ui/Card";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Experience Timeline
        </h3>
        <h2 className="font-heading text-3xl font-bold">Career Journey</h2>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primaryCyan via-secondaryPurple to-accentPink opacity-40" />

        <div className="space-y-8 pl-16">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.company}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -left-[3.4rem] top-2 flex h-7 w-7 items-center justify-center rounded-full border border-glassBorder bg-bgDeep">
                <div className="h-3 w-3 rounded-full bg-secondaryPurple transition-colors group-hover:bg-primaryCyan" />
              </div>

              <Card className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primaryCyan/20 bg-primaryCyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primaryCyan">
                    {item.year}
                  </span>
                  <span className="rounded-full border border-glassBorder bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-textMuted">
                    {item.company}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-primaryCyan">
                    {item.role}
                  </h4>
                  <p className="text-sm leading-7 text-textMuted">{item.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-glassBorder bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-textMuted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
