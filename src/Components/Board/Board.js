import React from "react";
import Cell from "../Cell/Cell";

import "./Board.css";

const Board = (props) => {
  const cell = props.cellvalue.map((values, index) => {
    const canHighlight =
      props.winningcombination && props.winningcombination.indexOf(index) >= 0;
    return (
      <Cell
        key={index}
        value={values}
        canHighlight={canHighlight}
        onClick={() => props.cellClicked(index)}
      />
    );
  });
  return (
    <>
      <div id="board">{cell}</div>
    </>
  );
};

export default Board;
