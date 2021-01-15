import React from "react";

function DisplayFB({fb}) {
if(fb === fizz){
    const letterFB = "F"
    const stringFB = "fizz"
    const 
}
  return (
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
            fillBoxes(fizz - 1, buzz);
            setFizz(fizz - 1);
          }}
        >
          -
        </button>
        <button
          className="btn plus-min"
          onClick={() => {
            fillBoxes(fizz + 1, buzz);
            setFizz(fizz + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default DisplayFB;
