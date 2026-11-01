import { motion, useReducedMotion } from 'framer-motion';

/**
 * Spark, the KidSpark mascot: waves hello, blinks and floats gently.
 * Built from three transparent layers (arm, body, mouth) in /public/spark/.
 * All positions are in the 1191 x 1138 artwork space, so it scales to any width:
 * just set the width with className (e.g. "w-40").
 */
const W = 1191;
const H = 1138;

export default function SparkMascot({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative select-none ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
      role="img"
      aria-label="Spark, the KidSpark star mascot, waving hello"
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <style>{`
        @keyframes spark-blink { 0%, 92%, 100% { transform: scaleY(0); } 95.5% { transform: scaleY(1); } }
        @keyframes spark-line  { 0%, 93%, 100% { opacity: 0; } 94.5%, 97% { opacity: 1; } }
        .spark-lid  { fill: #FDDB06; transform-box: fill-box; transform-origin: 50% 0%; transform: scaleY(0); animation: spark-blink 5s infinite; }
        .spark-line { fill: none; stroke: #4A1D7A; stroke-width: 9; stroke-linecap: round; opacity: 0; animation: spark-line 5s infinite; }
        @media (prefers-reduced-motion: reduce) { .spark-lid, .spark-line { animation: none; } }
      `}</style>

      {/* waving arm (behind the body), pivots at the shoulder */}
      <motion.img
        src="/spark/arm.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: `${(254 / W) * 100}% ${(611 / H) * 100}%` }}
        animate={reduce ? { rotate: -4 } : { rotate: [-4, -17, 9, -17, 9, -17, 9, -4, -4] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.09, 0.2, 0.31, 0.42, 0.53, 0.64, 0.75, 1] }}
      />

      <img src="/spark/body.webp" alt="" aria-hidden="true" draggable={false} className="absolute inset-0 w-full h-full" />

      {/* blinking eyelids */}
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
        <ellipse className="spark-lid" cx="496.5" cy="534" rx="82.5" ry="89" />
        <ellipse className="spark-lid" cx="764.5" cy="513" rx="82.5" ry="89" />
        <path className="spark-line" d="M443 566 A54 11 0 0 0 551 566" />
        <path className="spark-line" d="M711 545 A54 11 0 0 0 819 545" />
      </svg>

      <img
        src="/spark/mouth.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute"
        style={{ left: `${(543 / W) * 100}%`, top: `${(596 / H) * 100}%`, width: `${(194 / W) * 100}%`, height: `${(157 / H) * 100}%` }}
      />
    </motion.div>
  );
}
