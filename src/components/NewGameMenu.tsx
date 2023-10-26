import Button from "../UI/Button";
import O from "../asset/icon-o.svg?react";
import X from "../asset/icon-x.svg?react";
import Logo from "../asset/logo.svg?react";

export function NewGameMenu() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-center">
        <Logo />
      </div>
      <div className="w-[460px] h-[205px] p-4 bg-cd-semi-navy rounded-2xl justify-between shadow-i-navy flex flex-col items-center">
        <p className="text-heading-xs">PICK PLAYER 1’S MARK</p>
        <div className="w-full flex justify-center bg-cd-navy p-2 rounded-xl">
          <button className="xo-menu inactive">
            <X className="w-8" />
          </button>
          <button className="xo-menu active">
            <O className="w-8" />
          </button>
        </div>
        <p className="text-cl-silver">REMEMBER : X GOES FIRST</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary" color="yellow" className="">
          {`NEW GAME (VS CPU)`}
        </Button>
        <Button variant="primary" color="blue" className="">
          {`NEW GAME (VS PLAYER)`}
        </Button>
      </div>
    </div>
  );
}
