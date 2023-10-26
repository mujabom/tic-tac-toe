import { useState } from "react";
import Button from "../UI/Button";
import O from "../asset/icon-o.svg?react";
import X from "../asset/icon-x.svg?react";
import Logo from "../asset/logo.svg?react";

export function NewGameMenu() {
  const [player1Mark, setPlayer1Mark] = useState<'o'|'x'>("o");
  function getClassNames(mark: 'o'|'x') {
    return `xo-menu ${player1Mark === mark ? "active" : "inactive"}`;
  }

  return (
    <div className="flex flex-col gap-10 max-w-full">
      <div className="flex flex-row justify-center">
        <Logo />
      </div>
      <div className="gap-4 p-4 bg-cd-semi-navy rounded-2xl justify-between shadow-i-navy flex flex-col items-center">
        <p className="text-heading-xs">PICK PLAYER 1’S MARK</p>
        <div className="w-full flex justify-center bg-cd-navy p-2 rounded-xl">
          <button onClick={()=>setPlayer1Mark('x')} className={getClassNames('x')}>
            <X className="w-8" />
          </button>
          <button onClick={()=>setPlayer1Mark('o')} className={getClassNames('o')}>
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
