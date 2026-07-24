import React, { useState } from "react";
import { Header } from "./components/Header";
import { ServiceSection } from "./components/ServiceSection";
import { FacilitySection } from "./components/FacilitySection";
import { LibafulNetworkMap } from "./components/LibafulNetworkMap";
import { AboutSection } from "./components/AboutSection";
import { RecruitmentSection } from "./components/RecruitmentSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { SplashLoader } from "./components/SplashLoader";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Navigation } from "lucide-react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState("top");
  const [activeFacilityId, setActiveFacilityId] = useState("kizuki");

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSelectFacility = (id: string) => {
    setActiveFacilityId(id);
    const element = document.getElementById("facilities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToFacility = (id: string) => {
    setActiveFacilityId(id);
    const element = document.getElementById("facilities");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <SplashLoader onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-[#FAF9F6] text-[#2D3327] font-sans selection:bg-[#5A5A40] selection:text-white flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Header */}
        <Header currentSection={currentSection} onNavigate={handleNavigate} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section 
            id="top"
            className="relative min-h-[500px] md:min-h-[600px] lg:h-[640px] flex flex-col lg:flex-row items-stretch border-b border-[#E5E2D9] overflow-hidden bg-white"
          >
            {/* Left Side: Text and Tagline */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center items-start space-y-6">
              <motion.span 
                className="text-[#5A5A40] font-serif italic text-lg md:text-xl tracking-wide block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 15 : 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empowering Lives, Enriching Care.
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif tracking-tight text-[#2D3327]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                明日を創る、<br />
                <span className="text-[#7A7A5A]">「自分らしさ」</span>の追求。
              </motion.h2>

              <motion.p 
                className="text-zinc-600 max-w-lg leading-relaxed text-sm md:text-base font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                リバフルは、介護の枠を超えたホスピタリティとプロフェッショナリズムで、地域社会に信頼と安心の輪を広げています。高知県高知市と、いの町で訪問介護、デイサービス、居宅支援、放課後等デイサービスなど、5つの専門福祉分野において、包括的なライフサポートを提供します。
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                <button 
                  onClick={() => handleNavigate("services")}
                  className="bg-[#5A5A40] hover:bg-[#444430] text-white px-6 py-3.5 rounded-2xl font-bold tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
                >
                  <span>5つの事業を見る</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => handleNavigate("contact")}
                  className="bg-[#FAF9F6] hover:bg-[#F5F5F0] text-[#5A5A40] border border-[#E5E2D9] px-6 py-3.5 rounded-2xl font-bold tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                >
                  <span>無料プラン作成・相談</span>
                </button>
              </motion.div>
            </div>

            {/* Right Side: Interactive App Map & Certification Badge */}
            <div className="w-full lg:w-1/2 relative bg-[#F5F5F0] flex items-center justify-center p-6 md:p-12 border-t lg:border-t-0 lg:border-l border-[#E5E2D9]">
              {/* Soft artistic organic background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] to-[#E5E2D9] opacity-70 pointer-events-none" />
              <div className="absolute top-10 left-10 w-40 h-40 bg-[#5A5A40]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#7A7A5A]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Interactive Network Map Visualizer */}
              <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                <div className="mb-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3A199] font-bold block mb-1">Interactive Map</span>
                  <p className="text-xs text-[#5A5A40] font-bold flex items-center gap-1 justify-center">
                    <Navigation size={12} className="animate-pulse" />
                    <span>各アイコンをクリックで詳細に移動</span>
                  </p>
                </div>
                <LibafulNetworkMap onSelectFacility={handleSelectFacility} activeFacilityId={activeFacilityId} />
              </div>

              {/* Float ISO Certification Badge */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[#E5E2D9] shadow-sm flex items-center gap-3 max-w-[280px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? 20 : 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="p-2 bg-[#F5F5F0] text-[#5A5A40] rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#A3A199]">Quality Standard</p>
                  <p className="text-[11px] text-[#2D3327] font-bold leading-tight">高知県指定認可 介護福祉事業者</p>
                  <p className="text-[9px] text-[#7A7A5A] italic mt-0.5">法令基準完全適合・優良査定継続</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <ServiceSection onNavigateToFacility={handleNavigateToFacility} />

          {/* Facilities Section */}
          <FacilitySection activeFacilityId={activeFacilityId} onSelectFacility={setActiveFacilityId} />

          {/* Corporate/CEO Strength Section */}
          <AboutSection />

          {/* Job Openings / Recruitment Section */}
          <RecruitmentSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </motion.div>
    </>
  );
}
