import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ── Syntax Highlighting Tokens ────────────────────────────── */
const TOKEN = {
  keyword:  '#c792ea', // purple
  type:     '#82aaff', // blue
  string:   '#c3e88d', // green
  number:   '#f78c6c', // orange
  comment:  '#546e7a', // grey
  cyan:     '#00f0ff', // neon
  white:    '#cbd5e1', // slate-300
  operator: '#89ddff',
};

const SNIPPETS = [
  {
    id: 'python',
    lang: 'Python',
    filename: 'aadarsh.py',
    lines: [
      [{ t: 'comment', v: '# System Identity // v2.6' }],
      [{ t: 'keyword', v: 'class ' }, { t: 'type', v: 'Developer' }, { t: 'white', v: ':' }],
      [{ t: 'white', v: '    name = ' }, { t: 'string', v: '"Aadarsh Jha"' }],
      [{ t: 'white', v: '    role = ' }, { t: 'string', v: '"Full-Stack Dev"' }],
      [{ t: 'white', v: '    stack = [' }, { t: 'string', v: '"React"' }, { t: 'white', v: ', ' }, { t: 'string', v: '"Python"' }, { t: 'white', v: ']' }],
      [{ t: 'white', v: '    repos = ' }, { t: 'number', v: '24' }],
      [{ t: 'white', v: '    motto = ' }, { t: 'string', v: '"Undertake it."' }],
      [{ t: 'white', v: '    status = ' }, { t: 'string', v: '"Building 🚀"' }],
    ],
  },
  {
    id: 'typescript',
    lang: 'TypeScript',
    filename: 'profile.ts',
    lines: [
      [{ t: 'comment', v: '// Runtime Config // 2026' }],
      [{ t: 'keyword', v: 'export const ' }, { t: 'cyan', v: 'aadarsh' }, { t: 'white', v: ' = {' }],
      [{ t: 'type', v: '  alias' }, { t: 'white', v: ': ' }, { t: 'string', v: '"sudo-aadarsh"' }, { t: 'white', v: ',' }],
      [{ t: 'type', v: '  exp' }, { t: 'white', v: ': ' }, { t: 'string', v: '"2+ Years"' }, { t: 'white', v: ',' }],
      [{ t: 'type', v: '  projects' }, { t: 'white', v: ': ' }, { t: 'number', v: '20' }, { t: 'white', v: ',' }],
      [{ t: 'type', v: '  passions' }, { t: 'white', v: ': [' }, { t: 'string', v: '"AI"' }, { t: 'white', v: ', ' }, { t: 'string', v: '"Modern UI"' }, { t: 'white', v: '],' }],
      [{ t: 'type', v: '  mode' }, { t: 'white', v: ': ' }, { t: 'string', v: '"Cyberpunk"' }, { t: 'white', v: ',' }],
      [{ t: 'type', v: '  openToWork' }, { t: 'white', v: ': ' }, { t: 'keyword', v: 'true' }, { t: 'white', v: ',' }],
      [{ t: 'white', v: '};' }],
    ],
  },
];

function TokenLine({ tokens }) {
  return (
    <div className="leading-tight whitespace-pre truncate">
      {tokens.map((tok, i) => (
        <span key={i} style={{ color: TOKEN[tok.t] ?? TOKEN.white }}>
          {tok.v}
        </span>
      ))}
    </div>
  );
}

function SquareSnippetCard({ snippet, delay }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= snippet.lines.length) return;
    const t = setTimeout(() => setVisibleCount(c => c + 1), 75);
    return () => clearTimeout(t);
  }, [hasStarted, visibleCount, snippet.lines.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-[340px] sm:max-w-[350px] aspect-square mx-auto flex flex-col"
    >
      <div
        className="w-full h-full rounded-2xl border border-neon-cyan/20 bg-slate-950/80 backdrop-blur-xl flex flex-col overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.06)] hover:border-neon-cyan/45 hover:shadow-[0_0_30px_rgba(0,240,255,0.14)] transition-all duration-500 relative group"
      >
        {/* Subtle Cyber Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/40 pointer-events-none rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-cyan/40 pointer-events-none rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-cyan/40 pointer-events-none rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/40 pointer-events-none rounded-br-2xl"></div>

        {/* Header Bar */}
        <div
          className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 bg-white/[0.02]"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium tracking-tight">
              {snippet.filename}
            </span>
          </div>

          <span
            className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan font-semibold tracking-wider uppercase"
          >
            {snippet.lang}
          </span>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 p-3.5 sm:p-4 flex items-center overflow-hidden">
          <div className="w-full flex gap-3 font-mono text-[11px] sm:text-[12px]">
            {/* Line Numbers */}
            <div className="flex flex-col text-slate-600 select-none text-right min-w-[16px] space-y-1.5">
              {snippet.lines.map((_, i) => (
                <div key={i} className="leading-tight">{i + 1}</div>
              ))}
            </div>

            {/* Code Lines */}
            <div className="flex-1 flex flex-col space-y-1.5 overflow-hidden">
              {snippet.lines.map((tokens, i) => (
                <div
                  key={i}
                  style={{
                    opacity: i < visibleCount ? 1 : 0,
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  <TokenLine tokens={tokens} />
                </div>
              ))}

              {/* Blinking cursor */}
              {visibleCount < snippet.lines.length && (
                <span className="inline-block w-1.5 h-3 bg-neon-cyan animate-pulse shadow-[0_0_6px_#00f0ff]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CodeSnippets() {
  return (
    <section className="py-2 md:py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-items-center items-center">
          <SquareSnippetCard snippet={SNIPPETS[0]} delay={0.1} />
          <SquareSnippetCard snippet={SNIPPETS[1]} delay={0.25} />
        </div>
      </div>
    </section>
  );
}
