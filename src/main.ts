import "./style.css";
import { BLOCK_SIZE, BOARD_HEIGHT, BOARD_WIDTH } from "./constants";
import { drawBoard, clearBoard } from "./utils/draw-board";
import { drawPiece } from "./utils/draw-piece";
import { autoDrop } from "./utils/auto-drop";
import { setEvents } from "./utils/set-events";
import { setRandomPiece } from "./utils/set-random-piece";

const pieceCanvas = document.getElementById(
  "piece-canvas"
) as HTMLCanvasElement;
const pieceContext = pieceCanvas.getContext("2d") as CanvasRenderingContext2D;
pieceCanvas.width = BLOCK_SIZE * 4;
pieceCanvas.height = BLOCK_SIZE * 4;
pieceContext.scale(BLOCK_SIZE, BLOCK_SIZE);

const boardCanvas = document.getElementById(
  "board-canvas"
) as HTMLCanvasElement;
const boardContext = boardCanvas.getContext("2d") as CanvasRenderingContext2D;
boardCanvas.width = BLOCK_SIZE * BOARD_WIDTH;
boardCanvas.height = BLOCK_SIZE * BOARD_HEIGHT;
boardContext.scale(BLOCK_SIZE, BLOCK_SIZE);

const firstPiece = setRandomPiece();
window.tetris = {
  $pieceCanvas: pieceCanvas,
  $pieceContext: pieceContext,
  $canvas: boardCanvas,
  $context: boardContext,
  board: new Array(25).fill(0).map(() => new Array(14).fill(0)),
  piece: firstPiece,
  nextPiece: setRandomPiece(firstPiece.key),
  isPlaying: false,
  score: 0,
  level: 1,
  linesCleared: 0,
};

const $score = document.getElementById("score") as HTMLElement;
const $level = document.getElementById("level") as HTMLElement;
const $startButton = document.getElementById("start-button") as HTMLElement;

$startButton.onclick = () => {
  console.log("start button clicked");
  window.tetris.isPlaying = !window.tetris.isPlaying;
  $startButton.innerHTML = window.tetris.isPlaying ? "Pause" : "Start";
  if (window.tetris.isPlaying) {
    $startButton.blur();
    boardCanvas.focus();
    gameLoop();
  }
};

function gameLoop(time = 0) {
  if (!window.tetris.isPlaying) {
    return;
  }
  draw();
  autoDrop(time);
  window.requestAnimationFrame(gameLoop);
}

function draw() {
  clearBoard();
  drawBoard();
  drawPiece();

  $score.innerText = window.tetris.score.toString();
  $level.innerText = `Lvl ${window.tetris.level}`;
}

draw();
setEvents();
gameLoop();

// collide when rotation
// timer
// fps
