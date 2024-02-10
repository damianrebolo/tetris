import { Tetris } from "./types/tetris";

export {};

declare global {
  interface Window {
    tetris: Tetris;
  }
}
