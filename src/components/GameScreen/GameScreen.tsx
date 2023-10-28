

import Button from "../../UI/Button";
import O from "../../asset/icon-o.svg?react";
import X from "../../asset/icon-x.svg?react";
import Restart from "../../asset/icon-restart.svg?react";
import Logo from "../../asset/logo.svg?react";
import XOGrid from "./GameGrid";


export function GameScreen({ gameState }: { gameState: gameState}) {
  return (
    <div className="flex flex-col max-w-full md:w-[29rem]">
      {/* hrader */}
      <div className="grid place-content-center grid-cols-3 h-auto">
        <Logo className="w-[60%]" />
        <div className="col-start-2 aspect-[3] flex justify-center items-center w-full  gap-3 bg-cd-semi-navy shadow-i-navy-s rounded-md md:rounded-xl">
          <X className="w-2/12 " />
          <h1 className="text-heading-xs">TURN</h1>
        </div>
        <div className="w-full flex justify-end">
          <Button
            variant="secondary"
            color="blue"
            className="w-[30%] p-[6%] col-end-auto "
          >
            <Restart className="" />
          </Button>
        </div>
      </div>
      {/* grid */}
      <XOGrid gameState={gameState} />
      {/* footer */}
      <div className="flex justify-between">
        <div className=" bg-cl-blue rounded-[15px] w-[30.4%] text-cd-navy flex flex-col justify-center items-center">
          <div className="text-center">X (YOU)</div>
          <div className="text-heading-m">14</div>
        </div>
        <div className="bg-cl-silver rounded-[15px] w-[30.4%] text-cd-navy flex flex-col justify-center items-center">
          <div className="text-center">TIES</div>
          <div className="text-heading-m">0</div>
        </div>
        <div className=" text-cd-navy flex flex-col justify-center aspect-[1.6] items-center bg-cl-yellow rounded-[15px] w-[30.4%]">
          <div className="text-center">O (CPU)</div>
          <div className="text-heading-m">6</div>
        </div>
      </div>
    </div>
  );
}