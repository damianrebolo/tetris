import { setRandomPiece } from "./set-random-piece";

export const joinPieceAsDashboard = () => {
  const { piece, board } = window.tetris;

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        board[y + piece.position.y][x + piece.position.x] = piece.key;
      }
    });
  });

  window.tetris = {
    ...window.tetris,
    piece: window.tetris.nextPiece,
    nextPiece: setRandomPiece(),
  };
};
