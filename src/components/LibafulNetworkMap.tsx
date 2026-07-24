import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bath, Sparkles, School, Leaf, Car, FileText, 
  Heart, Stethoscope, Mic, MapPin, Hospital, 
  Flag, Home, Cake, Shirt, HelpCircle, ArrowRight,
  Play, Square, RefreshCw, Volume2, Info
} from "lucide-react";
import { Facility } from "../types";
import { facilitiesData } from "../data";

interface LibafulNetworkMapProps {
  onSelectFacility: (id: string) => void;
  activeFacilityId: string;
}

// ==========================================
// CUTE HIGH-FIDELITY CUSTOM SVG ILLUSTRATIONS
// ==========================================

// 1. Origami Crane (Paper Crane)
const OrigamiCrane: React.FC = () => (
  <motion.svg 
    width="32" height="32" viewBox="0 0 64 64" fill="none"
    animate={{ 
      rotate: [-8, 8, -8], 
      y: [-2, 3, -2],
      scale: [0.95, 1.05, 0.95]
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="drop-shadow-sm"
  >
    <path d="M12 40 L32 20 L52 40 L32 45 Z" fill="#E6EEF8" stroke="#8CA4C2" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M32 20 L40 38 L32 45 Z" fill="#D2E0F2" stroke="#8CA4C2" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M32 20 L24 38 L32 45 Z" fill="#F0F5FA" stroke="#8CA4C2" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Wing */}
    <motion.path 
      d="M32 45 L48 10 L40 38 Z" fill="#B9CDE5" stroke="#8CA4C2" strokeWidth="1.5" strokeLinejoin="round"
      animate={{ rotateY: [0, 40, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "32px 45px" }}
    />
    {/* Head/Beak */}
    <path d="M12 40 L6 42 L10 37 Z" fill="#8CA4C2" />
  </motion.svg>
);

// 2. Red Knitted Scarf & Needles
const KnittedScarf: React.FC = () => (
  <motion.div
    animate={{ rotate: [-4, 4, -4], y: [0, 1.5, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-8 h-8 flex items-center justify-center"
  >
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Crossed Needles */}
      <line x1="8" y1="8" x2="56" y2="56" stroke="#A89481" strokeWidth="3" strokeLinecap="round" />
      <circle cx="8" cy="8" r="3" fill="#D4AF37" />
      <line x1="56" y1="8" x2="8" y2="56" stroke="#A89481" strokeWidth="3" strokeLinecap="round" />
      <circle cx="56" cy="8" r="3" fill="#D4AF37" />
      {/* Red Scarf Body */}
      <path d="M18 28 C22 24, 42 24, 46 28 C50 32, 46 44, 38 46 C30 48, 22 42, 22 36 Z" fill="#DA3B3B" stroke="#9E1B1B" strokeWidth="1.5" />
      {/* Fringe / Tail */}
      <path d="M22 36 L16 52 C15 55, 18 55, 20 52 L26 38" fill="#B52121" stroke="#9E1B1B" strokeWidth="1.5" />
      <path d="M25 38 L25 54 C25 56, 28 56, 28 54 L29 38" fill="#DA3B3B" stroke="#9E1B1B" strokeWidth="1.5" />
      {/* Knitted Pattern stripes */}
      <path d="M24 28 Q32 32 40 28" stroke="#FFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <path d="M26 34 Q32 38 38 34" stroke="#FFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  </motion.div>
);

// 3. Cozy Office Building
const CozyOffice: React.FC = () => (
  <motion.svg 
    width="32" height="32" viewBox="0 0 64 64" fill="none"
    animate={{ scale: [0.96, 1.04, 0.96] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    className="drop-shadow-sm"
  >
    {/* Ground */}
    <rect x="4" y="52" width="56" height="4" rx="2" fill="#E2E8F0" />
    {/* Main Block */}
    <rect x="14" y="20" width="36" height="32" rx="3" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
    {/* Roof */}
    <path d="M10 20 L32 6 L54 20 Z" fill="#64748B" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
    {/* Windows */}
    <rect x="20" y="26" width="8" height="8" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="36" y="26" width="8" height="8" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="20" y="38" width="8" height="8" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
    <rect x="36" y="38" width="8" height="8" rx="1" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
    {/* Entrance Door */}
    <rect x="28" y="44" width="8" height="8" rx="1" fill="#475569" />
  </motion.svg>
);

// 4. Strawberry Cake & Dango
const CakeDango: React.FC = () => (
  <motion.div
    animate={{ y: [0, -2, 0], rotate: [-2, 2, -2] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-8 h-8 flex items-center justify-center"
  >
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Plate */}
      <ellipse cx="32" cy="48" rx="26" ry="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
      {/* Strawberry Shortcake Slice */}
      <path d="M12 40 L38 24 L50 40 Z" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <path d="M12 40 L38 24 L38 32 L12 44 Z" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Cream & Jam Layer */}
      <path d="M12 42 L38 28 L38 30 L12 44 Z" fill="#E11D48" />
      {/* Sponge base layer */}
      <path d="M12 44 L38 32 L38 40 L12 48 Z" fill="#FEF08A" opacity="0.9" />
      {/* Cream swirl on top */}
      <circle cx="34" cy="24" r="5" fill="#FFF" />
      {/* Strawberry on top */}
      <path d="M34 16 C34 16, 38 21, 34 23 C30 23, 34 16, 34 16 Z" fill="#EF4444" />
      
      {/* Three Colored Dango on Stick */}
      <g transform="translate(14, 18) rotate(45)">
        <line x1="0" y1="40" x2="0" y2="0" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pink Ball */}
        <circle cx="0" cy="12" r="6" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        {/* White Ball */}
        <circle cx="0" cy="23" r="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        {/* Green Ball */}
        <circle cx="0" cy="34" r="6" fill="#4ADE80" stroke="#16A34A" strokeWidth="1" />
      </g>
    </svg>
  </motion.div>
);

// 5. Clothesline (Shirt & Pants)
const Clothesline: React.FC = () => (
  <motion.div
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-10 h-10 flex items-center justify-center"
    style={{ transformOrigin: "center top" }}
  >
    <svg width="40" height="40" viewBox="0 0 80 80" fill="none" className="drop-shadow-sm">
      {/* Rope line */}
      <path d="M5 25 Q40 35 75 25" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Green T-Shirt */}
      <g transform="translate(18, 22) scale(0.7)">
        {/* Clothes Hanger */}
        <path d="M15 5 Q20 0 25 5" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Shirt body */}
        <path d="M5 10 L15 10 L12 25 L28 25 L25 10 L35 10 L40 20 L36 24 L30 18 L30 42 L10 42 L10 18 L4 24 L0 20 Z" fill="#86EFAC" stroke="#16A34A" strokeWidth="2" strokeLinejoin="round" />
      </g>

      {/* Blue Pants */}
      <g transform="translate(45, 24) scale(0.68)">
        {/* Hanger */}
        <path d="M15 5 Q20 0 25 5" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Pants body */}
        <path d="M6 10 L34 10 L32 48 L21 48 L19 25 L17 25 L15 48 L4 48 Z" fill="#93C5FD" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  </motion.div>
);

// 6. Welfare Bathtub with Sparkling Bubbles
const WelfareBathtub: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; cx: number; cy: number; r: number; delay: number }>>([]);

  useEffect(() => {
    // Generate static bubbles to animate
    setBubbles(
      Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        cx: 12 + Math.random() * 24,
        cy: 22 + Math.random() * 12,
        r: 1.5 + Math.random() * 2,
        delay: i * 0.8
      }))
    );
  }, []);

  return (
    <motion.div
      animate={{ y: [0, 1.5, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
        {/* Outer Wooden Tub */}
        <path d="M8 28 L56 28 L50 54 L14 54 Z" fill="#D97706" stroke="#92400E" strokeWidth="2" strokeLinejoin="round" />
        {/* Metal bands around the tub */}
        <path d="M10 36 Q32 38 54 36" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M12 46 Q32 48 52 46" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Inside Sparkling Water */}
        <ellipse cx="32" cy="28" rx="22" ry="5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
        
        {/* Floating Bubble Circles */}
        {bubbles.map((b) => (
          <motion.circle
            key={b.id}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill="none"
            stroke="#BAE6FD"
            strokeWidth="1"
            animate={{ 
              y: [0, -18, -25], 
              opacity: [0, 0.9, 0],
              scale: [0.7, 1.2, 0.4]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: b.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// 7. Red Vacuum Cleaner
const RedVacuum: React.FC = () => (
  <motion.svg 
    width="32" height="32" viewBox="0 0 64 64" fill="none"
    animate={{ 
      x: [-0.6, 0.6, -0.6], 
      y: [-0.3, 0.3, -0.3],
      rotate: [-1, 1, -1] 
    }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
    className="drop-shadow-sm"
  >
    {/* Body */}
    <rect x="18" y="24" width="32" height="20" rx="10" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
    {/* Black Wheels */}
    <circle cx="26" cy="46" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="26" cy="46" r="2.5" fill="#94A3B8" />
    <circle cx="42" cy="46" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="42" cy="46" r="2.5" fill="#94A3B8" />
    
    {/* Hose/Cord */}
    <path d="M44 30 C55 24, 46 8, 14 18" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Floor Brush */}
    <rect x="8" y="14" width="12" height="5" rx="1.5" fill="#475569" />
  </motion.svg>
);

// 8. Classical Clock Tower School
const ClassicalSchool: React.FC = () => (
  <motion.svg 
    width="32" height="32" viewBox="0 0 64 64" fill="none"
    animate={{ scale: [0.97, 1.03, 0.97] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="drop-shadow-sm"
  >
    <rect x="4" y="52" width="56" height="4" rx="2" fill="#CBD5E1" />
    {/* Building Block */}
    <rect x="10" y="24" width="44" height="28" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.8" />
    {/* Clock Tower Center */}
    <rect x="24" y="10" width="16" height="15" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.8" />
    {/* Pointy Roof */}
    <path d="M22 10 L32 2 L42 10 Z" fill="#475569" stroke="#334155" strokeWidth="1.8" />
    {/* Small clock face */}
    <circle cx="32" cy="18" r="4" fill="#FFF" stroke="#64748B" strokeWidth="1" />
    {/* Animated hands */}
    <motion.line 
      x1="32" y1="18" x2="32" y2="15.5" 
      stroke="#1E293B" strokeWidth="1" strokeLinecap="round"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "32px 18px" }}
    />
    <motion.line 
      x1="32" y1="18" x2="34" y2="18" 
      stroke="#1E293B" strokeWidth="0.8" strokeLinecap="round"
      animate={{ rotate: [0, 30] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "32px 18px" }}
    />
    {/* Tiny Entrance & Windows */}
    <rect x="28" y="44" width="8" height="8" rx="1" fill="#475569" />
    <rect x="16" y="32" width="6" height="6" rx="1" fill="#FFF" stroke="#94A3B8" />
    <rect x="42" y="32" width="6" height="6" rx="1" fill="#FFF" stroke="#94A3B8" />
  </motion.svg>
);

// 9. Vegetable Garden Bed & Hoe
const GardenBed: React.FC = () => (
  <motion.div
    animate={{ y: [0, 1.2, 0] }}
    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-8 h-8 flex items-center justify-center"
  >
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Brown Mounds of Soil */}
      <path d="M8 44 C8 32, 28 32, 28 44 Z" fill="#78350F" opacity="0.85" />
      <path d="M30 44 C30 32, 50 32, 50 44 Z" fill="#78350F" opacity="0.85" />
      <rect x="4" y="42" width="56" height="6" rx="2" fill="#451A03" />

      {/* Sprouts growing */}
      <motion.path 
        d="M18 36 Q18 28 14 26" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" fill="none"
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "18px 36px" }}
      />
      <motion.path 
        d="M18 36 Q22 28 24 29" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" fill="none"
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "18px 36px" }}
      />
      
      <motion.path 
        d="M40 36 Q40 28 36 26" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" fill="none"
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ transformOrigin: "40px 36px" }}
      />
      <motion.path 
        d="M40 36 Q44 28 46 29" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" fill="none"
        animate={{ scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{ transformOrigin: "40px 36px" }}
      />

      {/* Rake Tool */}
      <g transform="translate(42, 10) rotate(-15)">
        <line x1="0" y1="0" x2="0" y2="34" stroke="#78350F" strokeWidth="1.8" />
        <path d="M-6 34 L6 34 L6 38" stroke="#475569" strokeWidth="1.8" fill="none" />
        <line x1="-3" y1="34" x2="-3" y2="38" stroke="#475569" strokeWidth="1.5" />
        <line x1="0" y1="34" x2="0" y2="38" stroke="#475569" strokeWidth="1.5" />
        <line x1="3" y1="34" x2="3" y2="38" stroke="#475569" strokeWidth="1.5" />
      </g>
    </svg>
  </motion.div>
);

// 10. Welfare Transport Silver Van
const WelfareVan: React.FC = () => (
  <motion.div
    animate={{ 
      y: [0, -2, 0], 
      rotate: [0, 1.5, -1.5, 0] 
    }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-10 h-10 flex items-center justify-center"
  >
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Car Body (Silver grey) */}
      <path d="M10 38 L14 22 C15 18, 20 18, 24 18 L48 18 C52 18, 54 22, 54 26 L54 38 L54 44 L10 44 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2" strokeLinejoin="round" />
      {/* Bumper */}
      <rect x="6" y="42" width="52" height="4" rx="2" fill="#334155" />
      
      {/* Windows (Light blue) */}
      <path d="M16 22 L24 22 L24 32 L13 32 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" />
      <path d="M28 22 L44 22 L44 32 L28 32 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" />
      <path d="M48 22 L52 24 L52 32 L48 32 Z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" />
      
      {/* Yellow Headlight */}
      <circle cx="10" cy="40" r="2.5" fill="#FBBF24" />
      
      {/* Spinning Wheels */}
      <circle cx="20" cy="46" r="6.5" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
      <motion.line 
        x1="14" y1="46" x2="26" y2="46" stroke="#94A3B8" strokeWidth="1.2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "20px 46px" }}
      />
      
      <circle cx="44" cy="46" r="6.5" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
      <motion.line 
        x1="38" y1="46" x2="50" y2="46" stroke="#94A3B8" strokeWidth="1.2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "44px 46px" }}
      />
    </svg>
  </motion.div>
);

// 11. Golf Putting Green & Flag
const GolfGreen: React.FC = () => (
  <motion.div
    animate={{ scale: [0.98, 1.02, 0.98] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-8 h-8 flex items-center justify-center"
  >
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Turf Green */}
      <ellipse cx="32" cy="46" rx="26" ry="10" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
      <ellipse cx="32" cy="46" rx="20" ry="7" fill="#22C55E" />
      
      {/* Hole */}
      <ellipse cx="44" cy="46" rx="3" ry="1.5" fill="#14532D" />
      
      {/* Tiny Golf Ball */}
      <circle cx="36" cy="48" r="1.5" fill="#FFF" />
      
      {/* Flagpole */}
      <line x1="20" y1="44" x2="20" y2="12" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      {/* Triangular Red Flag fluttering */}
      <motion.path 
        d="M20 12 L36 18 L20 24 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="1"
        animate={{ scaleX: [1, 0.7, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "20px 18px" }}
      />

      {/* Golf Club */}
      <g transform="translate(14, 24) rotate(20)">
        <line x1="0" y1="0" x2="16" y2="24" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M14 23 L19 25 L17 27 Z" fill="#475569" />
      </g>
    </svg>
  </motion.div>
);

// 12. Microphone with Floating Music Notes
const MicrophoneNotes: React.FC = () => {
  const [notes, setNotes] = useState<Array<{ id: number; char: string; color: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const chars = ["♪", "♫", "♩", "♬"];
    const colors = ["text-rose-500", "text-sky-500", "text-emerald-500", "text-amber-500"];
    setNotes(
      Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        char: chars[i % chars.length],
        color: colors[i % colors.length],
        left: 5 + Math.random() * 20,
        delay: i * 0.7
      }))
    );
  }, []);

  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* Microphone SVG */}
      <motion.svg 
        width="28" height="28" viewBox="0 0 64 64" fill="none"
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="drop-shadow-sm"
      >
        {/* Handle */}
        <line x1="32" y1="34" x2="48" y2="54" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        {/* Windscreen / Metallic Grille */}
        <rect x="18" y="14" width="18" height="22" rx="9" fill="#94A3B8" stroke="#475569" strokeWidth="2.5" />
        {/* Grille mesh patterns */}
        <line x1="27" y1="14" x2="27" y2="36" stroke="#475569" strokeWidth="1" />
        <line x1="18" y1="25" x2="36" y2="25" stroke="#475569" strokeWidth="1" />
        <rect x="22" y="32" width="8" height="4" fill="#334155" />
      </motion.svg>

      {/* Floating Notes */}
      {notes.map((n) => (
        <motion.span
          key={n.id}
          className={`absolute text-xs font-bold pointer-events-none select-none ${n.color}`}
          style={{ left: `${n.left}px`, top: "0px" }}
          animate={{ 
            y: [0, -16, -26], 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.7],
            x: [0, Math.sin(n.id) * 6, 0]
          }}
          transition={{ 
            duration: 2.2, 
            repeat: Infinity, 
            delay: n.delay,
            ease: "easeOut"
          }}
        >
          {n.char}
        </motion.span>
      ))}
    </div>
  );
};

// 13. Clinic / Red Cross Hospital
const ClinicCross: React.FC = () => (
  <motion.svg 
    width="32" height="32" viewBox="0 0 64 64" fill="none"
    animate={{ scale: [0.97, 1.03, 0.97] }}
    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
    className="drop-shadow-sm"
  >
    <rect x="4" y="52" width="56" height="4" rx="2" fill="#E2E8F0" />
    {/* Base Building */}
    <rect x="12" y="20" width="40" height="32" rx="3" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.8" />
    <path d="M8 20 L32 8 L56 20 Z" fill="#94A3B8" stroke="#475569" strokeWidth="1.8" strokeLinejoin="round" />
    
    {/* Red Cross Signboard */}
    <rect x="24" y="26" width="16" height="16" rx="2" fill="#FFF" stroke="#EF4444" strokeWidth="1.5" />
    <path d="M32 29 L32 39 M27 34 L37 34" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    
    {/* Windows & Doors */}
    <rect x="18" y="42" width="8" height="10" fill="#475569" />
    <rect x="38" y="42" width="8" height="10" fill="#475569" />
  </motion.svg>
);

// 14. Charcoal Barbecue Grill
const BbqGrill: React.FC = () => (
  <motion.div
    animate={{ y: [0, 1, 0] }}
    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-8 h-8 flex items-center justify-center"
  >
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" className="drop-shadow-sm">
      {/* Tripod Legs */}
      <line x1="32" y1="40" x2="16" y2="58" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="40" x2="48" y2="58" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="40" x2="32" y2="58" stroke="#334155" strokeWidth="2" />
      
      {/* Lower Grill Bowl (Red) */}
      <path d="M12 30 C12 42, 52 42, 52 30 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
      {/* Top wire mesh */}
      <line x1="12" y1="30" x2="52" y2="30" stroke="#E2E8F0" strokeWidth="2.5" />
      
      {/* Delicious items on grill */}
      <ellipse cx="24" cy="29" rx="5" ry="1.5" fill="#D97706" />
      <ellipse cx="40" cy="29" rx="4" ry="1.2" fill="#B45309" />
      
      {/* Steam drift */}
      <motion.path 
        d="M24 25 Q22 18 26 14" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" fill="none"
        animate={{ 
          y: [0, -6], 
          opacity: [0, 0.8, 0] 
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.path 
        d="M38 25 Q40 19 36 15" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" fill="none"
        animate={{ 
          y: [0, -6], 
          opacity: [0, 0.8, 0] 
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
      />
    </svg>
  </motion.div>
);


// ==========================================
// CORE COMPONENT
// ==========================================
export const LibafulNetworkMap: React.FC<LibafulNetworkMapProps> = ({ 
  onSelectFacility, 
  activeFacilityId 
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Define nodes matching coordinates on physical hand-drawn card
  const nodes = [
    {
      id: "honoka",
      name: "ほのか",
      category: "訪問介護・タクシー",
      left: "18%",
      top: "40%",
      color: "bg-[#FAF9F6] border-[#E5E2D9] text-[#2D3327] hover:border-[#5A5A40]",
      iconColor: "text-[#5A5A40]",
      lineColor: "#5A5A40",
      delay: 0.1,
      floatingIcons: [
        { Icon: Heart, size: 14, x: -24, y: -24, color: "text-rose-500" },
        { Icon: Stethoscope, size: 14, x: -28, y: 16, color: "text-[#7A7A5A]" }
      ]
    },
    {
      id: "tsunagi",
      name: "つなぎ",
      category: "放課後等デイ支援",
      left: "50%",
      top: "16%",
      color: "bg-[#FAF9F6] border-[#E5E2D9] text-[#2D3327] hover:border-[#5A5A40]",
      iconColor: "text-[#5A5A40]",
      lineColor: "#7A7A5A",
      delay: 0.2,
      floatingIcons: [
        { Icon: Cake, size: 14, x: -24, y: -20, color: "text-amber-500" },
        { Icon: Shirt, size: 14, x: 24, y: -20, color: "text-sky-500" }
      ]
    },
    {
      id: "kizuki",
      name: "きづき",
      category: "多機能デイサービス",
      left: "82%",
      top: "40%",
      color: "bg-[#FAF9F6] border-[#E5E2D9] text-[#2D3327] hover:border-[#5A5A40]",
      iconColor: "text-[#5A5A40]",
      lineColor: "#5A5A40",
      delay: 0.3,
      floatingIcons: [
        { Icon: Bath, size: 14, x: 24, y: -24, color: "text-sky-500" },
        { Icon: Sparkles, size: 14, x: 28, y: 16, color: "text-amber-500" }
      ]
    },
    {
      id: "akari",
      name: "あかり",
      category: "高齢者支援・サロン",
      left: "70%",
      top: "78%",
      color: "bg-[#FAF9F6] border-[#E5E2D9] text-[#2D3327] hover:border-[#5A5A40]",
      iconColor: "text-[#5A5A40]",
      lineColor: "#7A7A5A",
      delay: 0.4,
      floatingIcons: [
        { Icon: Leaf, size: 14, x: 24, y: 24, color: "text-emerald-500" },
        { Icon: Car, size: 14, x: 28, y: -16, color: "text-zinc-500" }
      ]
    },
    {
      id: "wagaya",
      name: "わがや",
      category: "地域密着型デイ",
      left: "30%",
      top: "78%",
      color: "bg-[#FAF9F6] border-[#E5E2D9] text-[#2D3327] hover:border-[#5A5A40]",
      iconColor: "text-[#5A5A40]",
      lineColor: "#5A5A40",
      delay: 0.5,
      floatingIcons: [
        { Icon: Flag, size: 14, x: -24, y: 20, color: "text-rose-500" },
        { Icon: Car, size: 14, x: 24, y: 20, color: "text-zinc-500" }
      ]
    }
  ];

  // Helper to parse coordinate percentages to numerical values for SVG drawing
  const getCoords = (pctStr: string) => parseFloat(pctStr.replace("%", ""));

  // Auto-play timer logic
  useEffect(() => {
    if (isPlaying) {
      // Find matching index of current active facility
      const activeIdx = nodes.findIndex(n => n.id === activeFacilityId);
      setCurrentIndex(activeIdx >= 0 ? activeIdx : 0);

      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIdx) => {
          const nextIdx = (prevIdx + 1) % nodes.length;
          onSelectFacility(nodes[nextIdx].id);
          return nextIdx;
        });
      }, 4800); // Transitions every 4.8 seconds
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, activeFacilityId, onSelectFacility]);

  // Toggle Play / Stop
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Main Map Arena */}
      <div className="relative w-full max-w-xl mx-auto aspect-[5/4.2] select-none p-4 rounded-3xl bg-[#FAF9F6] border border-[#E5E2D9] shadow-md overflow-hidden">
        
        {/* Soft elegant background grids & subtle radial patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#E5E2D9_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-[#E5E2D9]/30 rounded-full border-dashed pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-[#E5E2D9]/40 rounded-full border-dashed pointer-events-none" />

        {/* ==================================================
            FLOATING NATURAL ILLUSTRATIONS (From Hand-drawn Photo)
            ================================================== */}
        
        {/* 1. Origami Crane (near top-left) */}
        <div className="absolute left-[10%] top-[43%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <OrigamiCrane />
        </div>

        {/* 2. Red Knitted Scarf (between honoka and tsunagi) */}
        <div className="absolute left-[29%] top-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <KnittedScarf />
        </div>

        {/* 3. Cozy Office (near top center-left) */}
        <div className="absolute left-[40%] top-[26%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <CozyOffice />
        </div>

        {/* 4. Strawberry Cake & Dango (between tsunagi and kizuki) */}
        <div className="absolute left-[62%] top-[23%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <CakeDango />
        </div>

        {/* 5. Clothesline with Shirts (near top-right) */}
        <div className="absolute left-[72%] top-[24%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <Clothesline />
        </div>

        {/* 6. Wooden Bathtub (near kizuki) */}
        <div className="absolute left-[89%] top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <WelfareBathtub />
        </div>

        {/* 7. Red Vacuum Cleaner (near clock tower) */}
        <div className="absolute left-[89%] top-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <RedVacuum />
        </div>

        {/* 8. Clock Tower School Building (near akari) */}
        <div className="absolute left-[89%] top-[65%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <ClassicalSchool />
        </div>

        {/* 9. Vegetable Garden Bed & Hoe (between akari and wagaya) */}
        <div className="absolute left-[74%] top-[79%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <GardenBed />
        </div>

        {/* 10. Welfare Transport Silver Van */}
        <div className="absolute left-[50%] top-[78%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <WelfareVan />
        </div>

        {/* 11. Golf Green & Red Flag (bottom center-left) */}
        <div className="absolute left-[38%] top-[81%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <GolfGreen />
        </div>

        {/* 13. Hospital / Clinic with Red Cross (bottom-left) */}
        <div className="absolute left-[11%] top-[63%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <ClinicCross />
        </div>

        {/* 14. Charcoal BBQ Grill (near center-left) */}
        <div className="absolute left-[16%] top-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <BbqGrill />
        </div>


        {/* Background radial connections SVG */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          {/* Animated Connecting Dotted Lines */}
          {nodes.map((node) => {
            const targetX = getCoords(node.left);
            const targetY = getCoords(node.top);
            const isHovered = hoveredNode === node.id;
            const isActive = activeFacilityId === node.id;

            return (
              <g key={`line-${node.id}`}>
                {/* Active/Hovered Glow Backing Line */}
                {(isHovered || isActive) && (
                  <motion.line
                    x1={50}
                    y1={50}
                    x2={targetX}
                    y2={targetY}
                    stroke="#5A5A40"
                    strokeWidth={2.5}
                    opacity={0.2}
                    initial={{ strokeWidth: 2.5 }}
                    animate={{ strokeWidth: [2.5, 6, 2.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
                
                {/* Flowing animated dotted line representation - represents communication / traffic */}
                <line
                  x1={50}
                  y1={50}
                  x2={targetX}
                  y2={targetY}
                  stroke={isHovered || isActive ? "#5A5A40" : "#E5E2D9"}
                  strokeWidth={isHovered || isActive ? 2 : 1.2}
                  strokeDasharray="4 4"
                />

                {/* Animated traveling signal pulse (Moving dot representing energetic flow) */}
                <motion.circle
                  r={isHovered || isActive ? 2.5 : 1.5}
                  fill={isHovered || isActive ? "#5A5A40" : "#A3A199"}
                  initial={{ cx: 50, cy: 50 }}
                  animate={{ 
                    cx: [50, targetX],
                    cy: [50, targetY]
                  }}
                  transition={{ 
                    duration: isHovered || isActive ? 1.6 : 3.2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Central "Libaful" Cloud Node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {/* Yellow cloud visual matching exactly the photo's Libafuru cloud */}
          <div className="relative group cursor-pointer" onClick={() => handleTogglePlay()}>
            {/* Pulsing ring */}
            <span className="absolute -inset-2 rounded-full bg-amber-300/30 blur-md group-hover:bg-amber-300/50 animate-pulse transition duration-300" />
            
            <motion.div 
              className="relative w-28 h-20 md:w-32 md:h-24 bg-amber-300 border-[3.5px] border-amber-400/90 text-[#2D3327] font-serif font-bold text-center flex flex-col items-center justify-center shadow-lg rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isPlaying ? {
                scale: [1, 1.04, 1],
                borderRadius: [
                  "50% 50% 50% 50% / 40% 40% 60% 60%",
                  "52% 48% 54% 46% / 42% 38% 62% 58%",
                  "50% 50% 50% 50% / 40% 40% 60% 60%"
                ]
              } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl md:text-3xl italic tracking-wide font-normal select-none font-serif leading-none text-[#2D3327]/90 pl-1">
                Libafuru
              </span>
              <span className="text-[9px] md:text-[10px] font-sans font-bold tracking-[0.15em] text-amber-800/80 mt-1.5 select-none">
                リバフル
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* House Nodes arranged in an Oval Radial Circle */}
        {nodes.map((node, index) => {
          const isActive = activeFacilityId === node.id;
          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              className="absolute z-10"
              style={{ 
                left: node.left, 
                top: node.top,
                transform: "translate(-50%, -50%)"
              }}
            >
              {/* Animated floating icons around the active/hovered node */}
              <AnimatePresence>
                {(isHovered || isActive) && node.floatingIcons.map((fIcon, fIndex) => {
                  const IconComp = fIcon.Icon;
                  return (
                    <motion.div
                      key={`float-${node.id}-${fIndex}`}
                      className={`absolute pointer-events-none p-1 rounded-full bg-white shadow-md border border-zinc-100 ${fIcon.color} z-30`}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
                      animate={{ 
                        opacity: 1, 
                        x: fIcon.x, 
                        y: fIcon.y + Math.sin(Date.now() / 800 + index * 10) * 3, 
                        scale: 1.1 
                      }}
                      exit={{ opacity: 0, scale: 0.2 }}
                      transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    >
                      <IconComp size={fIcon.size} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* The House Node itself */}
              <motion.div
                className={`cursor-pointer group relative flex flex-col items-center justify-center p-1 rounded-2xl border-[3px] shadow-sm transition-all duration-300 w-16 h-16 md:w-20 md:h-20 ${node.color} ${
                  isActive 
                    ? "ring-4 ring-offset-2 ring-amber-400 border-[#5A5A40] scale-110 z-30" 
                    : "hover:scale-105 hover:border-[#5A5A40]"
                }`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: node.delay, 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 12 
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => {
                  setIsPlaying(false); // Switch to manual selection
                  onSelectFacility(node.id);
                }}
              >
                {/* Yellow papercraft house roof mimicking physical card */}
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] md:border-l-[40px] border-l-transparent border-r-[32px] md:border-r-[40px] border-r-transparent border-b-[15px] border-b-amber-300/90 group-hover:border-b-amber-400 transition-colors pointer-events-none" />

                {/* Node Label (Inside House) */}
                <span className="font-sans font-extrabold text-[#2D3327] text-[11px] md:text-xs mt-1.5 z-10 leading-tight">
                  {node.name}
                </span>
                <span className="text-[7.5px] md:text-[8px] text-[#5A5A40] font-bold tracking-tighter text-center max-w-[62px] md:max-w-[76px] truncate leading-none mt-1 z-10">
                  {node.category.split("・")[0]}
                </span>

                {/* Tiny green/red/yellow indicator dot underneath */}
                <div className={`w-2.5 h-2.5 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-2 border-white shadow-sm transition-all ${
                  isActive ? "bg-amber-400 scale-120 animate-ping" : "bg-zinc-300"
                }`} />
              </motion.div>

              {/* Hover Tooltip Info (Desktop Only) */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-5 w-48 bg-[#2D3327]/95 backdrop-blur-sm text-white text-center p-3 rounded-xl shadow-xl z-50 pointer-events-none"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="font-sans font-extrabold text-xs text-amber-300">{facilitiesData.find(f => f.id === node.id)?.name}</p>
                    <p className="text-[10px] text-zinc-300 mt-1 line-clamp-2 leading-relaxed">
                      {facilitiesData.find(f => f.id === node.id)?.detailedDescription}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-[9px] text-amber-300/90 font-bold mt-1.5 uppercase tracking-wider">
                      <span>詳細を表示</span>
                      <ArrowRight size={8} />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#2D3327]/95" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
