import { useState, useEffect } from "react";
import bgImage from "./assets/bg1.webp";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "40%" });
  const [noCount, setNoCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop: move button
  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  // Mobile: increment phrase
  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Double check pls",
      "nope",
      "negative",
      "lady pls",
      "stop it",
      "you dont have a choice",
      "hey siri play heartless by Kanye",
      "maam what u doing huh",
      "aliah no",
      "sooooo rude :("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
        className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
      {yesPressed ? (
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-md w-full text-center border border-white/40">
          <img
            src="https://media.tenor.com/gUiulzyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="cute bears"
            className="w-40 mx-auto mb-4"
          />

          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Happy Valentine Day #1 jaan 💕
          </h1>

          <p className="text-lg leading-relaxed mb-3">
            You said yes and that made my whole world brighter.
          </p>

          <p className="text-lg leading-relaxed mb-3">
            I don’t know what I did to deserve someone as sweet,
            intelligent, beautiful, and amazing as you.
            I’m so grateful and proud to call you mine.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            You’re my favorite person, and I can’t wait
            for us to spend forever together.
          </p>

          <p className="text-xl font-semibold">
            I love you Aliah.
          </p>

          <p className="mt-2 opacity-60">
            — Omar
          </p>

          <p className="mt-3 text-sm opacity-50">
            February 14, 2026
          </p>
        </div>
      ) : (
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-md w-full text-center relative">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Will you be my Valentine? 💖
          </h1>

          <div className="relative h-40">
            <button
              onClick={() => setYesPressed(true)}
              className="px-6 py-3 bg-rose-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition transform duration-200"
            >
              Yes
            </button>

            <button
              onClick={isMobile ? handleNoClick : undefined}
              onMouseEnter={!isMobile ? moveNoButton : undefined}
              style={
                !isMobile
                  ? {
                      position: "absolute",
                      top: noPosition.top,
                      left: noPosition.left,
                      transform: "translate(-50%, -50%)",
                    }
                  : { marginLeft: "10px" }
              }
              className="px-6 py-3 bg-gray-300 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              {isMobile ? getNoButtonText() : "No"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
