import React, { useState } from "react";
import ResultModal from "../../ResultModal/ResultModal";

import Board from "../Board/Board";
import "./Game.css";
import calculateWinner from "../CalculateWinner/CalculateWinner";

const Game = () => {
  const [cellvalue, setcellvalue] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [Xisnext, setXisnext] = useState(true);
  const [isGameOver, setisGameOver] = useState(false);
  const [numberofturnleft, setnumberofturnleft] = useState(9);
  const [winner, setwinner] = useState();
  const [winningcombination, setwinningcombination] = useState([]);

  const isCellEmpty = (cellindex) => cellvalue[cellindex] === "";

  const restartGame = () => {
    setcellvalue(["", "", "", "", "", "", "", "", ""]);
    setXisnext(true);
    setisGameOver(false);
    setnumberofturnleft(9);
    setwinner();
    setwinningcombination([]);
  };

  const cellClicked = (cellindex) => {
    if (isCellEmpty(cellindex)) {
      const newcellvalue = [...cellvalue];
      newcellvalue[cellindex] = Xisnext ? "X" : "O";
      const newnumberofturnleft = numberofturnleft - 1;
      //calculate winner;
      const calcResult = calculateWinner(
        newcellvalue,
        cellindex,
        newnumberofturnleft
      );
      setcellvalue(newcellvalue);
      setXisnext(!Xisnext);
      setisGameOver(calcResult.hasResult);
      setnumberofturnleft(newnumberofturnleft);
      setwinner(calcResult.winner);
      setwinningcombination(calcResult.winnerCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellvalue={cellvalue}
          winningcombination={winningcombination}
          cellClicked={cellClicked}
        />
      </div>
      <ResultModal
        isgameOver={isGameOver}
        winner={winner}
        onNewGameClicked={restartGame}
      />
    </>
  );
};

export default Game;
