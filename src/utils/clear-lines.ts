import { BOARD_WIDTH, LEVEL_ADVANCES } from "../constants";

export const checkLinesToClear = () => {
  let { board } = window.tetris;

  let linesToClear = 0;
  board.forEach((row, y) => {
    if (row.every((value) => value !== 0)) {
      linesToClear++;
      board.splice(y, 1);
      board.unshift(Array(BOARD_WIDTH).fill(0));
    }
  });

  if (linesToClear > 0) {
    window.tetris = {
      ...window.tetris,
      linesCleared: window.tetris.linesCleared + linesToClear,
      level: Math.ceil(window.tetris.linesCleared + 1 / LEVEL_ADVANCES) + 1,
      score:
        window.tetris.score +
        (linesToClear < 4
          ? 100 * linesToClear
          : linesToClear === 4
          ? 800
          : 1200),
    };
  }
};
