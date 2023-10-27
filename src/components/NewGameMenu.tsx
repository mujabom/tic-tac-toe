import { useState } from "react";
import Button from "../UI/Button";
import O from "../asset/icon-o.svg?react";
import X from "../asset/icon-x.svg?react";
import Logo from "../asset/logo.svg?react";

export function NewGameMenu({ start }: { start: () => void }) {
  const [player1Mark, setPlayer1Mark] = useState<"o" | "x">("o");
  function getClassNames(mark: "o" | "x") {
    return `xo-menu ${player1Mark === mark ? "active" : "inactive"}`;
  }

  return (
    <div className="flex flex-col max-w-full gap-10 w-[29rem]">
      <div className="flex flex-row justify-center">
        <Logo className="w-20" />
      </div>
      <div className="flex flex-col items-center justify-between gap-4 p-4 bg-cd-semi-navy rounded-2xl shadow-i-navy">
        <p className="text-heading-xs">PICK PLAYER 1’S MARK</p>
        <div className="flex justify-center w-full p-2 bg-cd-navy rounded-xl">
          <button
            onClick={() => setPlayer1Mark("x")}
            className={getClassNames("x")}
          >
            <X className="w-8" />
          </button>
          <button
            onClick={() => setPlayer1Mark("o")}
            className={getClassNames("o")}
          >
            <O className="w-8" />
          </button>
        </div>
        <p className="text-cl-silver">REMEMBER : X GOES FIRST</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary" color="yellow" className="">
          {`NEW GAME (VS CPU)`}
        </Button>
        <Button onClick={start} variant="primary" color="blue" className="">
          {`NEW GAME (VS PLAYER)`}
        </Button>
      </div>
    </div>
  );
}
