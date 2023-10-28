import { useState } from 'react';
import { GameScreen } from './components/GameScreen/GameScreen';
import { NewGameMenu } from './components/NewGameMenu';

export default function App() {
  const [pageState, setPageState] = useState<'menu' | 'game'>('menu');
  const [gameState, setGameState] = useState<gameState>({
    turn: 'X',
    grid: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    score: {
      X: 0,
      O: 0,
      tie: 0,
    },
    player1: 'X',
  });
  function updateGameState(clicked: { x: number; y: number }) {
    setGameState((prev) => {
      const newGrid = prev.grid.map((row, x) =>
        row.map((cell, y) => {
          if (x === clicked.x && y === clicked.y) {
            return prev.turn;
          } else {
            return cell;
          }
        })
      );

      return {
        ...prev,
        grid: newGrid as Grid,
        turn: prev.turn === 'X' ? 'O' : 'X',
      };
    });
  }

  function startGame(player1Mark:Turn) {
    setGameState((prev) => {
      return {
        ...prev,
        player1: player1Mark,
      };
    });
    setPageState('game');
  }
  return (
    <div className="flex min-h-screen min-w-[19rem] items-center justify-center bg-cd-navy px-10 font-outfit text-body text-cl-silver">
      {pageState === 'menu' && <NewGameMenu start={startGame} />}
      {pageState === 'game' && (
        <GameScreen gameState={gameState} updateGameState={updateGameState} />
      )}
    </div>
  );
}


