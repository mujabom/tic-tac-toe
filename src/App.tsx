import { useState } from "react";
import { GameScreen } from "./components/GameScreen/GameScreen";
import { NewGameMenu } from "./components/NewGameMenu";
import GameEnddedScreen from "./components/GameScreen/GameEndedScreen";

export default function App() {
  const [pageState, setPageState] = useState<"menu" | "game">("menu");
  const [gameState, setGameState] = useState<gameState>({
    turn: "X",
    grid: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    score: {
      X: 0,
      O: 0,
      tie: 0,
    },
    winningPattern: undefined,
    player1: "X",
  });
  function updateGameState(clicked: { x: number; y: number }) {
    console.log(clicked);
    setGameState((prev) => {
      const newGrid = prev.grid.map((row, x) =>
        row.map((cell, y) => {
          if (x === clicked.x && y === clicked.y) {
            return prev.turn;
          } else {
            return cell;
          }
        }),
      );
      const newGameState: gameState = {
        grid: newGrid as Grid,
        score: {
          ...prev.score,
        },

        player1: prev.player1,
        winningPattern: prev.winningPattern?.map((cell) => [...cell]),
        turn: prev.turn === "X" ? "O" : "X",
      };
      const winner = checkWin(newGameState);
      if (winner.result === "win") {
        newGameState.score[winner.winner as Turn]++;
        newGameState.winningPattern = winner.winningPattern;
      } else if (winner.result === "tie") {
        newGameState.score.tie++;
      }
      return newGameState;
    });
  }

  function checkWin(gameState: gameState): {
    winner?: Turn;
    winningPattern?: number[][];
    result: "win" | "tie" | "ongoing";
  } {
    const grid = gameState.grid;
    const winPatterns = [
      // horizontal
      {
        pattern: [
          [0, 0],
          [0, 1],
          [0, 2],
        ],
        cells: [grid[0][0], grid[0][1], grid[0][2]],
      },
      {
        pattern: [
          [1, 0],
          [1, 1],
          [1, 2],
        ],
        cells: [grid[1][0], grid[1][1], grid[1][2]],
      },
      {
        pattern: [
          [2, 0],
          [2, 1],
          [2, 2],
        ],
        cells: [grid[2][0], grid[2][1], grid[2][2]],
      },
      // vertical
      {
        pattern: [
          [0, 0],
          [1, 0],
          [2, 0],
        ],
        cells: [grid[0][0], grid[1][0], grid[2][0]],
      },
      {
        pattern: [
          [0, 1],
          [1, 1],
          [2, 1],
        ],
        cells: [grid[0][1], grid[1][1], grid[2][1]],
      },
      {
        pattern: [
          [0, 2],
          [1, 2],
          [2, 2],
        ],
        cells: [grid[0][2], grid[1][2], grid[2][2]],
      },
      // diagonal
      {
        pattern: [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
        cells: [grid[0][0], grid[1][1], grid[2][2]],
      },
      {
        pattern: [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
        cells: [grid[0][2], grid[1][1], grid[2][0]],
      },
    ];

    for (const { pattern, cells } of winPatterns) {
      if (cells.every((cell) => cell === "X")) {
        return { winner: "X", winningPattern: pattern, result: "win" };
      } else if (cells.every((cell) => cell === "O")) {
        return { winner: "O", winningPattern: pattern, result: "win" };
      }
    }

    if (grid.every((row) => row.every((cell) => cell !== ""))) {
      return { result: "tie" };
    }

    return { result: "ongoing" };
  }

  function startGame(player1Mark: Turn) {
    setGameState((prev) => {
      return {
        ...prev,
        player1: player1Mark,
      };
    });
    setPageState("game");
  }

  function resetGameState() {
    setGameState((prev) => {
      return {
        ...prev,
        grid: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        turn: 'X',
        winningPattern: undefined,
        score: {
          X: 0,
          O: 0,
          tie: 0,
        },
      };
    });
  }
  function nextRound() {
    setGameState((prev) => {
      return {
        ...prev,
        grid: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        turn: prev.player1 === "X" ? "O" : "X",
        winningPattern: undefined,
      };
    });
  }
  function quitGame() {
    resetGameState();
    setPageState("menu");
  }
  return (
    <div className="flex min-h-screen min-w-[19rem] items-center justify-center bg-cd-navy px-10 font-outfit text-body text-cl-silver">
      {pageState === "menu" && <NewGameMenu start={startGame} />}
      {pageState === "game" && (
        <>
          <GameScreen
            gameState={gameState}
            updateGameState={updateGameState}
            resetGameState={resetGameState}
          />
          <GameEnddedScreen
            quitGame={quitGame}
            nextRound={nextRound}
            gameState={gameState}
          />
        </>
      )}
    </div>
  );
}
