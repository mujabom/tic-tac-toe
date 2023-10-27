import { GameScreen } from "./components/GameScreen";

export default function App() {
  return (
    <div className="flex items-center min-w-[19rem] justify-center min-h-screen px-10 font-outfit text-cl-silver text-body bg-cd-navy">
      {/* <NewGameMenu /> */}
      <GameScreen />
      {/* <NotificationScreen /> */}
    </div>
  );
}

function NotificationScreen() {
  return (
      <div className="absolute w-screen h-screen bg-black bg-opacity-50">

        <div className="absolute w-screen top-1/3 h-1/3 bg-cd-semi-navy">
          
        </div>
      </div>
  );
}
