import React from "react";

function DisplayFB({ fb, change, fbState }) {
  return (
    <div className="center-col display">
      <label htmlFor={fb} className={`${fb} text`}>
        Fizz
      </label>
      <input
        className={`${fb} text`}
        name={fb}
        type="number"
        value={fbState}
        onInput={change}
      />
    </div>
  );
}

export default DisplayFB;
