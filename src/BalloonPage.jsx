import "./BalloonPage.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "./assets/naveen1.png";

function BalloonPage({ onNext }) {
  const texts = [
    "You",
    "are",
    "so",
    "special"
  ];

  const [state, setState] = useState([
    "balloon",
    "balloon",
    "balloon",
    "balloon"
  ]);

  const popBalloon = (index) => {
    const arr = [...state];

    arr[index] = "pop";
    setState(arr);

    setTimeout(() => {
      const next = [...arr];
      next[index] = "text";
      setState(next);
    }, 500);
  };

  useEffect(() => {
    const completed = state.every(item => item === "text");

    if (completed) {
      setTimeout(() => {
        onNext();
      }, 2000);
    }
  }, [state, onNext]);

  return (
    <div
      className="balloon-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>✨ Pop up all 4 Balloons ✨</h1>

      <div className="balloons">
        {texts.map((text, index) => (
          <div
            className="balloon-box"
            key={index}
          >
            {state[index] === "balloon" && (
              <motion.div
                className="balloon"
                onClick={() => popBalloon(index)}
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}
                animate={{
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                🎈
              </motion.div>
            )}

            {state[index] === "pop" && (
              <div className="pop">
                💥
              </div>
            )}

            {state[index] === "text" && (
              <div className="message">
                {text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BalloonPage;