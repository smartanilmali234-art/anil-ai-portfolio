"use client";

import Card from "./ui/Card";
import { CERTIFICATIONS } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Certification Ledger
        </h3>
        <h2 className="font-heading text-3xl font-bold">Certifications and Badges</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <Card key={cert.title} className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-white">
              {cert.title}
            </h4>
            <p className="text-sm text-textMuted">{cert.provider}</p>

            <div className="flex flex-wrap gap-2">
              {[cert.status, ...cert.badges].map((tag, index) => (
                <span
                  key={`${cert.title}-${tag}-${index}`}
                  className="rounded-full border border-glassBorder bg-glass px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-textMuted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {cert.file ? (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-primaryCyan/30 bg-primaryCyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primaryCyan"
                >
                  View Proof
                </a>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
