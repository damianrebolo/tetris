export type PieceKeys = "o" | "i" | "s" | "z" | "l" | "j" | "t";

export type PieceColors =
  | "yellow"
  | "aqua"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "pink"
  | "purple";

export type PiecePosition = {
  x: number;
  y: number;
};

export type Piece = {
  key: PieceKeys;
  rotation: number;
  position: PiecePosition;
  shape: number[][];
  color: PieceColors;
};

export type Pieces = {
  o: {
    color: PieceColors;
    shape: number[][][];
  };
  i: {
    color: PieceColors;
    shape: number[][][];
  };
  s: {
    color: PieceColors;
    shape: number[][][];
  };
  z: {
    color: PieceColors;
    shape: number[][][];
  };
  l: {
    color: PieceColors;
    shape: number[][][];
  };
  j: {
    color: PieceColors;
    shape: number[][][];
  };
  t: {
    color: PieceColors;
    shape: number[][][];
  };
};
