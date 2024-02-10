type Game = {
  status: "playing" | "won" | "lost";
  score: number;
  level: number;
  linesCleared: number;
  $canvas: HTMLCanvasElement;
  $context: CanvasRenderingContext2D;
  $score: HTMLElement;
  $level: HTMLElement;
};
