export const convertData = (rawData) => {
  const rawDrawsMatch = rawData.match(/Drawn?\s*numbers?:\s*([\d,]+)/i);
  const rawDraws = rawDrawsMatch ? rawDrawsMatch[1] : '';
  const rawBoardsMatch = rawData.match(/Board[s]?:\s*([\s\d]+)$/i);
  const rawBoards = rawBoardsMatch ? rawBoardsMatch[1] : '';

  const tables = [];
  const tableStrings = rawBoards
    .trim()
    .split('\n\n')
    .filter((tableStr) => tableStr.trim() !== '');

  for (const tableString of tableStrings) {
    let table = tableString
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((row) => {
        return row.trim().split(/\s+/).map(Number);
      });
    tables.push(table);
  }

  const draws = rawDraws
    .split(',')
    .map((number) => number.trim())
    .filter((number) => number !== '')
    .map(Number);

  return { draws, tables };
};
