"use client";

import Card from "./ui/Card";
import { Clock3, ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    title: "How I Structure Production ML Projects",
    time: "6 min read",
    tag: "MLOps"
  },
  {
    title: "Designing RAG Apps That Actually Ship",
    time: "8 min read",
    tag: "Generative AI"
  },
  {
    title: "Computer Vision Systems for Industrial Inspection",
    time: "5 min read",
    tag: "Computer Vision"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="space-y-8">
      <div className="space-y-2">
        <h3 className="font-mono text-sm uppercase tracking-widest text-primaryCyan">
          // Blog
        </h3>
        <h2 className="font-heading text-3xl font-bold">Thought Leadership</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {POSTS.map((post) => (
          <Card key={post.title} className="space-y-5">
            <span className="inline-flex rounded-full border border-primaryCyan/20 bg-primaryCyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-primaryCyan">
              {post.tag}
            </span>
            <h4 className="font-heading text-xl font-semibold text-white">{post.title}</h4>
            <div className="flex items-center justify-between text-sm text-textMuted">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" /> {post.time}
              </span>
              <span className="inline-flex items-center gap-1 text-primaryCyan">
                Read <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
