import { useState } from "react";
import { BottomBar } from "./BottomBar";
import XOGrid from "./GameGrid";
import { TopBar } from "./TopBar";
import NotificationScreen from "./NotificationScreen";

export function GameScreen({
  gameState,
  updateGameState,
}: {
  gameState: gameState;
  updateGameState: (clicked: { x: number; y: number }) => void;
}) {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <><div className="flex max-w-full flex-col md:w-[29rem]">
      {/* hrader */}
      {<TopBar turn={gameState.turn} />}
      {/* grid */}
      <XOGrid gameState={gameState} updateGameState={updateGameState} />
      {/* footer */}
      {<BottomBar score={gameState.score} />}
    </div>
    {showNotification && <NotificationScreen />}
    </>
  );
}




