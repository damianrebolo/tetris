import { PIECES } from "../constants";
import { PieceKeys } from "../types/piece";

export const clearBoard = () => {
  const { $canvas, $context, $pieceCanvas, $pieceContext, nextPiece } =
    window.tetris;

  $context.fillStyle = "#000";
  $context.fillRect(0, 0, $canvas.width, $canvas.height);

  $pieceContext.fillStyle = "#151220";
  $pieceContext.fillRect(0, 0, $pieceCanvas.width, $pieceCanvas.height);

  nextPiece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        $pieceContext.fillStyle = nextPiece.color;
        $pieceContext.fillRect(x, y, 1, 1);
        // $pieceContext.strokeRect(x, y, 1, 1);
      }
    });
  });
};

export const drawBoard = () => {
  const { $context, board } = window.tetris;

  board.forEach((row, y) => {
    row.forEach((value: 0 | PieceKeys, x) => {
      if (value !== 0) {
        $context.fillStyle = PIECES[value].color;
        $context.fillRect(x, y, 1, 1);
      }
    });
  });
};
