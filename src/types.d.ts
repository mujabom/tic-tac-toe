type gameState = {
    turn: Turn
    grid: Grid;
    score: {
      X: number;
      O: number;
      tie: number;
    };
  };
type Cell = "X" | "O" | "";
  type Grid = [Cell, Cell, Cell][];
  type Turn = "X" | "O";