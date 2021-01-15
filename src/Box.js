import React from "react";

function Box(props) {
  const { box, index } = props;
  return <div className={`box ${box}`}></div>;
}

export default Box;
