import React from "react";
import "./ResultModal.css";
import classNames from "classnames";
const ResultModal = (props) => {
  const resultModalclass = classNames({
    "modal-open": props.isgameOver,
  });
  const message = props.winner ? `Winner is ${props.winner}.` : "It is a tie.";
  return (
    <div id="modal-overlay" className={resultModalclass}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={props.onNewGameClicked}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultModal;
