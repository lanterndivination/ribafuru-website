import React, { useState } from "react";
// ※プロジェクトの設定に合わせて "motion/react" または "framer-motion" に変更してください
import { motion } from "motion/react";

// ① 準備したPNG画像をインポート
import centerLogo from "../assets/center-logo.png";
import imgHonoka from "../assets/honoka.png";
import imgTsunagi from "../assets/tsunagi.png";
import imgKizuki from "../assets/kizuki.png";
import imgAkari from "../assets/akari.png";
import imgWagaya from "../assets/wagaya.png";

interface LibafulNetworkMapProps {
  onSelectFacility: (id: string) => void;
  activeFacilityId: string;
}

export const LibafulNetworkMap: React.FC<LibafulNetworkMapProps> = ({
  onSelectFacility,
  activeFacilityId,
}) => {
  // ② 画像と対応するIDの紐付けリスト
  const facilities = [
    { id: "honoka", src: imgHonoka, name: "ほのか" },
    { id: "tsunagi", src: imgTsunagi, name: "つなぎ" },
    { id: "kizuki", src: imgKizuki, name: "きづき" },
    { id: "akari", src: imgAkari, name: "あかり" },
    { id: "wagaya", src: imgWagaya, name: "わがや" },
  ];

  const radius = 140; // 広がる距離（画像サイズやスマホ表示に合わせて数値を調整してください）

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-xl mx-auto h-[500px] select-none p-4 overflow-hidden flex items-center justify-center">

        {/* ③ 中央のメインロゴ画像 */}
        <motion.img
          src={centerLogo}
          alt="Libafuru"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute z-20 w-36 h-36 object-contain drop-shadow-xl"
        />

        {/* ④ 周囲の施設と接続線を描画 */}
        {facilities.map((facility, index) => {
          // 5つの施設を円状に均等配置するための角度計算
          const angle = (index / facilities.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const isActive = activeFacilityId === facility.id;

          return (
            <div key={facility.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {/* 各施設の画像 */}
              <motion.img
                src={facility.src}
                alt={facility.name}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                whileInView={{ x, y, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                viewport={{ once: true, amount: 0.5 }}
                // クリック時の処理と、アクティブ状態の見た目の変化
                onClick={() => onSelectFacility(facility.id)}
                animate={isActive ? { scale: 1.15, filter: "drop-shadow(0 10px 8px rgba(0,0,0,0.2))" } : { scale: 1, filter: "drop-shadow(0 4px 3px rgba(0,0,0,0.1))" }}
                className={`absolute z-30 w-24 h-24 object-contain pointer-events-auto cursor-pointer transition-all duration-300 ${isActive ? "ring-2 ring-offset-2 ring-amber-400 rounded-full" : "hover:scale-110"
                  }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};