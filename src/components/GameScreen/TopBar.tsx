import { useState } from "react";
import Button from "../../UI/Button";
import NotificationScreen from "../../UI/NotificationScreen";
import O from "../../asset/icon-o.svg?react";
import Restart from "../../asset/icon-restart.svg?react";
import X from "../../asset/icon-x.svg?react";
import Logo from "../../asset/logo.svg?react";

export function TopBar({
  turn,
  resetGameState,
}: {
  turn: Turn;
  resetGameState: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid h-auto grid-cols-3 place-content-center">
        <Logo className="w-[60%]" />
        <div className="col-start-2 flex aspect-[3] w-full items-center justify-center  gap-3 rounded-md bg-cd-semi-navy shadow-i-navy-s md:rounded-xl">
          {turn === "X" ? <X className="w-2/12 " /> : <O className="w-2/12 " />}
          <h1 className="text-heading-xs">TURN</h1>
        </div>
        <div className="flex w-full justify-end">
          <Button
            onClick={() => setOpen(true)}
            variant="secondary"
            color="blue"
            className="col-end-auto w-[30%] p-[6%] "
          >
            <Restart className="" />
          </Button>
        </div>
      </div>
      {open && (
        <NotificationScreen onClose={() => setOpen(false)} onConfirm={() => {}}>
          <div className="flex flex-col gap-8 py-6 sm:py-10 md:py-16">
            <div className=" text-center text-heading-l text-cl-silver">
              RESTART GAME?
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setOpen(false)}
                variant="secondary"
                color="blue"
                className="p-4"
              >
                NO, CANCEL
              </Button>
              <Button
                onClick={()=>{resetGameState();setOpen(false)}}
                variant="secondary"
                color="yellow"
                className="p-4"
              >
                YES, RESTART
              </Button>
            </div>
          </div>
        </NotificationScreen>
      )}
    </>
  );
}
