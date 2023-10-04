import lastWinBoard from './helpers/lastWinBoard.js';
import findSum from './helpers/findSum.js';
import { convertData } from './data/convertToArr.js';
import { input } from './data/real_data.js';

function solution() {
  const drawNumbers = convertData(input).draws;
  const boards = convertData(input).tables;

  const result = lastWinBoard(drawNumbers, boards);
  const boardIndex = result.lastBoardToWin;
  const drawsToWin = result.maxDraws;

  let final;
  if (boardIndex !== -1) {
    const lastWinningBoard = boards[boardIndex];
    const drawsUpToWin = drawNumbers.slice(0, drawsToWin);

    final = findSum(drawsUpToWin, lastWinningBoard);
  } else {
    final = 'No winning board found';
  }
  return final;
}

solution();
