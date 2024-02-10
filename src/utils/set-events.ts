import { checkLinesToClear } from "./clear-lines";
import { checkIfCollide } from "./collide-piece";
import { joinPieceAsDashboard } from "./join-piece-dashboard";
import { rotatePiece } from "./rotate-piece";

export const setEvents = () => {
  document.addEventListener("keydown", (event) => {
    let { piece } = window.tetris;

    const moveDown = () => {
      piece.position.y++;
      if (checkIfCollide()) {
        piece.position.y--;
        joinPieceAsDashboard();
        checkLinesToClear();
      } else {
        moveDown();
      }
    };

    switch (event.key) {
      case "ArrowLeft":
        piece.position.x--;
        if (checkIfCollide()) piece.position.x++;
        break;
      case "ArrowRight":
        piece.position.x++;
        if (checkIfCollide()) piece.position.x--;
        break;
      case "ArrowDown":
        piece.position.y++;
        if (checkIfCollide()) {
          piece.position.y--;
          joinPieceAsDashboard();
          checkLinesToClear();
        }
        break;
      case "ArrowUp":
        rotatePiece();
        break;
      case " ":
        moveDown();
        break;
      default:
        console.log(event.key);
        break;
    }
  });
};
