export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="glass-panel max-w-xl rounded-[2rem] border border-glassBorder p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primaryCyan">404</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-textMuted">
          The requested route does not exist. Use the navigation to return to the portfolio.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-full border border-primaryCyan/30 bg-primaryCyan/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-primaryCyan transition-colors hover:border-primaryCyan hover:bg-primaryCyan/20"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}
