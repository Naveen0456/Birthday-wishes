import "./CandlePage.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import candle from "./assets/candle.jpg";

function CandlePage({ onNext }) {
    const [blown, setBlown] = useState(false);

    const handleBlow = () => {
        if (!blown) {
            setBlown(true);
        }
    };

    return (
        <div className={`candle-container ${blown ? "celebrate" : ""}`}>

            {/* Screen Flash */}
            {blown && <div className="screen-flash"></div>}

            {/* Background Stars */}
            <div className="stars">
                {Array.from({ length: 35 }).map((_, index) => (
                    <span
                        key={index}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 4}s`,
                        }}
                    >
                        ✨
                    </span>
                ))}
            </div>

            {/* Floating Hearts */}
            {blown && (
                <div className="hearts">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <span
                            key={index}
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                fontSize: `${18 + Math.random() * 20}px`,
                            }}
                        >
                            ❤️
                        </span>
                    ))}
                </div>
            )}

            {/* Sparkles */}
            {blown && (
                <div className="sparkles">
                    {Array.from({ length: 40 }).map((_, index) => (
                        <span
                            key={index}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        >
                            ✨
                        </span>
                    ))}
                </div>
            )}

            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                🕯️ Blow the Candle Maa ❤️
            </motion.h1>

            <motion.p
                className="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Close your eyes and make a wish ✨
            </motion.p>
            {/* Add this block here */}
            {!blown && (
                <motion.div
                    className="click-guide"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.2,
                    }}
                >
                    👇 Tap the Candle to Blow It 👇
                </motion.div>
            )}

            {/* Candle */}
            <motion.div

                className="candle-wrapper"
                whileTap={{ scale: 0.95 }}
                onClick={handleBlow}
            >
                {!blown && <div className="glow"></div>}

                <AnimatePresence>
                    {!blown && (
                        <motion.div
                            className="flame"
                            exit={{
                                opacity: 0,
                                scale: 0,
                                y: -50,
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                        />
                    )}
                </AnimatePresence>

                {blown && (
                    <motion.div
                        className="smoke"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        ☁️
                    </motion.div>
                )}

                <motion.img
                    src={candle}
                    className="candle-img"
                    alt="Candle"
                    animate={
                        blown
                            ? { scale: 1.05 }
                            : {
                                y: [0, -8, 0],
                            }
                    }
                    transition={{
                        repeat: blown ? 0 : Infinity,
                        duration: 3,
                    }}
                />
            </motion.div>

            {/* Celebration Message */}
            <AnimatePresence>
                {blown && (
                    <motion.div
                        className="wish-box"
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <motion.h2
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                        >
                            💖 Wish Made Successfully 💖
                        </motion.h2>

                        <motion.button
                            className="continue-btn"
                            whileHover={{
                                scale: 1.08,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            onClick={onNext}
                        >
                            Continue ❤️
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default CandlePage;