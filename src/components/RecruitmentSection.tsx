import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, DollarSign, Clock, FileText, CheckCircle2, 
  Sparkles, Star, ChevronDown, ChevronUp, Check, Mail, Phone, Heart
} from "lucide-react";
import { JobOpening } from "../types";
import { jobOpenings } from "../data";

export const RecruitmentSection: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>("rec-tsunagi-1");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [selectedJobId, setSelectedJobId] = useState<string>("rec-tsunagi-1");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    licenses: "",
    message: ""
  });

  const toggleJob = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.tel) {
      alert("お名前とお電話番号は必須入力項目です。");
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="recruitment">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold font-sans tracking-widest mb-4 uppercase">
            <Briefcase size={12} className="text-amber-700" />
            <span>We Are Hiring</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
            私たちと一緒に、笑顔をつむぎませんか？
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4 leading-relaxed font-sans font-medium">
            リバフルグループでは、職員全員が「心に余裕を持ち、笑顔で働ける環境」を何よりも大切にしています。残業ゼロの推進、柔軟なシフト設計、万全の指導体制でお迎えします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Job Openings List Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-4 pl-1">
              募集中の職種（正社員・パート）
            </h3>

            {jobOpenings.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div 
                  key={job.id}
                  className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? "border-emerald-600/50 bg-emerald-50/10 shadow-md" 
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-emerald-800 text-white font-bold text-[9px] px-2 py-0.5 rounded-full">
                          {job.employmentType}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-bold">
                          {job.facility}
                        </span>
                        {job.isUrgent && (
                          <span className="bg-amber-100 border border-amber-300 text-amber-900 font-bold text-[9px] px-2 py-0.5 rounded-full animate-pulse flex items-center gap-1">
                            <Star size={8} className="fill-amber-500 text-amber-500" />
                            急募・積極採用
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm md:text-base font-bold font-sans text-zinc-900">
                        {job.title}
                      </h4>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-zinc-400" /> : <ChevronDown size={18} className="text-zinc-400" />}
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-zinc-200/50 space-y-5 text-xs md:text-sm text-zinc-700">
                          <p className="leading-relaxed font-sans text-zinc-600 bg-white p-4 rounded-xl border border-zinc-100 shadow-inner">
                            {job.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-zinc-100">
                              <span className="text-zinc-400 font-bold tracking-wider block text-[9px] uppercase">給与・賞与</span>
                              <span className="font-bold text-zinc-800 mt-1 block font-sans">{job.salary}</span>
                            </div>
                            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-zinc-100">
                              <span className="text-zinc-400 font-bold tracking-wider block text-[9px] uppercase">勤務時間・休日</span>
                              <span className="font-bold text-zinc-800 mt-1 block font-sans">{job.hours}</span>
                            </div>
                            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-zinc-100">
                              <span className="text-zinc-400 font-bold tracking-wider block text-[9px] uppercase">必須応募資格</span>
                              <span className="font-bold text-emerald-800 mt-1 block font-sans">{job.requirements}</span>
                            </div>
                            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-zinc-100">
                              <span className="text-zinc-400 font-bold tracking-wider block text-[9px] uppercase">待遇・福利厚生</span>
                              <span className="font-bold text-zinc-800 mt-1 block font-sans">{job.benefits}</span>
                            </div>
                          </div>

                          <div className="pt-2 flex justify-end">
                            <button
                              onClick={() => {
                                setSelectedJobId(job.id);
                                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold font-sans text-xs px-5 py-2.5 rounded-xl flex items-center gap-1 shadow transition active:scale-95"
                            >
                              <span>この職種にエントリーする</span>
                              <Briefcase size={12} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Entry Application Form */}
          <div className="lg:col-span-5" id="apply-form">
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-3xl shadow-sm relative overflow-hidden">
              <span className="absolute -right-4 -top-4 w-24 h-24 bg-amber-200/20 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-base font-bold font-sans text-zinc-900 tracking-tight flex items-center gap-2 mb-4">
                <Heart size={18} className="text-emerald-700 animate-pulse" />
                カンタンWeb応募・説明会受付
              </h3>
              
              <p className="text-[11px] text-zinc-500 leading-relaxed mb-6">
                履歴書なしでのカジュアル面談や、まずは職場の雰囲気を見たい「見学会」のご希望も大歓迎です！2営業日以内に担当よりご連絡いたします。
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check size={24} />
                  </div>
                  <h4 className="font-bold font-sans text-sm">エントリーを受け付けました</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    この度はリバフルグループへのご応募誠にありがとうございます。採用担当より2営業日以内にお電話（またはメール）にてご連絡を差し上げます。
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", tel: "", licenses: "", message: "" });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-800 underline block mx-auto hover:text-emerald-900"
                  >
                    別のエントリーを入力する
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      希望職種 <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="jobId"
                      value={selectedJobId}
                      onChange={(e) => setSelectedJobId(e.target.value)}
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent font-medium"
                    >
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.title} ({job.facility.split(" ").pop()})
                        </option>
                      ))}
                    </select>
                  </div>

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
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent font-medium"
                    />
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
                        placeholder="例：090-XXXX-XXXX"
                        value={formData.tel}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 mb-1">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="例：example@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      お持ちの資格・免許（任意）
                    </label>
                    <input
                      type="text"
                      name="licenses"
                      placeholder="例：普通AT免許、介護福祉士、保育士など"
                      value={formData.licenses}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 mb-1">
                      メッセージ・質問・見学希望日（任意）
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="例：まずは施設の見学から希望します。現在の職場での引き継ぎがあるため退職時期の相談もしたいです。"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-zinc-300 rounded-xl px-3 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-800 hover:bg-emerald-950 text-white font-bold font-sans text-xs md:text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Mail size={16} />
                    <span>この内容でエントリーする</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
