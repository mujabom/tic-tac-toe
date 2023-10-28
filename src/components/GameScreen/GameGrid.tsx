import O from "../../asset/icon-o.svg?react";
import X from "../../asset/icon-x.svg?react";
import Xoutline from "../../asset/icon-x-outline.svg?react";
import Ooutline from "../../asset/icon-o-outline.svg?react";
import { Fragment } from "react";

export default function XOGrid({
  gameState,
  updateGameState,
}: {
  gameState: gameState;
  updateGameState: (clicked: { x: number; y: number }) => void;
}) {
  const classes =
    "bg-cd-semi-navy p-[25%] pb-[30%] group flex items-center justify-center aspect-square rounded-2xl shadow-i-navy-s md:shadow-i-navy";
  return (
    <div className="mb-[15%] mt-[4.5%] grid grid-cols-3 gap-[4.5%]">
      {gameState.grid.map((row, i) =>
        row.map((cell, j) => (
          <Fragment key={i * 3 + j}>
            {cell === "O" && (
              <div key={i * 3 + j} className={classes}>
                <O className="text-cl-yellow" />
              </div>
            )}

            {cell === "X" && (
              <div key={i * 3 + j} className={classes}>
                {" "}
                <X className="text-cl-blue" />
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
