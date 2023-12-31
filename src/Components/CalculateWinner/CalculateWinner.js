const winningMatrix = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [5, 8],
    [4, 6],
  ],
  3: [
    [0, 6],
    [4, 5],
  ],
  4: [
    [2, 6],
    [3, 5],
    [1, 7],
    [0, 8],
  ],
  5: [
    [3, 4],
    [2, 8],
  ],
  6: [
    [7, 8],
    [0, 3],
    [2, 4],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [6, 7],
    [2, 5],
    [0, 4],
  ],
};
const calculateWinner = (cellvalue, cellindex, newnumberofturnleft) => {
  const winningRange = winningMatrix[cellindex];
  for (let i = 0; i < winningRange.length; i++) {
    const currentvalue = cellvalue[cellindex];
    const firstOption = cellvalue[winningRange[i][0]];
    const secondOption = cellvalue[winningRange[i][1]];
    if (currentvalue === firstOption && firstOption === secondOption) {
      return {
        hasResult: true,
        winner: currentvalue,
        winnerCombination: [cellindex, winningRange[i][0], winningRange[i][1]],
      };
    }
    if (newnumberofturnleft === 0) {
      return {
        hasResult: true,
        winner: undefined,
        winnerCombination: [],
      };
    }
  }
  return {
    hasResult: false,
    winner: undefined,
    winnerCombination: [],
  };
};
export default calculateWinner;
