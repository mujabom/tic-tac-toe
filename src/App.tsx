import { useState } from 'react';
import { NewGameMenu } from './components/NewGameMenu';
import { GameScreen } from './components/GameScreen/GameScreen';

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

  function startGame() {
    setPageState('game');
  }
  return (
    <div className="flex min-h-screen min-w-[19rem] items-center justify-center bg-cd-navy px-10 font-outfit text-body text-cl-silver">
      {pageState === 'menu' && <NewGameMenu start={startGame} />}
      {pageState === 'game' && (
        <GameScreen gameState={gameState} updateGameState={updateGameState} />
      )}
      {/* <NotificationScreen /> */}
    </div>
  );
}

function NotificationScreen() {
  return (
    <div className="absolute h-screen w-screen bg-black bg-opacity-50">
      <div className="absolute top-1/3 h-1/3 w-screen bg-cd-semi-navy"></div>
    </div>
  );
}
