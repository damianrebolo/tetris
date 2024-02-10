import { PIECES } from "../constants";
// import { PiecePosition } from "../types/piece";

export const rotatePiece = () => {
  const newRotation =
    window.tetris.piece.rotation === 3 ? 0 : window.tetris.piece.rotation + 1;

  const newShape = PIECES[window.tetris.piece.key].shape[newRotation];

  // TODO - Check if the new position is valid
  // const { x, y } = window.tetris.piece.position;

  window.tetris = {
    ...window.tetris,
    piece: {
      ...window.tetris.piece,
      rotation: newRotation,
      shape: newShape,
      // position: newPosition,
    },
  };
};
