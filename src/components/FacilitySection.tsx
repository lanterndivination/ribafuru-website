import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, Phone, Printer, MapPin, Award, CheckCircle2, 
  ChevronRight, Calendar, User, Users, ShieldAlert, Sparkles,
  Instagram, MessageCircle, Heart, Mail, ExternalLink
} from "lucide-react";
import { Facility } from "../types";
import { facilitiesData } from "../data";

interface FacilitySectionProps {
  activeFacilityId: string;
  onSelectFacility: (id: string) => void;
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({ 
  activeFacilityId, 
  onSelectFacility 
}) => {
  const currentFacility = facilitiesData.find(f => f.id === activeFacilityId) || facilitiesData[0];

  // Helper to map icon names to actual Lucide component elements
  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Bath": return <Heart className="text-sky-500" size={18} />;
      case "Sparkles": return <Sparkles className="text-amber-500" size={18} />;
      case "School": return <Building className="text-blue-500" size={18} />;
      case "FileText": return <Award className="text-emerald-500" size={18} />;
      case "Leaf": return <Sparkles className="text-emerald-500" size={18} />;
      case "Car": return <Award className="text-amber-500" size={18} />;
      case "Heart": return <Heart className="text-rose-500" size={18} />;
      case "Stethoscope": return <Award className="text-indigo-500" size={18} />;
      case "Mic": return <Sparkles className="text-violet-500" size={18} />;
      case "MapPin": return <MapPin className="text-zinc-500" size={18} />;
      case "Hospital": return <Building className="text-indigo-500" size={18} />;
      case "Flag": return <Sparkles className="text-orange-500" size={18} />;
      case "Home": return <Building className="text-rose-500" size={18} />;
      case "Cake": return <Sparkles className="text-pink-500" size={18} />;
      case "Shirt": return <Award className="text-sky-500" size={18} />;
      default: return <CheckCircle2 className="text-emerald-500" size={18} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-900 rounded-full text-xs font-bold font-sans tracking-widest mb-4 uppercase">
            <Building size={12} className="text-sky-700" />
            <span>Offices & Locations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-zinc-900 tracking-tight">
            リバフル運営の 5つの事業所・拠点
          </h2>
          <p className="text-sm md:text-base text-zinc-500 mt-4 leading-relaxed font-sans font-medium">
            高知県高知市内に5拠点。地域の皆さまの身近な相談口・介護サービスセンターとして、安心をご提供しています。
          </p>
        </div>

        {/* Outer Layout: List on Left, Active Detailed Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Office Selectors (6 list items) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-4 pl-1">
              事業所を選択してください
            </h3>
            <div className="space-y-3">
              {facilitiesData.map((fac) => {
                const isActive = fac.id === activeFacilityId;
                return (
                  <button
                    key={fac.id}
                    onClick={() => onSelectFacility(fac.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                      isActive
                        ? "bg-emerald-800 border-emerald-800 text-white shadow-lg scale-[1.01]"
                        : "bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-800"
                    }`}
                  >
                    <div className="space-y-1">
                      <p className={`text-[10px] font-bold ${isActive ? "text-emerald-200" : "text-zinc-500"}`}>
                        {fac.type}
                      </p>
                      <h4 className="text-sm md:text-base font-bold font-sans leading-tight">
                        {fac.name}
                      </h4>
                      <p className={`text-[10px] ${isActive ? "text-emerald-100" : "text-zinc-400"}`}>
                        高知県高知市
                      </p>
                    </div>
                    <ChevronRight size={18} className={isActive ? "text-amber-300 animate-pulse" : "text-zinc-400"} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active detailed viewer card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFacility.id}
                className="bg-zinc-50 rounded-3xl border border-zinc-200 p-6 md:p-8 space-y-8 shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header detail */}
                <div className="space-y-3 border-b border-zinc-200 pb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-900 font-bold text-[10px] px-2 py-0.5 rounded-md">
                      {currentFacility.type}
                    </span>
                    <span className="bg-zinc-200 text-zinc-700 text-[10px] px-2 py-0.5 rounded-md font-mono">
                      事業所番号: {currentFacility.registryNumber}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
                    {currentFacility.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans italic">
                    ふりがな：{currentFacility.kana}
                  </p>
                </div>

                {/* Main Body description */}
                <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-sans">
                  {currentFacility.detailedDescription}
                </p>

                {/* Grid of details: Tel, Fax, Address, Capacity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-zinc-200/60 shadow-inner">
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-zinc-400 font-bold">所在地</p>
                        <p className="font-bold text-zinc-800 mt-0.5 font-sans">
                          〒{currentFacility.postalCode}
                        </p>
                        <p className="text-zinc-700 font-medium font-sans leading-snug">
                          {currentFacility.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex items-start gap-2.5">
                      <Phone size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] text-zinc-400 font-bold">お電話番号 / FAX</p>
                        <a href={`tel:${currentFacility.tel}`} className="font-bold text-zinc-900 mt-0.5 font-mono text-sm hover:text-emerald-700 block">
                          TEL: {currentFacility.tel}
                        </a>
                        <p className="text-zinc-600 font-medium font-mono text-xs mt-0.5">
                          FAX: {currentFacility.fax}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Staff details / capacity details if they exist */}
                  {(currentFacility.capacity || currentFacility.staffDetails || currentFacility.email) && (
                    <div className="sm:col-span-2 pt-3 border-t border-zinc-100 flex flex-wrap gap-4 text-xs">
                      {currentFacility.capacity && (
                        <div>
                          <span className="text-zinc-400 font-bold uppercase block text-[9px] tracking-wider">定員</span>
                          <span className="font-bold text-zinc-700 mt-0.5 block">{currentFacility.capacity}</span>
                        </div>
                      )}
                      {currentFacility.staffDetails && (
                        <div>
                          <span className="text-zinc-400 font-bold uppercase block text-[9px] tracking-wider">在籍資格者</span>
                          <span className="font-bold text-emerald-800 mt-0.5 block">{currentFacility.staffDetails}</span>
                        </div>
                      )}
                      {currentFacility.email && (
                        <div>
                          <span className="text-zinc-400 font-bold uppercase block text-[9px] tracking-wider">メールアドレス</span>
                          <a href={`mailto:${currentFacility.email}`} className="font-mono font-bold text-sky-700 hover:underline mt-0.5 block">
                            {currentFacility.email}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features list items */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">
                    この事業所の強み・サービス内容
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {currentFacility.features.map((feat, fIdx) => (
                      <div 
                        key={fIdx} 
                        className="bg-white p-4 rounded-xl border border-zinc-200/50 space-y-2 hover:shadow-md transition duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="p-1.5 rounded-lg bg-zinc-100 shrink-0">
                            {renderFeatureIcon(feat.icon)}
                          </span>
                          <span className="font-bold text-zinc-800 text-xs font-sans">
                            {feat.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rec / Other text if exists */}
                {(currentFacility.recreationText || currentFacility.otherText) && (
                  <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl text-xs space-y-2">
                    {currentFacility.recreationText && (
                      <p className="text-amber-900 leading-relaxed font-sans">
                        <strong>レクリエーション：</strong> {currentFacility.recreationText}
                      </p>
                    )}
                    {currentFacility.otherText && (
                      <p className="text-amber-950 leading-relaxed font-sans font-medium">
                        <strong>追記：</strong> {currentFacility.otherText}
                      </p>
                    )}
                  </div>
                )}

                {/* Social media connections for Tsunagi */}
                {currentFacility.socialLinks && (
                  <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 font-bold flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-500" />
                      つなぎ公式SNSで、毎日の活動様子を写真付きで公開中！
                    </span>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <a 
                        href={currentFacility.socialLinks.instagram} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow"
                      >
                        <Instagram size={14} />
                        <span>Instagram</span>
                        <ExternalLink size={10} />
                      </a>
                      <a 
                        href={currentFacility.socialLinks.line} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial bg-[#06C755] hover:bg-[#05b04b] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow"
                      >
                        <MessageCircle size={14} />
                        <span>LINE公式アカウント</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
