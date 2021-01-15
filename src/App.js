import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  // Set a number for Fizz and Buzz
  const [fizz, setFizz] = useState(3);
  const [buzz, setBuzz] = useState(5);
  const [show, setShow] = useState(false);

  // Fill an Array with when to fizz,buzz and/or fizzbuzz
  const fillBoxes = (f, b) => {
    let newBoxes = [];
    for (let i = 1; i <= 100; i++) {
      if (i % f === 0 && i % b === 0) {
        newBoxes.push("FB");
      } else if (i % f === 0) {
        newBoxes.push("F");
      } else if (i % b === 0) {
        newBoxes.push("B");
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

  const fizzChange = (e) => {
    setBoxes(fillBoxes(e.target.value, buzz));
    setFizz(e.target.value);
  };
  const buzzChange = (e) => {
    setBoxes(fillBoxes(fizz, e.target.value));
    setBuzz(e.target.value);
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
          <span className="F-text">Fizz</span>
          <span className="B-text">Buzz</span>
          <span className="FB-text">Vizzualizer</span>
        </h1>
        <section className="settings">
          {/* FIZZ ZONE */}
          <div className="center-col">
            <label htmlFor="fizz" className="F-text">
              Fizz
            </label>
            <input
              className="F-text"
              name="fizz"
              type="number"
              min="2"
              max="100"
              value={fizz}
              onChange={fizzChange}
            />
            <div className="row">
              <button
                className="btn plus-min"
                onClick={() => {
                  setBoxes(fillBoxes(fizz - 1, buzz));
                  setFizz(fizz - 1);
                }}
              >
                -
              </button>
              <button
                className="btn plus-min"
                onClick={() => {
                  setBoxes(fillBoxes(fizz + 1, buzz));
                  setFizz(fizz + 1);
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTON ZONE */}
          <div className="btn-container">
            <button className="btn" onClick={() => setShow(!show)}>
              {show ? "HIDE FB" : "SHOW FB"}
            </button>
            <button className="btn" onClick={randomizeFB}>
              RANDOM
            </button>
            <button
              className={`btn ${!isPlaying || "autoplay"}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "STOP" : "AUTO"}
            </button>
          </div>

          {/* BUZZ ZONE */}
          <div className="center-col">
            <label htmlFor="B" className="B-text">
              Buzz
            </label>
            <input
              className="B-text"
              name="buzz"
              type="number"
              min="2"
              max="100"
              value={buzz}
              onChange={buzzChange}
            />
            <div className="row">
              <button
                className="btn plus-min"
                onClick={() => {
                  setBoxes(fillBoxes(fizz, buzz - 1));
                  setBuzz(buzz - 1);
                }}
              >
                -
              </button>
              <button
                className="btn plus-min"
                onClick={() => {
                  setBoxes(fillBoxes(fizz, buzz + 1));
                  setBuzz(buzz + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </section>
      </header>

      {/* THE GRID */}
      <section className="grid">
        {boxes.map((box, index) => {
          return <Box box={box} show={show} key={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
