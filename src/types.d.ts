type gameState = {
    turn: Turn
    grid: Grid;
    score: Score;
    player1: Turn;
  };
type Cell = "X" | "O" | "";
  type Grid = [Cell, Cell, Cell][];
  type Turn = "X" | "O";
  type Score = {
    X: number;
    O: number;
    tie: number;
  };