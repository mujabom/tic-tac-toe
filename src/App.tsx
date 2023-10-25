import Button from "./UI/Button";

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
    <div className="">
      <Button variant="secondary" color="blue" className="">
        SECONDARY BUTTON 2
        </Button>
    </div>
  );
}
