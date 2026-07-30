import React from "react";
import { Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "../assets/ribafuru-rogo.png";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-[#7A7A5A] font-sans border-t border-[#E5E2D9]">

      {/* Upper footer CTA */}
      <div className="bg-[#EFECE3] text-[#2D3327] py-8 px-4 md:px-6 border-b border-[#E5E2D9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold font-sans tracking-wide">
              介護のこと、発達のこと、どうぞお気軽にご相談ください
            </h3>
            <p className="text-sm text-[#5A5A40]">
              各事業所のケアマネジャー、介護福祉士、児童発達支援管理責任者が、丁寧に対応いたします。
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:088-821-9598"
              className="bg-white text-[#2D3327] px-6 py-3 rounded-2xl font-bold font-sans flex items-center gap-2 shadow hover:bg-zinc-50 transition active:scale-95 border border-[#E5E2D9]"
            >
              <Phone size={18} className="text-[#5A5A40]" />
              <span className="font-mono">088-821-9598</span>
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-[#5A5A40] hover:bg-[#444430] text-white px-6 py-3 rounded-2xl font-bold font-sans flex items-center gap-2 shadow transition active:scale-95"
            >
              <span>メール・LINEで相談する</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content - 修正点: PC(lg)以上で横並び(flex-row)にする */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">

        {/* Left Section: Company Profile (幅40%) */}
        <div className="lg:w-2/5 space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="リバフル ロゴ"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-[#2D3327] tracking-wider">株式会社 リバフル</span>
          </div>
          {/* 親要素の幅に合わせて自然に折り返す */}
          <p className="text-sm text-[#7A7A5A] leading-relaxed">
            高知県高知市・吾川郡いの町を拠点に、デイサービス、訪問介護、ケアマネジメント、介護タクシー、放課後等デイサービスを運営する総合福祉ケアグループ。
          </p>
          <div className="flex flex-col gap-2 pt-2 text-sm text-[#5A5A40]">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-[#2D3327]" />
              <span>本社：高知県高知市朝倉本町1丁目12-28-6</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#2D3327]" />
              <span>代表電話：088-821-9598</span>
            </p>
          </div>
        </div>

        {/* Right Section: 3 Columns for Links (幅60%) */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">

          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#2D3327] tracking-widest">
              提供サービス
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#5A5A40] transition text-left">
                  通所介護（デイサービス）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#5A5A40] transition text-left">
                  居宅介護支援（ケアプラン作成）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#5A5A40] transition text-left">
                  訪問介護（ホームヘルパー派遣）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#5A5A40] transition text-left">
                  介護タクシー（車いす移動支援）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#5A5A40] transition text-left">
                  放課後等デイサービス（つなぎ）
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#2D3327] tracking-widest">
              運営事業所一覧
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate("facilities")} className="hover:text-[#5A5A40] transition text-left">
                  デイサービスセンター 希月
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("facilities")} className="hover:text-[#5A5A40] transition text-left">
                  居宅介護支援事業所 あかり
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("facilities")} className="hover:text-[#5A5A40] transition text-left">
                  介護サービス・タクシー ほのか
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("facilities")} className="hover:text-[#5A5A40] transition text-left">
                  デイサービス わがや
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("facilities")} className="hover:text-[#5A5A40] transition text-left">
                  放課後等デイサービス つなぎ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#2D3327] tracking-widest">
              採用・理念
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#5A5A40] transition text-left">
                  私たちの強みと5つの安心
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("recruitment")} className="hover:text-[#5A5A40] transition text-left">
                  採用情報（児発管・ケアマネ・ヘルパー）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("top")} className="hover:text-[#5A5A40] transition text-left">
                  リバフルの理念・代表メッセージ
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom bar */}
      <div className="bg-[#E5E2D9] text-xs text-[#5A5A40] py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} 総合介護サービス リバフル (Libaful Group). All Rights Reserved.</p>
          <div className="flex gap-4">
            <button
              onClick={scrolltoTop}
              className="flex items-center gap-1 hover:text-[#2D3327] transition bg-white/50 hover:bg-white px-3 py-1.5 rounded-lg border border-[#A3A199]"
            >
              <span className="font-bold">TOPへ</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};