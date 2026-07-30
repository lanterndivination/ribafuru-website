import React from "react";
import { Phone, MapPin, Calendar, Heart, Award, ArrowUp } from "lucide-react";
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
    <footer className="bg-zinc-900 text-zinc-400 font-sans border-t border-zinc-800">
      {/* Upper footer CTA */}
      <div className="bg-emerald-950 text-white py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold font-sans tracking-wide">
              介護のこと、発達のこと、どうぞお気軽にご相談ください
            </h3>
            <p className="text-xs md:text-sm text-emerald-200">
              各事業所のケアマネジャー、介護福祉士、児童発達支援管理責任者が、丁寧に対応いたします。
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:088-821-9598"
              className="bg-white text-emerald-900 px-6 py-3 rounded-2xl font-bold font-sans flex items-center gap-2 shadow hover:bg-zinc-50 transition active:scale-95"
            >
              <Phone size={18} />
              <span className="font-mono">088-821-9598</span>
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-amber-400 hover:bg-amber-500 text-amber-950 px-6 py-3 rounded-2xl font-bold font-sans flex items-center gap-2 shadow transition active:scale-95"
            >
              <span>メール・LINEで相談する</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="リバフル ロゴ"
              className="w-12 h-12 object-contain"
            />
            <span className="text-lg font-bold text-white tracking-wider">"株式会社 リバフル"</span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            高知県高知市・吾川郡いの町を拠点に、デイサービス、訪問介護、ケアマネジメント、介護タクシー、放課後等デイサービスを運営する総合福祉ケアグループ。
          </p>
          <div className="space-y-2 text-xs">
            <p className="flex items-start gap-2">
              <MapPin size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>本社：高知県高知市朝倉本町1丁目12-28-6</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-emerald-500 shrink-0" />
              <span>代表電話：088-821-9598</span>
            </p>
          </div>
        </div>

        {/* Column 2: 5 Business categories */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-widest border-b border-zinc-800 pb-2">
            提供サービス
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-white transition">
                通所介護（デイサービス）
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-white transition">
                居宅介護支援（ケアプラン作成）
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-white transition">
                訪問介護（ホームヘルパー派遣）
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-white transition">
                介護タクシー（車いす移動支援）
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-white transition">
                放課後等デイサービス（つなぎ）
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: 5 Locations */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-widest border-b border-zinc-800 pb-2">
            運営事業所一覧
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate("facilities")} className="hover:text-white transition text-left">
                デイサービスセンター 希月 (高知市)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("facilities")} className="hover:text-white transition text-left">
                居宅介護支援事業所 あかり (高知市)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("facilities")} className="hover:text-white transition text-left">
                介護サービス・タクシー ほのか (高知市)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("facilities")} className="hover:text-white transition text-left">
                デイサービス わがや (高知市)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("facilities")} className="hover:text-white transition text-left">
                放課後等デイサービス つなぎ (高知市)
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Links & Compliance */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-widest border-b border-zinc-800 pb-2">
            採用・理念
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate("about")} className="hover:text-white transition">
                私たちの強みと5つの安心
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("recruitment")} className="hover:text-white transition">
                採用情報（児発管・ケアマネ・ヘルパー）
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("top")} className="hover:text-white transition">
                リバフルの理念・代表メッセージ
              </button>
            </li>
          </ul>
          <div className="pt-2">
            <div className="p-3 bg-zinc-800/50 rounded-xl border border-zinc-800/80 text-[10px] text-zinc-500 leading-relaxed space-y-1">
              <p className="font-bold text-zinc-400">コンプライアンス（法令遵守）</p>
              <p>
                当グループは、高知県個人情報保護条例および厚生労働省ガイドラインに基づき、安全で適切な福祉サービスを徹底しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom bar */}
      <div className="bg-zinc-950 text-xs text-zinc-600 py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} 総合介護サービス リバフル (Libaful Group). All Rights Reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-zinc-400 transition">個人情報保護方針</button>
            <span className="text-zinc-800">|</span>
            <button className="hover:text-zinc-400 transition">運営規約</button>
            <span className="text-zinc-800">|</span>
            <button
              onClick={scrolltoTop}
              className="flex items-center gap-1 hover:text-white transition bg-zinc-800 px-2 py-1 rounded"
            >
              <span>TOPへ</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
