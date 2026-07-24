import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Calendar, Mail, FileText, Menu, X, Award, ChevronRight } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { id: "top", label: "トップ" },
    { id: "services", label: "サービス業態" },
    { id: "facilities", label: "事業所一覧" },
    { id: "about", label: "会社の強み" },
    { id: "recruitment", label: "採用情報" },
    { id: "contact", label: "お問い合わせ" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E2D9] shadow-sm transition-all duration-200">
      {/* Top Notification Banner - Authority Indicator */}
      <div className="w-full bg-[#5A5A40] text-[#FAF9F6] text-[10px] md:text-xs py-1.5 px-4 flex justify-between items-center font-sans tracking-wide">
        <div className="flex items-center gap-2">
          <span className="bg-[#7A7A5A] text-[#FAF9F6] font-bold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
            指定認可
          </span>
          <span>高知県公認 介護保険・障害福祉指定事業者：リバフルグループ</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            月〜土 8:30〜17:30
          </span>
          <span className="h-3 w-[1px] bg-[#7A7A5A]" />
          <span>高知市・いの町密着</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        {/* Company Logo & Branding */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick("top")}
        >
          {/* Custom Styled Icon */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-[#5A5A40] rounded-full flex items-center justify-center border-2 border-[#7A7A5A]/30 shadow-inner group transition-all duration-300 hover:rotate-6">
            <span className="absolute -inset-1 rounded-full border border-[#5A5A40]/30 group-hover:scale-110 transition duration-300" />
            <span className="text-xl md:text-2xl font-serif font-bold text-white leading-none">L</span>
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg md:text-2xl font-bold font-sans text-[#2D3327] tracking-tight">
                リバフル
              </span>
              <span className="text-xs md:text-sm font-serif italic text-[#7A7A5A] font-medium tracking-wide">
                Libaful
              </span>
            </div>
            <p className="text-[9px] md:text-[10px] text-zinc-500 font-medium tracking-tighter leading-none mt-0.5">
              総合介護サービス ｜ 高知市・いの町
            </p>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {menuItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-[13px] xl:text-[14px] font-sans font-semibold tracking-wider transition-all duration-200 ${
                  isActive 
                    ? "bg-[#F5F5F0] text-[#5A5A40]" 
                    : "text-[#2D3327]/80 hover:text-[#2D3327] hover:bg-[#F5F5F0]/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Contact CTA - Multi-channel High Visibility */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] text-zinc-500 font-bold tracking-widest leading-none">
              お電話でのご相談・窓口
            </p>
            <a 
              href="tel:088-821-9598" 
              className="text-lg xl:text-xl font-bold font-mono text-[#2D3327] flex items-center gap-1 mt-1 hover:text-[#5A5A40] transition"
            >
              <Phone size={16} className="text-[#5A5A40] animate-bounce" />
              088-821-9598
            </a>
          </div>
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-[#5A5A40] hover:bg-[#444430] text-white px-5 py-2.5 rounded-2xl font-sans font-bold text-xs xl:text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5"
          >
            <Mail size={14} />
            <span>無料相談・見学窓口</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a 
            href="tel:088-821-9598"
            className="p-2.5 rounded-xl bg-[#F5F5F0] text-[#2D3327] active:bg-[#E5E2D9] transition"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#5A5A40] text-white shadow-md active:scale-95 transition"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-2xl z-40 lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => {
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`py-3 px-4 rounded-xl text-sm font-sans font-bold tracking-wider text-left transition ${
                        isActive 
                          ? "bg-[#F5F5F0] text-[#5A5A40] border-l-4 border-[#5A5A40]" 
                          : "bg-[#F5F5F0]/50 text-[#2D3327] active:bg-[#E5E2D9]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <Phone className="text-amber-600 animate-pulse" size={20} />
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold leading-none">お電話でのご相談・窓口</p>
                    <a href="tel:088-821-9598" className="text-base font-bold font-mono text-zinc-900 mt-1 block">
                      088-821-9598
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3.5 rounded-xl font-sans font-bold text-sm tracking-wider flex items-center justify-center gap-2 shadow"
                >
                  <Mail size={16} />
                  <span>無料相談・お見積りはこちら</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
