"use client";

/**
 * PremiumHero.tsx — White Editorial Layout
 * - Pure white background
 * - No header / top bar
 * - Anime GIF top-right with float animation
 * - Kinetic headline, magnetic CTA, floating badges, double ticker
 */

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */
const TICKER_ITEMS = [
  "Web Design", "Mobile Apps", "Brand Identity",
  "SEO & Marketing", "UI/UX Strategy", "E-Commerce",
  "Logo Design", "Social Media", "Performance",
  "Web Design", "Mobile Apps", "Brand Identity",
  "SEO & Marketing", "UI/UX Strategy", "E-Commerce",
  "Logo Design", "Social Media", "Performance",
];

function Ticker({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="inline-flex gap-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-[10px] uppercase tracking-[0.3em] font-bold"
            style={{ color: reverse ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}
          >
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#E8C84A" }} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────── */
// Defined as const and cast to any in the component to ensure smooth playback and no TS errors
const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

function StatCard({ num, label, delay }: { num: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: SMOOTH_EASE as any }}
      className="flex flex-col gap-1"
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 4vw, 52px)",
          color: "#E8C84A",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {num}
      </span>
      <span
        className="uppercase"
        style={{ fontSize: "9px", letterSpacing: "0.22em", fontFamily: "'DM Sans', sans-serif", color: "rgba(0,0,0,0.38)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON
───────────────────────────────────────────── */
function MagneticButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

 return (
  <motion.button
    ref={btnRef}
    style={{ 
      x: sx, 
      y: sy, 
      background: "#E8C84A",
      color: "#0a0a0a",
      fontFamily: "'DM Sans', sans-serif",
      border: "none",
    }}
    onMouseMove={handleMove}
    onMouseLeave={handleLeave}
    onClick={onClick}
    whileTap={{ scale: 0.96 }}
    className="relative overflow-hidden px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] cursor-pointer"
  >
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ background: "#fff", transformOrigin: "center" }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </span>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   MAIN HERO
───────────────────────────────────────────── */
export default function PremiumHero() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setIsMounted(true); }, []);
  
  if (!isMounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap');
        .bebas     { font-family: 'Bebas Neue', sans-serif; }
        .dm        { font-family: 'DM Sans', sans-serif; }
        .cormorant { font-family: 'Cormorant Garamond', serif; }
        *, *::before, *::after { box-sizing: border-box; }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100svh", background: "#ffffff" }}
      >

        {/* ── NOISE GRAIN OVERLAY ── */}
        <div
          className="absolute inset-0 pointer-events-none z-50 opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px",
          }}
        />

        {/* ── FINE GRID ── */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── GOLD ORB (top-right ambient) ── */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none z-0"
          style={{
            top: "-10%", right: "-5%",
            width: "60vw", height: "60vw",
            maxWidth: 700, maxHeight: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,200,74,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* ── BLUE ORB (bottom-left ambient) ── */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute pointer-events-none z-0"
          style={{
            bottom: "5%", left: "-10%",
            width: "55vw", height: "55vw",
            maxWidth: 650,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(100,120,255,0.1) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        {/* ── ANIME GIF — top-right corner, floats vertically ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, x: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: [0, -22, 0],
          }}
          transition={{
            opacity: { duration: 1,   delay: 0.5 },
            scale:   { duration: 1,   delay: 0.5 },
            x:       { duration: 1,   delay: 0.5 },
            y:       { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute z-20 hidden lg:block"
          style={{ top: "6%", right: "0%" }}
        >
          <img
            src="/hero-right.gif"
            alt="Digital Animation"
            style={{
              width: "clamp(500px, 55vw, 800px)",
              height: "auto",
              mixBlendMode: "multiply",
              opacity: 0.92,
              filter: "drop-shadow(0 0 48px rgba(232,200,74,0.18))",
            }}
          />
        </motion.div>

        {/* ── HERO-LEFT GIF — Positioned below right of hero-right, sliding from corner ── */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: [0, 15, 0] 
          }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            x: { duration: 1.2, delay: 0.8, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
          className="absolute z-30 hidden lg:block"
          style={{ top: "15%", right: "-10%" }}
        >
          <img
            src="/hero-left.gif"
            alt="Digital Animation Secondary"
            style={{
              width: "clamp(200px, 27vw, 350px)",
              height: "auto",
              mixBlendMode: "multiply",
              opacity: 0.85,
              filter: "drop-shadow(0 0 30px rgba(0,0,0,0.1))",
            }}
          />
        </motion.div>

        {/* ── GHOST NUMBER WATERMARK ── */}
        <div
          className="absolute pointer-events-none select-none z-0 bebas leading-none"
          style={{
            top: "-10px",
            left: "-4px",
            fontSize: "clamp(140px, 28vw, 320px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.05)",
          }}
        >
          01
        </div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 flex flex-col px-6 md:px-12 lg:px-20 pt-10 md:pt-14 lg:pt-16">

          {/* Eyebrow line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-6 md:mb-3"
          >
           <span
              className="cormorant italic"
              style={{ fontSize: 16, letterSpacing: "0.1em", color: "rgba(0,0,0,0.95)" }}
            >
              #1 Digital Marketing Agency in India
            </span>
          </motion.div>

          {/* ── BIG HEADLINE ── */}
          <div className="relative">

            {/* Line 1 */}
            <div className="overflow-hidden" style={{ lineHeight: 0.87 }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.4, ease: SMOOTH_EASE as any }}
              >
                <span
                  className="bebas block"
                  style={{ fontSize: "clamp(42px, 8vw, 116px)", lineHeight: 0.87, color: "#0a0a0a" }}
                >
                  We Don't
                </span>
              </motion.div>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden -mt-1 md:-mt-2" style={{ lineHeight: 0.87 }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.55, ease: SMOOTH_EASE as any }}
                className="flex items-baseline gap-3 md:gap-5 flex-wrap"
              >
                <span
                  className="bebas"
                  style={{
                    fontSize: "clamp(42px, 8vw, 116px)",
                    lineHeight: 0.87,
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(0,0,0,0.25)",
                  }}
                >
                  Build
                </span>
                <span
                  className="bebas"
                  style={{ fontSize: "clamp(42px, 8vw, 116px)", lineHeight: 0.87, color: "#0a0a0a" }}
                >
                  Websites.
                </span>
              </motion.div>
            </div>

            {/* Line 3 — gold highlight */}
            <div className="overflow-hidden -mt-1 md:-mt-2" style={{ lineHeight: 0.87 }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.7, ease: SMOOTH_EASE as any }}
                className="flex items-baseline flex-wrap gap-x-3 md:gap-x-5"
              >
                <span
                  className="bebas"
                  style={{ fontSize: "clamp(42px, 8vw, 116px)", lineHeight: 0.87, color: "#0a0a0a" }}
                >
                  We Build
                </span>
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 1.2, ease: SMOOTH_EASE as any }}
                    className="absolute inset-0 origin-left"
                    style={{ background: "#f5c918", borderRadius: 4 }}
                  />
                  <span
                    className="bebas relative z-10 text-black"
                    style={{
                      fontSize: "clamp(42px, 8vw, 116px)",
                      lineHeight: 0.87,
                      paddingLeft: "0.07em",
                      paddingRight: "0.12em",
                    }}
                  >
                    BRANDS.
                  </span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* ── BOTTOM: desc + stats + CTA (left) | image card (right) ── */}
          <div className="relative mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pb-0">

            {/* LEFT */}
            <div className="flex flex-col gap-8">

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="dm max-w-md"
                style={{ fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: 1.78, fontWeight: 300, color: "rgba(0,0,0,0.48)" }}
              >
                From bold identities to seamless digital experiences — we build
                brand ecosystems that{" "}
                <em className="cormorant italic" style={{ fontSize: "1.1em", color: "rgba(0,0,0,0.68)" }}>
                  dominate markets
                </em>{" "}
                and connect deeply with audiences across India and beyond.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex items-start gap-8 md:gap-12"
              >
                <StatCard num="200+" label="Brands Launched" delay={1.0} />
                <div style={{ width: 1, height: 44, background: "rgba(0,0,0,0.1)", alignSelf: "center" }} />
                <StatCard num="98%" label="Client Retention" delay={1.1} />
                <div
                  style={{ width: 1, height: 44, background: "rgba(0,0,0,0.1)", alignSelf: "center" }}
                  className="hidden sm:block"
                />
                <div className="hidden sm:block">
                  <StatCard num="6×" label="Avg. ROI" delay={1.2} />
                </div>
              </motion.div>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.15 }}
                className="flex items-center gap-5 flex-wrap"
              >
                <MagneticButton onClick={() => router?.push("/contact")}>
                  Start a Project
                </MagneticButton>
              </motion.div>
            </div>

            {/* RIGHT: floating image card + badges */}
            <div className="relative flex items-end justify-center lg:justify-end min-h-[280px] md:min-h-[340px]">

              {/* Image card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -14, 0],
                }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.75 },
                  scale:   { duration: 0.9, delay: 0.75 },
                  y:       { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: "min(340px, 88vw)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(245,245,245,0.9)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop"
                  alt="Digital creative workspace"
                  style={{ width: "100%", height: 200, objectFit: "cover", display: "block", opacity: 0.82 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 52%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <span
                    className="dm font-semibold uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.85)" }}
                  >
                    Latest Work
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: 26, height: 26,
                      border: "1px solid rgba(232,200,74,0.45)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "#E8C84A", fontSize: 9 }}>✦</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Badge 1 — Top Rated */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="absolute top-4 dm font-bold uppercase"
                style={{
                  left: "-8px",
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "8px 14px",
                  borderRadius: 99,
                  background: "#E8C84A",
                  color: "#0a0a0a",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  boxShadow: "0 8px 28px rgba(232,200,74,0.32)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>✦</span>
                Top Rated Agency
              </motion.div>

              {/* Badge 2 — Revenue Up */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-16"
                style={{
                  left: "-8px",
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 14px",
                  borderRadius: 14,
                  background: "rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  backdropFilter: "blur(10px)",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: 26, height: 26,
                    background: "#4ade80",
                    flexShrink: 0,
                    color: "#0a0a0a",
                    fontWeight: 900,
                    fontSize: 11,
                  }}
                >
                  ↑
                </div>
                <div>
                  <p className="dm font-bold" style={{ fontSize: 11, color: "#0a0a0a" }}>Revenue Up</p>
                  <p className="dm" style={{ fontSize: 10, color: "rgba(0,0,0,0.4)" }}>Avg client growth</p>
                </div>
                <span className="dm font-black" style={{ fontSize: 15, color: "#4ade80", marginLeft: 6 }}>
                  +340%
                </span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── DOUBLE TICKER STRIP ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="relative z-20 mt-14 md:mt-20"
        >
          <div style={{ height: 1, background: "rgba(0,0,0,0.08)" }} />

          {/* Row 1 — black strip */}
          <div className="py-3.5" style={{ background: "#111111" }}>
            <Ticker />
          </div>
        </motion.div>

      </section>
    </>
  );
}