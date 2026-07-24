import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HelpCircle, MessageCircle, ChevronDown, ChevronUp, Mail, 
  Phone, Sparkles, Send, Check, ShieldAlert, FileText 
} from "lucide-react";
import { faqItems } from "../data";

export const ContactSection: React.FC = () => {
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(1);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  
  const [formData, setFormData] = useState({
    name: "",
    kana: "",
    tel: "",
    email: "",
    category: "一般のお問い合わせ",
    message: "",
    agree: false
  });

  const toggleFaq = (id: number) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("個人情報保護方針への同意が必要です。");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold font-sans tracking-widest mb-4 uppercase">
            <MessageCircle size={12} className="text-emerald-700" />
            <span>Contact & Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
            お問い合わせ・無料介護プラン相談
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4 leading-relaxed font-sans font-medium">
            ご相談・お見積もりはすべて無料です。デイサービスの見学予約、料金のご質問など、お気軽に何でもお寄せください。
          </p>
        </div>

        {/* Dual Layout: FAQ on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-emerald-800 font-bold tracking-widest uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-lg md:text-xl font-bold font-sans text-zinc-900">
                よくあるご質問（FAQ）
              </h3>
            </div>

            <div className="space-y-3.5">
              {faqItems.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="border border-zinc-200 bg-white rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    {/* Q Trigger */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 flex items-start justify-between gap-3 text-sm font-bold font-sans text-zinc-800"
                    >
                      <div className="flex gap-2 items-start">
                        <span className="bg-amber-100 text-amber-950 font-serif font-bold rounded-lg px-2 py-0.5 text-xs">Q</span>
                        <span className="leading-snug">{faq.question}</span>
                      </div>
                      {isExpanded ? <ChevronUp size={16} className="text-zinc-400 shrink-0 mt-0.5" /> : <ChevronDown size={16} className="text-zinc-400 shrink-0 mt-0.5" />}
                    </button>

                    {/* A Collapse */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-4 pt-0 border-t border-zinc-100 text-xs md:text-sm text-zinc-600 leading-relaxed font-sans font-medium bg-zinc-50 flex gap-2 items-start">
                            <span className="bg-emerald-100 text-emerald-900 font-serif font-bold rounded-lg px-2 py-0.5 text-xs mt-0.5">A</span>
                            <div className="space-y-1">
                              <p className="leading-relaxed">{faq.answer}</p>
                              <span className="inline-block text-[10px] text-zinc-400 mt-2">カテゴリ：{faq.category}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Box */}
            <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4 shadow-sm border border-emerald-900">
              <h4 className="text-sm font-bold font-sans tracking-wider text-amber-300">
                お急ぎの場合はお電話ください
              </h4>
              <p className="text-xs leading-relaxed text-emerald-100/90 font-sans">
                当日の見学予約や、介護タクシーの配車、急な在宅生活でのトラブルなど、お急ぎのご用件は以下までお電話にて直接ご連絡ください。
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="tel:088-821-9598"
                  className="bg-white text-emerald-950 hover:bg-zinc-100 px-5 py-3 rounded-2xl font-mono font-bold text-base md:text-lg flex items-center gap-2 shadow transition active:scale-95"
                >
                  <Phone size={18} className="text-emerald-700 animate-pulse" />
                  <span>088-821-9598</span>
                </a>
                <span className="text-[10px] text-emerald-200 font-bold block">
                  受付時間：月〜土 8:30〜17:30
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-zinc-200/80 rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-lg font-bold font-sans text-zinc-900 tracking-tight flex items-center gap-2 mb-4">
              <Mail size={18} className="text-emerald-700" />
              相談窓口・メールフォーム
            </h3>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-8 rounded-2xl text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check size={28} />
                </div>
                <h4 className="font-bold font-sans text-base">お問い合わせありがとうございました</h4>
                <p className="text-xs md:text-sm text-emerald-700 leading-relaxed font-sans">
                  送信が正常に完了いたしました。2営業日以内に、各事業所の専門ケアマネジャーまたは窓口担当者よりお電話かメールにてご連絡を差し上げます。
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", kana: "", tel: "", email: "", category: "一般のお問い合わせ", message: "", agree: false });
                  }}
                  className="text-xs font-bold text-emerald-800 underline block mx-auto hover:text-emerald-900"
                >
                  新しく問い合わせを送信する
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                
                <div>
                  <label className="block text-xs font-bold text-zinc-500 mb-1">
                    お問い合わせ項目 <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                  >
                    <option value="一般のお問い合わせ">一般のお問い合わせ・質問</option>
                    <option value="無料介護プラン相談について">無料介護プラン相談について（あかり）</option>
                    <option value="デイサービス体験・見学希望">デイサービス体験・見学希望（希月・わがや）</option>
                    <option value="介護タクシーの料金・予約見積もり">介護タクシーの料金・予約見積もり（ほのか）</option>
                    <option value="放課後等デイサービスについて">放課後等デイサービス「つなぎ」のご相談</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      お名前 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="例：高知 太郎"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      ふりがな <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="kana"
                      required
                      placeholder="例：こうち たろう"
                      value={formData.kana}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      お電話番号 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      required
                      placeholder="例：088-821-9598"
                      value={formData.tel}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="例：name@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-500 mb-1">
                    ご相談内容・ご希望内容 <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="例：朝倉のデイサービス希月を週2回ほど利用したいのですが、見学可能でしょうか？足腰が不自由なため送迎も希望します。"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                  />
                </div>

                {/* Privacy Compliance Checklist */}
                <div className="bg-zinc-100 p-4 rounded-2xl border border-zinc-200 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      required
                      checked={formData.agree}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-zinc-300 text-emerald-800 focus:ring-emerald-600 mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="agree" className="text-[11px] text-zinc-500 font-medium leading-relaxed font-sans select-none cursor-pointer">
                      当社の「個人情報保護方針（プライバシーポリシー）」に同意する。ご記入いただいた個人情報は、ご相談対応およびサービス提供調整の目的以外には一切利用いたしません。
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.agree}
                  className={`w-full py-4 rounded-xl font-bold font-sans tracking-wide shadow transition flex items-center justify-center gap-2 active:scale-95 ${
                    formData.agree 
                      ? "bg-emerald-800 hover:bg-emerald-950 text-white cursor-pointer" 
                      : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                  }`}
                >
                  <Send size={14} />
                  <span>お問い合わせを送信する</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
