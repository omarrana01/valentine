import { useState } from "react";
import bear from "./assets/bear.gif"; // download the gif locally

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 px-6 relative overflow-hidden">

      {yesPressed ? (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-lg w-full text-center fade-in">
          <img
            src={bear}
            alt="cute bears"
            className="w-40 mx-auto mb-6"
          />

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

          <p className="mt-4 text-sm opacity-50">
            February 14, 2026
          </p>
        </div>
      ) : (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
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
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
                transform: "translate(-50%, -50%)",
              }}
              className="px-6 py-3 bg-gray-300 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
