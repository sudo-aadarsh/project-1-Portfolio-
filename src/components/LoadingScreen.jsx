import React, { useEffect, useState, useRef } from 'react';

const BOOT_LINES = [
  { text: 'INITIALIZING NEURAL INTERFACE...', delay: 0 },
  { text: 'LOADING CORE MODULES............[OK]', delay: 100 },
  { text: 'ESTABLISHING SECURE LINK........[OK]', delay: 200 },
  { text: 'DECRYPTING DATA STREAMS..........[OK]', delay: 300 },
  { text: 'SYNCING QUANTUM GRID.............[OK]', delay: 400 },
  { text: 'BYPASSING FIREWALL...............[OK]', delay: 500 },
  { text: 'WELCOME TO THE GRID // USER: AADARSH', delay: 700 },
];

const GLITCH_CHARS = '!@#$%^&*<>?/\\|{}[]~ABCDEFGHIJKLMNabcdefghijk01011010';

function glitchText(original, progress) {
  return original
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' ';
      if (i < Math.floor(original.length * progress)) return char;
      return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    })
    .join('');
}

/* Rain column component */
function RainColumn({ x, delay, speed, chars }) {
  return (
    <div
      className="absolute top-0 text-[10px] font-mono leading-[14px] select-none pointer-events-none"
      style={{
        left: x,
        animation: `rain ${speed}s linear ${delay}s infinite`,
        color: '#00f0ff',
        opacity: 0.18,
        whiteSpace: 'nowrap',
      }}
    >
      {chars.map((c, i) => (
        <div key={i} style={{ opacity: i === chars.length - 1 ? 1 : (i / chars.length) * 0.8 }}>
          {c}
        </div>
      ))}
    </div>
  );
}

function MatrixRain() {
  const columns = useRef([]);
  if (columns.current.length === 0) {
    const count = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < count; i++) {
      const len = 10 + Math.floor(Math.random() * 20);
      columns.current.push({
        x: i * 20,
        delay: Math.random() * 4,
        speed: 3 + Math.random() * 4,
        chars: Array.from({ length: len }, () =>
          GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        ),
      });
    }
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {columns.current.map((col, i) => (
        <RainColumn key={i} {...col} />
      ))}
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [displayedLines, setDisplayedLines] = useState([]);
  const glitchRef = useRef(null);

  /* Reveal boot lines one by one */
  useEffect(() => {
    const timers = BOOT_LINES.map(({ text, delay }) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, text]);
      }, delay + 100)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Progress bar */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2.5;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  /* Scan line animation */
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(s => (s + 1) % 100);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  /* Glitch effect on visible lines */
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 80);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* Glitch-reveal displayed text */
  useEffect(() => {
    const reveals = visibleLines.map((line, idx) => {
      const steps = 12;
      let step = 0;
      const id = setInterval(() => {
        step++;
        setDisplayedLines(prev => {
          const next = [...prev];
          next[idx] = glitchText(line, step / steps);
          return next;
        });
        if (step >= steps) clearInterval(id);
      }, 40);
      return id;
    });
    return () => reveals.forEach(clearInterval);
  }, [visibleLines.length]); // eslint-disable-line

  /* Trigger exit when progress is 100 */
  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setExiting(true);
        setTimeout(onComplete, 500);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${
        exiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #001a2e 0%, #000d1a 50%, #000005 100%)',
      }}
    >
      {/* CSS keyframes for matrix rain */}
      <style>{`
        @keyframes rain {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(110vh); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.85; }
        }
        @keyframes pulse-cyan {
          0%, 100% { box-shadow: 0 0 8px #00f0ff, 0 0 20px #00f0ff44; }
          50%       { box-shadow: 0 0 18px #00f0ff, 0 0 40px #00f0ff66; }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes vhs-glitch {
          0%   { clip-path: inset(40% 0 61% 0); transform: translate(-4px, 0); }
          20%  { clip-path: inset(92% 0 1%  0); transform: translate(4px,  0); }
          40%  { clip-path: inset(43% 0 1%  0); transform: translate(-2px, 0); }
          60%  { clip-path: inset(25% 0 58% 0); transform: translate(2px,  0); }
          80%  { clip-path: inset(54% 0 7%  0); transform: translate(-4px, 0); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(0,    0); }
        }
      `}</style>

      {/* Matrix rain background */}
      <MatrixRain />

      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(transparent ${scanLine}%, rgba(0,240,255,0.03) ${scanLine}%, rgba(0,240,255,0.03) ${scanLine + 2}%, transparent ${scanLine + 2}%)`,
        }}
      />

      {/* CRT scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">

        {/* Top hex decoration */}
        <div className="flex gap-3 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rotate-45 border border-cyan-400"
              style={{
                animation: `flicker ${0.8 + i * 0.3}s ease-in-out infinite`,
                backgroundColor: i === 2 ? '#00f0ff' : 'transparent',
              }}
            />
          ))}
        </div>

        {/* Main title with glitch layers */}
        <div className="relative mb-2 select-none">
          {/* Glitch layer 1 */}
          {glitching && (
            <div
              className="absolute inset-0 font-mono font-black text-4xl md:text-6xl tracking-widest text-red-500"
              style={{ animation: 'vhs-glitch 0.1s steps(1) infinite', mixBlendMode: 'screen' }}
            >
              ENTER THE GRID
            </div>
          )}
          {/* Glitch layer 2 */}
          {glitching && (
            <div
              className="absolute inset-0 font-mono font-black text-4xl md:text-6xl tracking-widest text-blue-400"
              style={{
                animation: 'vhs-glitch 0.15s steps(1) infinite reverse',
                mixBlendMode: 'screen',
                transform: 'translate(3px, 0)',
              }}
            >
              ENTER THE GRID
            </div>
          )}
          {/* Main text */}
          <h1
            className="font-mono font-black text-4xl md:text-6xl tracking-widest text-center"
            style={{
              color: '#00f0ff',
              textShadow: '0 0 10px #00f0ff, 0 0 30px #00f0ff88, 0 0 60px #00f0ff44',
              animation: 'flicker 3s ease-in-out infinite',
            }}
          >
            ENTER THE GRID
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="font-mono text-xs tracking-[0.4em] mb-10 uppercase"
          style={{ color: 'rgba(0,240,255,0.5)' }}
        >
          ◈ NEURAL LINK ESTABLISHING ◈
        </p>

        {/* Boot terminal */}
        <div
          className="w-full rounded border mb-8 p-4 font-mono text-xs"
          style={{
            borderColor: 'rgba(0,240,255,0.25)',
            backgroundColor: 'rgba(0,240,255,0.03)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 0 20px rgba(0,240,255,0.08), inset 0 0 20px rgba(0,0,0,0.5)',
            minHeight: '160px',
          }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0,240,255,0.15)' }}>
            <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
            <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-70" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00f0ff', opacity: 0.7 }} />
            <span className="ml-2 text-[10px] tracking-widest" style={{ color: 'rgba(0,240,255,0.4)' }}>
              SYSTEM://BOOT_SEQUENCE
            </span>
          </div>

          {/* Boot log */}
          <div className="space-y-[3px]">
            {(displayedLines.length > 0 ? displayedLines : visibleLines).map((line, i) => (
              <div
                key={i}
                style={{
                  color: i === visibleLines.length - 1 ? '#00f0ff' : 'rgba(0,240,255,0.7)',
                  textShadow: i === visibleLines.length - 1 ? '0 0 6px #00f0ff' : 'none',
                  animation: 'slide-in 0.3s ease forwards',
                }}
              >
                <span style={{ color: 'rgba(0,240,255,0.35)' }}>&gt; </span>
                {line}
              </div>
            ))}
            {/* Blinking cursor */}
            {progress < 100 && (
              <span
                className="inline-block w-2 h-3 ml-1 align-middle"
                style={{
                  backgroundColor: '#00f0ff',
                  animation: 'blink 1s step-end infinite',
                  boxShadow: '0 0 6px #00f0ff',
                }}
              />
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full mb-3">
          <div className="flex justify-between font-mono text-[10px] mb-1" style={{ color: 'rgba(0,240,255,0.5)' }}>
            <span>LOADING SYSTEMS</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
          </div>
          <div
            className="w-full h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(0,240,255,0.1)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #006680, #00f0ff)',
                boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff88',
                animation: 'pulse-cyan 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Bottom hex decoration */}
        <div className="flex items-center gap-3 mt-6">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(0,240,255,0.4))' }} />
          <span className="font-mono text-[10px] tracking-widest" style={{ color: 'rgba(0,240,255,0.4)' }}>
            ◈ SYS:OK ◈
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(0,240,255,0.4))' }} />
        </div>
      </div>

      {/* Corner decorations */}
      {[
        'top-4 left-4 border-t border-l',
        'top-4 right-4 border-t border-r',
        'bottom-4 left-4 border-b border-l',
        'bottom-4 right-4 border-b border-r',
      ].map((classes, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 ${classes}`}
          style={{ borderColor: 'rgba(0,240,255,0.4)' }}
        />
      ))}
    </div>
  );
}
