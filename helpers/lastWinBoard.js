export default function lastWinBoard(draws, boards) {
  let maxDraws = 0;
  let lastBoardToWin = -1;

  for (let i = 0; i < boards.length; i++) {
    let board = boards[i];
    let countRows = Array(5).fill(0);
    let countColumns = Array(5).fill(0);

    for (let j = 0; j < draws.length; j++) {
      let draw = draws[j];
      for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
          if (board[row][column] === draw) {
            countRows[row]++;
            countColumns[column]++;
          }
        }
      }
      let isBingo =
        countRows.some((result) => result === 5) ||
        countColumns.some((result) => result === 5);
      if (isBingo) {
        if (j + 1 > maxDraws) {
          maxDraws = j + 1;
          lastBoardToWin = i;
        }
        break;
      }
    }
  }
  return { lastBoardToWin, maxDraws };
}
