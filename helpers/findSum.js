const findSum = (draws, board) => {
  let total = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let number = board[row][col];
      if (!draws.includes(number)) {
        total += number;
      }
    }
  }
  let realTotal = total * draws[draws.length - 1];

  return realTotal;
};

export default findSum;
