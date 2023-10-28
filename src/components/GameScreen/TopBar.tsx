import Button from "../../UI/Button";
import O from "../../asset/icon-o.svg?react";
import Restart from "../../asset/icon-restart.svg?react";
import X from "../../asset/icon-x.svg?react";
import Logo from "../../asset/logo.svg?react";

export function TopBar({ turn }: { turn: Turn }) {
  return <div className="grid h-auto grid-cols-3 place-content-center">
    <Logo className="w-[60%]" />
    <div className="col-start-2 flex aspect-[3] w-full items-center justify-center  gap-3 rounded-md bg-cd-semi-navy shadow-i-navy-s md:rounded-xl">
      {turn === 'X' ? <X className="w-2/12 " /> : <O className="w-2/12 " />}
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
  </div>;
}
