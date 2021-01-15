import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  // Set a number for Fizz and Buzz
  const [fizz, setFizz] = useState(3);
  const [buzz, setBuzz] = useState(5);
  const [letters, setLetters] = useState(false);

  // Fill an Array with when to fizz,buzz and/or fizzbuzz
  const fillBoxes = (f, b) => {
    let newBoxes = [];
    for (let i = 1; i <= 100; i++) {
      if (i % f === 0 && i % b === 0) {
        newBoxes.push("fizzbuzz");
      } else if (i % f === 0) {
        newBoxes.push("fizz");
      } else if (i % b === 0) {
        newBoxes.push("buzz");
      } else {
        newBoxes.push(i);
      }
    }
    return newBoxes;
  };

  // More State Hooks: Boxes stores the current fizzbuzz array
  const [boxes, setBoxes] = useState(fillBoxes(fizz, buzz));
  const [isPlaying, setIsPlaying] = useState(false);

  const randomizeFB = () => {
    let fizzRand = Math.floor(Math.random() * (100 - 2) + 2);
    let buzzRand = Math.floor(Math.random() * (100 - 2) + 2);
    setBoxes(fillBoxes(fizzRand, buzzRand));
    setFizz(fizzRand);
    setBuzz(buzzRand);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => randomizeFB(), 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <main className="center-col">
      <header className="center-col">
        <h1 className="title">
          <span className="fizz-text">Fizz</span>
          <span className="buzz-text">Buzz</span>
          <span className="fizzbuzz-text">Vizzualizer</span>
        </h1>
        <section className="settings">
          <div className="label-set center-col">
            <label htmlFor="fizz" className="fizz-text">
              Fizz:
            </label>
            <input
              className="fizz-text"
              name="fizz"
              type="number"
              min="2"
              max="100"
              value={fizz}
              onChange={(e) => setFizz(e.target.value)}
            />
            <div className="row">
              <button
                className="btn plus-min"
                onClick={() => setFizz(fizz - 1)}
              >
                -
              </button>
              <button
                className="btn plus-min"
                onClick={() => setFizz(fizz + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="btn-container">
            <button className="btn" onClick={randomizeFB}>
              RANDOM
            </button>
            <button
              className={`btn ${!isPlaying || "autoplay"}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "STOP" : "AUTO"}
            </button>
            <button
              className="btn"
              onClick={() => {
                setBoxes(fillBoxes(fizz, buzz));
              }}
            >
              APPLY
            </button>
          </div>
          <div className="label-set center-col">
            <label htmlFor="buzz" className="buzz-text">
              Buzz:
            </label>
            <input
              className="buzz-text"
              name="buzz"
              type="number"
              min="2"
              max="100"
              value={buzz}
              onChange={(e) => setBuzz(e.target.value)}
            />
            <div className="row">
              <button
                className="btn plus-min"
                onClick={() => setBuzz(buzz - 1)}
              >
                -
              </button>
              <button
                className="btn plus-min"
                onClick={() => {
                  setBuzz(buzz + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </section>
      </header>

      <section className="container">
        {boxes.map((box, index) => {
          return <Box box={box} key={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
