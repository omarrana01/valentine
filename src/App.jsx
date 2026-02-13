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
  className="min-h-[100svh] flex items-center justify-center px-4 py-10 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="relative w-full max-w-xl">

    {/* YES CARD */}
    <div
      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
        yesPressed ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="<div className="relative w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Happy Valentine Day #1 jaan 💕
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          You said yes and that made my whole world brighter.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I don’t know what I did to deserve someone as sweet,
          intelligent, beautiful, and amazing as you.
          I’m so grateful and proud to call you mine.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          You’re my favorite person, and I can’t wait
          for us to spend forever together.
        </p>

        <p className="text-xl font-semibold">
          I love you Aliah.
        </p>

        <p className="mt-2 opacity-60">
          - Omar
        </p>

        <p className="mt-3 text-sm opacity-50">
          February 14, 2026
        </p>
      </div>
    </div>

    {/* QUESTION CARD */}
    <div
      className={`transition-all duration-500 ease-in-out ${
        yesPressed ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="bg-white/75 backdrop-blur-xl rounded-3xl shadow-2xl px-8 py-10 text-center border border-white/40">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Aliah, will you be my Valentine? 💖
        </h1>

        <div className="flex flex-col items-center gap-4 relative">
          <button
            onClick={() => setYesPressed(true)}
            className="px-8 py-3 bg-rose-500 text-white rounded-xl text-lg font-semibold hover:scale-105 transition duration-200"
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
                : {}
            }
            className="px-8 py-3 bg-gray-300 rounded-xl text-lg font-semibold transition duration-300"
          >
            {isMobile ? getNoButtonText() : "No"}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
    
export default App;
