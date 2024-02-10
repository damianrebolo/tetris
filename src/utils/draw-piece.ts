export const drawPiece = () => {
  const { piece, $context } = window.tetris;
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value === 1) {
        $context.fillStyle = piece.color;
        $context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
      }
    });
  });
};
