import { LVL_SPEED } from "../constants";
import { checkLinesToClear } from "./clear-lines";
import { checkIfCollide } from "./collide-piece";
import { joinPieceAsDashboard } from "./join-piece-dashboard";

let dropCounter = 0;
let lastTime = 0;
export const autoDrop = (time: number) => {
  let { level, piece } = window.tetris;

  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  const gameSpeed = LVL_SPEED[level - 1];
  if (dropCounter > gameSpeed) {
    dropCounter = 0;
    // check if piece can move down
    if (checkIfCollide()) {
      console.log("game over");
      window.tetris.isPlaying = false;
      return;
    }

    piece.position.y++;
    if (checkIfCollide()) {
      piece.position.y--;
      joinPieceAsDashboard();
      checkLinesToClear();
    }
  }
};
