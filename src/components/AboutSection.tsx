import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, HeartHandshake, Users, Sparkles, Star, Calendar, MapPin } from "lucide-react";
import { assurances } from "../data";

export const AboutSection: React.FC = () => {
  const assuranceIcons = [
    <Award className="text-[#5A5A40]" size={24} />,
    <ShieldCheck className="text-[#5A5A40]" size={24} />,
    <HeartHandshake className="text-[#5A5A40]" size={24} />,
    <Users className="text-[#5A5A40]" size={24} />,
    <Star className="text-[#5A5A40]" size={24} />
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] border-y border-[#E5E2D9]" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#5A5A40] border border-[#E5E2D9] rounded-full text-xs font-bold font-sans tracking-widest mb-4 uppercase">
            <ShieldCheck size={12} className="text-[#5A5A40]" />
            <span>Corporate Strengths</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#2D3327] tracking-tight leading-tight">
            リバフルが選ばれる理由、5つの安心基準
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4 leading-relaxed font-sans font-medium">
            私たちは、ご利用者さまには「我が家のようなあたたかさ」を、ご家族には「何でも託せる絶対的な信頼感」を届けるため、独自の高い品質管理とコンプライアンスを徹底しています。
          </p>
        </div>

        {/* 5 Assurances Bento Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {assurances.map((item, index) => {
            return (
              <div 
                key={item.id}
                className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm space-y-4 hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#E5E2D9] shrink-0">
                      {assuranceIcons[index] || <Award size={24} />}
                    </span>
                    <span className="text-[10px] bg-[#FAF9F6] text-[#5A5A40] border border-[#E5E2D9] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold font-sans text-[#2D3327] leading-snug">
                    <span className="text-[#7A7A5A] font-serif font-bold text-xl mr-1.5">{item.id}.</span>
                    {item.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Quick Stat / License Summary Card - Authority Anchor */}
          <div className="bg-gradient-to-br from-[#5A5A40] to-[#444430] p-6 rounded-3xl text-white flex flex-col justify-between shadow-md lg:col-span-1 md:col-span-2">
            <div className="space-y-3">
              <span className="bg-[#7A7A5A] text-white text-[9px] font-bold py-1 px-2.5 rounded-full uppercase tracking-widest font-sans inline-block">
                運営基準
              </span>
              <h3 className="text-lg font-bold font-sans tracking-wide leading-tight">
                高知県認可・介護保険事業者
              </h3>
              <p className="text-xs text-[#FAF9F6]/85 leading-relaxed font-sans">
                当グループは法令で定められた運営指導・監査を定期的に受診し、全項目で「優良指定」基準を維持しています。苦情処理体制や個人情報管理規定も完全完備し、情報セキュリティ・コンプライアンス（法令遵守）も万全です。
              </p>
            </div>
            <div className="pt-4 border-t border-[#7A7A5A]/50 flex items-center gap-2">
              <Award className="text-amber-300" size={20} />
              <span className="text-xs font-bold font-sans text-white">
                ライセンス：介護福祉第 3970104745 号 ほか
              </span>
            </div>
          </div>
        </div>

        {/* CEO Message / Company Philosophy Section */}
        <div className="bg-white rounded-3xl border border-zinc-200/80 p-6 md:p-10 max-w-5xl mx-auto shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* CEO Portrait Placeholder / Visual Column */}
            <div className="md:col-span-4 relative aspect-[4/5] md:aspect-auto md:h-full min-h-[250px] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="リバフル代表取締役メッセージ"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[10px] text-amber-300 font-bold uppercase tracking-widest leading-none">代表取締役</p>
                <h4 className="text-base font-bold font-sans mt-1">
                  岡村 淳 <span className="text-xs font-normal opacity-90">Kazuo Yamanaka</span>
                </h4>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-[#5A5A40] font-bold tracking-widest uppercase">
                  MESSAGE FROM CEO
                </p>
                <h3 className="text-xl md:text-2xl font-bold font-sans text-[#2D3327] tracking-tight leading-tight">
                  「川が豊かに流れるように、満ち足りた笑顔がめぐる地域へ」
                </h3>
              </div>

              <div className="space-y-4 text-zinc-600 text-xs md:text-sm leading-relaxed font-sans font-medium">
                <p>
                  会社名「リバフル（Libaful）」は、<strong>River（川）</strong> と <strong>Full（満ちる）</strong> を組み合わせた造語です。高知の清流のように絶え間なく、地域のみなさまの笑顔と喜びが豊かに循環し、流れ続ける福祉社会を築きたい。その強い想いから、リバフルは誕生しました。
                </p>
                <p>
                  介護は、ただ日常生活をお世話するだけのものではありません。その人自身が持つ「我が家での役割」や「趣味を続ける楽しみ」「仲間と歌う喜び」を引き出し、明日への生きるエネルギーを紡ぎだすことだと信じています。
                </p>
                <p>
                  少人数のアットホームなデイサービス、お一人おひとりの生活を支えるヘルパー・介護タクシー、そして子どもたちの可能性を引き出す放課後等デイサービスを通じて、私たちは高知の地で、あらゆる世代の笑顔をつないでまいります。
                </p>
              </div>

              {/* Company Meta Grid */}
              <div className="pt-6 border-t border-zinc-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-400 font-bold uppercase tracking-wider block text-[10px]">商号</span>
                  <span className="font-bold text-zinc-800 mt-1 block">合同会社リバフル / 株式会社リバフル</span>
                </div>
                <div>
                  <span className="text-zinc-400 font-bold uppercase tracking-wider block text-[10px]">拠点所在地</span>
                  <span className="font-bold text-zinc-800 mt-1 block">高知県高知市朝倉・高須 / 吾川郡いの町</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};
