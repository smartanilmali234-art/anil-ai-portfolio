"use client";

import { useState } from "react";
import { MessageSquareMore, X } from "lucide-react";

const QUICK_PROMPTS = [
  "Tell me about Anil's ML experience",
  "What projects are featured?",
  "Show contact details"
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 w-[min(92vw,22rem)] rounded-[1.5rem] border border-glassBorder bg-bgDeep/95 p-4 shadow-[0_0_60px_rgba(0,212,255,0.12)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-heading text-lg font-semibold text-white">Ask Anil AI</p>
              <p className="text-xs text-textMuted">Portfolio assistant demo</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-glassBorder bg-glass p-2 text-textMuted transition-colors hover:text-white"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="w-full rounded-2xl border border-glassBorder bg-glass px-4 py-3 text-left text-sm text-textMuted transition-colors hover:border-primaryCyan/40 hover:text-white"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-primaryCyan/30 bg-primaryCyan/15 text-primaryCyan shadow-[0_0_30px_rgba(0,212,255,0.18)] backdrop-blur transition-transform hover:scale-105"
        aria-label="Open assistant"
      >
        <MessageSquareMore className="h-5 w-5" />
      </button>
    </div>
  );
}
