import Button from "../UI/Button";
import O from "../asset/icon-o.svg?react";
import X from "../asset/icon-x.svg?react";
import Logo from "../asset/logo.svg?react";

export function GameScreen() {
  return (
    <div className="flex flex-col max-w-full gap-5 md:w-[29rem]">
      {/* hrader */}
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <div className="flex m-auto  items-center aspect-[3] w-1/3 justify-center gap-3 bg-cd-semi-navy shadow-i-navy-s rounded-xl">
          <X className="w-2/12 " />
          <h1 className="text-heading-xs">TURN</h1>
        </div>
        <Button variant="secondary" color="blue" className="md:ml-7">
          <X className="w-5" />
        </Button>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div className=" bg-cd-semi-navy p-[15%] pb-[20%] flex items-center justify-center aspect-square rounded-2xl shadow-i-navy">
            {i % 2 == 0 && <O />}
          </div>
        ))}
      </div>
    </div>
  );
}