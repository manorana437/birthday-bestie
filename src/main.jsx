import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Sparkles = () => (
  <div className="sparkles" aria-hidden="true">
    {Array.from({length: 34}, (_, i) => (
      <i key={i} style={{
        "--x": `${(i * 37) % 100}%`,
        "--y": `${(i * 61) % 100}%`,
        "--d": `${(i % 7) * .35}s`,
        "--s": `${2 + (i % 4)}px`
      }}>✦</i>
    ))}
  </div>
);

function App() {
  const [entered, setEntered] = useState(false);
  const [letter, setLetter] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div className={entered ? "site entered" : "site"}>
      {!entered ? (
        <section className="opening">
          <video ref={videoRef} className="bg-video" autoPlay muted loop playsInline>
            <source src="/heart-animation.mp4" type="video/mp4" />
          </video>
          <div className="video-tint" />
          <div className="vignette" />
          <Sparkles />

          <div className="opening-top">A little surprise for you</div>

          <div className="opening-content">
            <div className="small-title">FOR MY FAVORITE PERSON</div>
            <h1>Happy Birthday</h1>
            <h2>My Bestie <span>♡</span></h2>
            <p>Some things are better felt than said.</p>
            <button className="open-btn" onClick={() => setEntered(true)}>
              <span>Open your surprise</span>
              <b>→</b>
            </button>
          </div>

          <div className="bottom-hint">click to enter <span>↓</span></div>
        </section>
      ) : (
        <section className="birthday">
          <div className="birthday-glow glow-one" />
          <div className="birthday-glow glow-two" />
          <Sparkles />

          <header>
            <span>07 · 09 · 2026</span>
            <span>Made with love ♡</span>
          </header>

          <div className="birthday-layout">
            <div className="photo-column">
              <div className="photo-halo" />
              <div className="photo-frame">
                <img src="/bestie-photo.jpeg" alt="My bestie" />
              </div>
              <div className="photo-tag">THE BIRTHDAY GIRL ✦</div>
            </div>

            <div className="message-column">
              <div className="small-title">TODAY IS YOUR DAY</div>
              <h3>Happy Birthday<br/><em>My Bestie.</em></h3>
              <div className="line" />
              <p className="lead">
                To the person who makes ordinary moments feel special —
                I hope your new year is full of beautiful memories, genuine
                smiles, endless happiness and everything your heart deserves.
              </p>

              <button className="message-btn" onClick={() => setLetter(!letter)}>
                {letter ? "Close my message" : "Read my message"} <span>♡</span>
              </button>

              <div className={letter ? "letter visible" : "letter"}>
                <p>
                  You are not just my bestie, you are one of those rare people
                  who make life brighter simply by being there. Thank you for
                  every laugh, every little memory and every moment that made
                  our friendship special.
                </p>
                <p>
                  May this birthday open the door to your happiest chapter yet.
                  Keep smiling, keep shining, and never forget how loved you are. 💜
                </p>
                <strong>— With lots of love, always.</strong>
              </div>
            </div>
          </div>

          <footer>
            <span>Forever & always</span>
            <b>♥</b>
            <span>My Bestie</span>
          </footer>
        </section>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
