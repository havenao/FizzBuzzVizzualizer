import React from "react";

function Box({ box, show }) {
  return <div className={`box ${box}`}>{show ? box : ""}</div>;
}

export default Box;
