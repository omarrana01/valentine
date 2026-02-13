import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Are you positive?",
      "Wrong button maybe?",
      "aliah pls",
      "Negative",
      "But you should",
      "Think again?",
      "Are you absolutely certain?",
      "Maybe you hit by mistake!",
      "why u do this",
      "ma'am pls",
      "Change of heart?",
      "ok but like econsider?",
      "Final answer?",
      "No pls :(",
      "Final answer?",
      "You're breaking my heart :(",
      "plsplsplsplsplspls",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          {yesPressed ? (
  <>
    <img src="https://media.tenor.com/gUiulzyxfzYAAAAi/bear-kiss-bear-kisses.gif" />

    <div className="text-4xl md:text-6xl font-bold my-4 text-center">
      Happy Valentine #1 together jaan, you said yes and that made my whole world brighter!
    </div>

    <p className="text-lg md:text-xl max-w-2xl text-center mt-4">
      I don’t know what I did to deserve someone as sweet, intelligent, beautiful,
      and amazing as you. I’m so grateful and proud to call you mine.
      You’re my favorite person and I can't wait for us to spend forever together.
    </p>

    <p className="text-lg text-center mt-4">
      I love you, Aliah.
    </p>

    <p className="text-lg text-center mt-2">
      — Omar
    </p>
  </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Aliah, will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
