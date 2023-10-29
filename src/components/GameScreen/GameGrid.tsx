import O from "../../asset/icon-o.svg?react";
import X from "../../asset/icon-x.svg?react";
import Xoutline from "../../asset/icon-x-outline.svg?react";
import Ooutline from "../../asset/icon-o-outline.svg?react";
import { Fragment } from "react";
import { twMerge } from 'tailwind-merge'
export default function XOGrid({
  gameState,
  updateGameState,
}: {
  gameState: gameState;
  updateGameState: (clicked: { x: number; y: number }) => void;
}) {
  const classes =
    "bg-cd-semi-navy p-[25%] pb-[30%] group flex items-center justify-center aspect-square rounded-2xl shadow-i-navy-s md:shadow-i-navy";
  const xWinner = "bg-cl-blue text-cd-semi-navy";
  const oWinner = "bg-cl-yellow text-cd-semi-navy";
  function getWinnerClass(x: number, y: number, cellSelected: Cell) {
    let winnerClass = "";
    gameState.winningPattern?.forEach((cell) => {
      if (cell[0] === x && cell[1] === y) {
        console.log(x, y, cellSelected);
        winnerClass = cellSelected === "X" ? xWinner : oWinner;
        return false; // This will break the forEach loop
      }
    });
    return winnerClass;
  }
  function getClasses(x: number, y: number, cellSelected: Cell) {
    const winnerClass = getWinnerClass(x, y, cellSelected);
    console.log(winnerClass);
    const cellClass = cellSelected === "X" ? 'text-cl-blue' : 'text-cl-yellow';
    return twMerge(classes,cellClass, winnerClass);
  }
  return (
    <div className="mb-[15%] mt-[4.5%] grid grid-cols-3 gap-[4.5%]">
      {gameState.grid.map((row, i) =>
        row.map((cell, j) => (
          <Fragment key={i * 3 + j}>
            {cell === "O" && (
              
              <div key={i * 3 + j} className={getClasses(i,j,cell)}>
                <O  />
              </div>
            )}

            {cell === "X" && (
              <div key={i * 3 + j} className={getClasses(i,j,cell)}>
                <X />
              </div>
            )}

            {cell === "" && (
              <button
                onClick={() => updateGameState({ x: i, y: j })}
                className={classes}
              >
                <EmptyCell cell={cell} turn={gameState.turn} />
              </button>
            )}
          </Fragment>
        )),
      )}
    </div>
  );
}

function EmptyCell({ turn }: { cell: Cell; turn: Turn }) {
  if (turn === "X") {
    return <Xoutline className="text-cd-semi-navy group-hover:text-cl-blue " />;
  }
  return <Ooutline className="text-cd-semi-navy group-hover:text-cl-yellow" />;
}
