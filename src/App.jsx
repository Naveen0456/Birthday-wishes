import "./App.css";
import { useState } from "react";

import BalloonPage from "./BalloonPage";
import CandlePage from "./CandlePage";
import RosePage from "./RosePage";
import GiftPage from "./GiftPage";

import teddyLeft from "./assets/naveen3.jpeg";
import teddyRight from "./assets/naveen3.jpeg";
import cake from "./assets/teddy.jpeg";


function App() {

  // 1 = Birthday Page
  // 2 = Balloon Page
  // 3 = Candle Page

  const [page, setPage] = useState(1);
  console.log("Current Page:", page);

  // Balloon Page
  if (page === 2) {
    return (
      <BalloonPage
        onNext={() => setPage(3)}
      />
    );
  }

  // Candle Page
  if (page === 3) {
    return (
      <CandlePage
        onNext={() => setPage(4)}
      />
    );
  }

  if (page === 4) {
    return (
      <RosePage
        onNext={() => setPage(5)}
      />
    );
  }

  if (page === 5) {
  return <GiftPage />;
}

  // Birthday Page

  return (
    <div className="container">

      {/* Floating Hearts */}

      <div className="hearts">
        <span>❤</span>
        <span>💕</span>
        <span>❤</span>
        <span>💖</span>
        <span>❤</span>
        <span>💕</span>
        <span>❤</span>
        <span>💖</span>
        <span>❤</span>
      </div>

      <div className="content">

        <h1>🎉 Happy Birthday 🎉</h1>

        <h2>
          HemaLatha (Pandu)
          <span className="love">
            💕💕
          </span>
        </h2>

        <div className="image-section">

          <img
            src={teddyLeft}
            className="teddy"
            alt=""
          />

          <img
            src={cake}
            className="cake"
            alt=""
          />

          <img
            src={teddyRight}
            className="teddy"
            alt=""
          />

        </div>

        <h3 className="question">
          Are you excited for what's next?
        </h3>

        <button
          className="btn"
          onClick={() => setPage(2)}
        >
          Yes 💖
        </button>

      </div>

    </div>
  );
}

export default App;