import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader: React.FC<SplashLoaderProps> = ({ onComplete }) => {
  const [animationStep, setAnimationStep] = useState(0); // 0: Init, 1: Cloud, 2: Houses

  useEffect(() => {
    // Phase 1: Show Central Cloud
    const timer1 = setTimeout(() => {
      setAnimationStep(1);
    }, 300);

    // Phase 2: Pop in houses
    const timer2 = setTimeout(() => {
      setAnimationStep(2);
    }, 1000);

    // Phase 3: Hold state so users can enjoy the clean pop animation
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // House node coordinates (percentage values based on 100% bounds of card container)
  const nodes = [
    { id: "tsunagi", name: "つなぎ", category: "児童支援", left: "50%", top: "16%", delay: 1.2 },
    { id: "kizuki", name: "きづき", category: "デイサービス", left: "82%", top: "40%", delay: 1.4 },
    { id: "akari", name: "あかり", category: "高齢者サロン", left: "70%", top: "78%", delay: 1.6 },
    { id: "wagaya", name: "わがや", category: "地域通所", left: "30%", top: "78%", delay: 1.8 },
    { id: "honoka", name: "ほのか", category: "訪問介護", left: "18%", top: "40%", delay: 2.0 }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[#2D3327] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.02,
        filter: "blur(8px)",
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Container holding the central cloud and the surrounding houses on a completely clean background */}
      <div className="relative w-[92vw] max-w-[580px] aspect-[5/4.2] select-none overflow-visible">
        
        {/* =======================================================
            HOUSES BLOSSOMING WITH SPRINGS
            ======================================================= */}
        {animationStep >= 2 && nodes.map((node) => (
          <motion.div
            key={`intro-node-${node.id}`}
            className="absolute z-10 flex flex-col items-center justify-center p-1 rounded-2xl border-[3px] bg-white border-[#E5E2D9] text-[#2D3327] shadow-sm w-16 h-16 md:w-20 md:h-20"
            style={{ 
              left: node.left, 
              top: node.top,
              transform: "translate(-50%, -50%)"
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: node.delay, type: "spring", stiffness: 120, damping: 10 }}
          >
            {/* House roof */}
            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] md:border-l-[40px] border-l-transparent border-r-[32px] md:border-r-[40px] border-r-transparent border-b-[14px] border-b-amber-300 pointer-events-none" />

            {/* Title */}
            <span className="font-sans font-extrabold text-[#2D3327] text-[11px] md:text-xs mt-1 z-10 leading-none select-none">
              {node.name}
            </span>
            <span className="text-[7.5px] md:text-[8px] text-[#5A5A40] font-bold tracking-tight text-center max-w-[62px] md:max-w-[76px] truncate leading-none mt-1 z-10 select-none">
              {node.category}
            </span>
          </motion.div>
        ))}

        {/* =======================================================
            CENTRAL "LIBAFUL" CLOUD APPEARING FIRST
            ======================================================= */}
        {animationStep >= 1 && (
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
            <motion.div 
              className="relative w-28 h-20 md:w-32 md:h-24 bg-amber-300 border-[3.5px] border-amber-400 text-[#2D3327] font-serif font-bold text-center flex flex-col items-center justify-center shadow-md rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%]"
              animate={{
                scale: [1, 1.04, 1],
                borderRadius: [
                  "50% 50% 50% 50% / 40% 40% 60% 60%",
                  "52% 48% 54% 46% / 42% 38% 62% 58%",
                  "50% 50% 50% 50% / 40% 40% 60% 60%"
                ]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl md:text-3xl italic tracking-wide font-normal select-none font-serif leading-none text-[#2D3327]/90 pl-1">
                Libafuru
              </span>
              <span className="text-[9px] md:text-[10px] font-sans font-bold tracking-[0.15em] text-amber-800/80 mt-1.5 select-none">
                リバフル
              </span>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Skip Button */}
      <motion.button
        onClick={onComplete}
        className="absolute bottom-10 right-10 text-xs text-zinc-400 hover:text-[#5A5A40] border border-zinc-200 hover:border-[#5A5A40] px-4 py-2 rounded-full transition font-semibold tracking-wider bg-white/50 backdrop-blur-sm z-[10000] cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        スキップ Skip &rarr;
      </motion.button>
    </motion.div>
  );
};
