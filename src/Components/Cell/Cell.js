import React from "react";

import "./Cell.css";

const Cell = (props) => {
  let cellcontentclass = "cell-content";
  let cellclasses = "cell";
  if (props.canHighlight) {
    cellclasses += " winner";
  }
  if (props.value) {
    cellcontentclass += "populated";
  }
  return (
    <button className={cellclasses} onClick={props.onClick}>
      <span className={cellcontentclass}>{props.value}</span>
    </button>
  );
};

export default Cell;
