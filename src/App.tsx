import { Grid } from "@mui/material";
import { NewGameMenu } from "./components/NewGameMenu";
import O from "./asset/icon-o.svg?react";
import X from "./asset/icon-x.svg?react";
import Logo from "./asset/logo.svg?react";
import Button from "./UI/Button";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen px-10 font-outfit text-cl-silver text-body bg-cd-navy">
      {/* <NewGameMenu /> */}
      <GameScreen />
    </div>
  );
}

function GameScreen() {
  return (
    <div className="flex flex-col max-w-full gap-5 md:w-[29rem]">
      {/* hrader */}
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center h-12 gap-3 bg-cd-semi-navy w-36 shadow-i-navy-s rounded-xl">
          <X className="w-5" />
          <h1 className="text-heading-xs">TURN</h1>
        </div>
        <Button variant="secondary" color="blue" className="ml-7">
          <X className="w-5" />
        </Button>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="grid bg-cd-semi-navy place-content-center h-36 w-36 rounded-2xl shadow-i-navy">
          <O className="w-16" />
        </div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
        <div className="p-4 bg-cd-semi-navy h-36 w-36 rounded-2xl shadow-i-navy"></div>
      </div>
    </div>
  );
}
