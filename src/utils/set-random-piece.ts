import { PIECES } from "../constants";
import { Piece, PieceKeys } from "../types/piece";

export const setRandomPiece = (excludeKey: PieceKeys = "o") => {
  // Step 1: Get keys as an array
  const keysArray: PieceKeys[] = Object.keys(PIECES).filter(
    (key) => key !== excludeKey
  ) as PieceKeys[];

  // Step 2: Generate a random index
  const randomIndex = Math.floor(Math.random() * keysArray.length);

  // Step 3: Use the random index to get a random key
  const newKey = keysArray[randomIndex];

  const newPiece = PIECES[newKey];

  // Step 4: Generate a random index from array
  const randomArrayIndex = Math.floor(Math.random() * newPiece.shape.length);

  // Step 2: Use the random index to get a random element
  const randomShape = newPiece.shape[randomArrayIndex];

  const piece: Piece = {
    key: newKey,
    shape: randomShape,
    rotation: randomArrayIndex,
    position: { y: 0, x: 6 },
    color: newPiece.color,
  };

  return piece;
};
