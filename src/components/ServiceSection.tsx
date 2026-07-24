import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Building, FileText, Heart, Car, Cake, 
  CheckCircle, ArrowRight, Sparkles, AlertCircle
} from "lucide-react";
import { servicesData, facilitiesData } from "../data";

interface ServiceSectionProps {
  onNavigateToFacility: (facilityId: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onNavigateToFacility }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("daycare");

  const serviceIcons: Record<string, React.ReactNode> = {
    daycare: <Building className="text-sky-600" size={24} />,
    careplan: <FileText className="text-emerald-600" size={24} />,
    homevisit: <Heart className="text-rose-600" size={24} />,
    taxi: <Car className="text-amber-600" size={24} />,
    afterschool: <Cake className="text-pink-600" size={24} />
  };

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-100" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#5A5A40] border border-[#E5E2D9] rounded-full text-xs font-bold font-sans tracking-widest mb-4 uppercase">
            <Sparkles size={12} className="text-[#5A5A40]" />
            <span>Service Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
            リバフルが提供する 5つの福祉サービス
          </h2>
          <p className="text-sm md:text-base text-zinc-600 mt-4 leading-relaxed font-sans font-medium">
            私たちは高知県高知市・いの町にて、ケアマネジメントからデイサービス、自宅訪問、車いす送迎、そして児童支援まで、切れ目のない一貫した福祉サービスをご提供しています。
          </p>
        </div>

        {/* Responsive Tabs/Selectors */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mb-12 max-w-5xl mx-auto p-1.5 bg-zinc-200/50 rounded-2xl md:rounded-3xl border border-zinc-200">
          {servicesData.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`w-full md:w-auto md:flex-1 py-3 px-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold font-sans tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 ${
                  isSelected
                    ? "bg-white text-zinc-900 shadow-md scale-[1.02] border-b-2 border-[#5A5A40]"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-white/40"
                }`}
              >
                {serviceIcons[service.id]}
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-60 leading-none">{service.japaneseName}</p>
                  <p className="font-sans font-bold leading-normal mt-0.5">{service.name}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Feature Grid */}
        <div className="bg-white rounded-3xl border border-zinc-100 shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Image & Quick Meta */}
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full bg-zinc-100">
              <img
                src={currentService.image}
                alt={currentService.name}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                <span className="text-xs font-bold text-zinc-900">
                  {currentService.japaneseName}
                </span>
              </div>

              {/* Target Audience Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-[10px] text-amber-300 font-bold tracking-widest uppercase">
                  対象となるお客様
                </p>
                <h4 className="text-sm font-bold font-sans tracking-wide leading-snug">
                  {currentService.targetAudience}
                </h4>
              </div>
            </div>

            {/* Right Column: Detailed Explanations */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-sans text-zinc-900 tracking-tight flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
                      {serviceIcons[currentService.id]}
                    </span>
                    {currentService.name}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium font-sans mt-1">
                    {currentService.japaneseName} / {currentService.id === "afterschool" ? "障害児通所支援" : "介護保険事業"}
                  </p>
                </div>

                <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-sans">
                  {currentService.longDescription}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">
                    リバフルならではの特長・メリット
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.benefits.map((benefit, bIdx) => (
                      <div 
                        key={bIdx} 
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100"
                      >
                        <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-700 font-medium leading-relaxed font-sans">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Associated Facilities (Links to detailed facility cards) */}
              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] text-zinc-400 font-bold tracking-widest">
                    サービスを提供する担当事業所
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentService.facilities.map((facId) => {
                      const facility = facilitiesData.find(f => f.id === facId);
                      if (!facility) return null;
                      return (
                        <button
                          key={facId}
                          onClick={() => onNavigateToFacility(facId)}
                          className="bg-[#F5F5F0] text-[#5A5A40] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#E5E2D9] hover:bg-[#E5E2D9] transition"
                        >
                          {facility.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToFacility(currentService.facilities[0])}
                  className="bg-[#5A5A40] hover:bg-[#444430] text-white px-5 py-2.5 rounded-xl font-bold font-sans text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition shrink-0 active:scale-95"
                >
                  <span>担当事業所の詳細情報を見る</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory License Box - Authority Booster */}
        <div className="mt-8 p-4 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-start gap-3 max-w-3xl mx-auto">
          <AlertCircle size={18} className="text-zinc-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
            <strong>【有資格者対応・法令遵守】</strong> 各業態（デイサービス、居宅介護支援、訪問介護、放課後等デイサービス）はすべて高知県より障害児通所支援事業者および介護保険サービス事業所の指定許可を受けています。ケアプラン設計費は全額保険負担のため自己負担はありません。
          </p>
        </div>
      </div>
    </section>
  );
};
