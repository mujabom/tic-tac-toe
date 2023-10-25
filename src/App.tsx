import Button from "./UI/Button";
import O from "./UI/O";
import X from "./UI/X";

export default function App() {
  return (
    // <div className="min-h-screen grid place-items-center bg-cd-navy">
    <div className="w-[90rem] h[56.25rem] min-h-screen grid place-items-center font-outfit text-cl-silver text-body bg-cd-navy">
      <NewGameMenu />
    </div>
  );
}
function NewGameMenu() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-center gap-2">
        <X className="w-8 h-8" />
        <O className="w-8 h-8" />
      </div>
      <div className="w-[460px] h-[205px] bg-cd-semi-navy rounded-2xl justify-between shadow-i-navy flex flex-col items-center">
        <p className="text-heading-xs">PICK PLAYER 1’S MARK</p>
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
