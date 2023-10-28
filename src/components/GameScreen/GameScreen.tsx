import Button from "../../UI/Button";
import O from "../../asset/icon-o.svg?react";
import X from "../../asset/icon-x.svg?react";
import Restart from "../../asset/icon-restart.svg?react";
import Logo from "../../asset/logo.svg?react";
import XOGrid from "./GameGrid";

export function GameScreen({
  gameState,
  updateGameState,
}: {
  gameState: gameState;
  updateGameState: (clicked: { x: number; y: number }) => void;
}) {
  return (
    <div className="flex max-w-full flex-col md:w-[29rem]">
      {/* hrader */}
      <div className="grid h-auto grid-cols-3 place-content-center">
        <Logo className="w-[60%]" />
        <div className="col-start-2 flex aspect-[3] w-full items-center justify-center  gap-3 rounded-md bg-cd-semi-navy shadow-i-navy-s md:rounded-xl">
          <X className="w-2/12 " />
          <h1 className="text-heading-xs">TURN</h1>
        </div>
        <div className="flex w-full justify-end">
          <Button
            variant="secondary"
            color="blue"
            className="col-end-auto w-[30%] p-[6%] "
          >
            <Restart className="" />
          </Button>
        </div>
      </div>
      {/* grid */}
      <XOGrid gameState={gameState} updateGameState={updateGameState} />
      {/* footer */}
      <div className="flex justify-between">
        <div className=" flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-blue text-cd-navy">
          <div className="text-center">X (YOU)</div>
          <div className="text-heading-m">14</div>
        </div>
        <div className="flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-silver text-cd-navy">
          <div className="text-center">TIES</div>
          <div className="text-heading-m">0</div>
        </div>
        <div className=" flex aspect-[1.6] w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-yellow text-cd-navy">
          <div className="text-center">O (CPU)</div>
          <div className="text-heading-m">6</div>
        </div>
      </div>
    </div>
  );
}
