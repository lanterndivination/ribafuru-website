import React, { useEffect } from "react";
import { motion } from "motion/react";

import centerLogo from "../assets/center-logo.png";
import imgHonoka from "../assets/honoka.png";
import imgTsunagi from "../assets/tsunagi.png";
import imgKizuki from "../assets/kizuki.png";
import imgAkari from "../assets/akari.png";
import imgWagaya from "../assets/wagaya.png";

interface OpeningScreenProps {
    onComplete: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onComplete }) => {
    // 4秒後にアニメーションを終了してメイン画面へ移行
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    // 配置する5つの施設データ
    const facilities = [
        { id: "honoka", src: imgHonoka, name: "ほのか", angleOffset: -140 },
        { id: "tsunagi", src: imgTsunagi, name: "つなぎ", angleOffset: -70 },
        { id: "kizuki", src: imgKizuki, name: "きづき", angleOffset: 0 },
        { id: "akari", src: imgAkari, name: "あかり", angleOffset: 70 },
        { id: "wagaya", src: imgWagaya, name: "わがや", angleOffset: 140 },
    ];

    // 画面いっぱいに大きく広がるための半径（ピクセル）
    const radius = 220;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#FAF9F6] flex items-center justify-center overflow-hidden"
        >
            {/* 画面いっぱいのステージ */}
            <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">

                {/* 中央のメインロゴ（Libafuru雲） */}
                <motion.img
                    src={centerLogo}
                    alt="Libafuru"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="absolute z-30 w-44 md:w-52 object-contain drop-shadow-2xl"
                />

                {/* 周囲の施設と点線を描画 */}
                {facilities.map((facility, index) => {
                    // 綺麗に円状に散らばる角度計算
                    const angle = (facility.angleOffset * Math.PI) / 180;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <div key={facility.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">

                            {/* 外側に飛び出す各施設のイラスト */}
                            <motion.div
                                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                animate={{ x, y, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.5 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12
                                }}
                                className="absolute z-20 flex flex-col items-center"
                            >
                                <img
                                    src={facility.src}
                                    alt={facility.name}
                                    className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg"
                                />
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};