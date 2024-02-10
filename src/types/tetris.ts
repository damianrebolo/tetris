import { MultiBoard } from "./board";
import { Piece } from "./piece";

export type Tetris = {
  $pieceCanvas: HTMLCanvasElement;
  $pieceContext: CanvasRenderingContext2D;
  $canvas: HTMLCanvasElement;
  $context: CanvasRenderingContext2D;
  board: MultiBoard<0 | "o" | "i" | "s" | "z" | "l" | "j" | "t">;
  piece: Piece;
  nextPiece: Piece;
  isPlaying: boolean;
  score: number;
  level: number;
  linesCleared: number;
};
