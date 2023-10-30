import { BottomBar } from "./BottomBar";
import XOGrid from "./GameGrid";
import { TopBar } from "./TopBar";

export function GameScreen({
  gameState,
  updateGameState,
  resetGameState
}: {
  gameState: gameState;
  updateGameState: (clicked: { x: number; y: number }) => void;
  resetGameState: () => void;
}) {

  return (
    <><div className="flex max-w-full flex-col md:w-[29rem]">
      {/* hrader */}
      {<TopBar turn={gameState.turn} resetGameState={resetGameState}/>}
      {/* grid */}
      <XOGrid gameState={gameState} updateGameState={updateGameState} />
      {/* footer */}
      {<BottomBar gameState={gameState} />}
    
    </div>
    </>
  )
}




