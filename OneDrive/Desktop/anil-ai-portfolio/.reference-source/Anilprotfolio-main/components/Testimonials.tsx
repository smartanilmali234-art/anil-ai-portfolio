"use client";

import Card from "./ui/Card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Anil combines applied ML rigor with a designer’s sense of polish. His portfolio reads like a product release.",
    name: "Peer Review"
  },
  {
    quote:
      "The strongest thing about his work is the ability to make complex AI ideas feel production-ready and readable.",
    name: "Mentor Feedback"
  },
  {
    quote:
      "A recruiter-friendly presentation with enough technical depth to impress a senior engineering team.",
    name: "Hiring Signal"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Testimonials
        </h3>
        <h2 className="font-heading text-3xl font-bold">Professional Voice</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name} className="space-y-4">
            <Quote className="h-5 w-5 text-primaryCyan" />
            <p className="text-sm leading-6 text-textMuted">“{testimonial.quote}”</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
              {testimonial.name}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
