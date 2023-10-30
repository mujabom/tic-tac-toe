import NotificationScreen from "../../UI/NotificationScreen";
import Button from "../../UI/Button";
import O from "../../asset/icon-o.svg?react";
import X from "../../asset/icon-x.svg?react";

export default function GameEnddedScreen({
  quitGame,
  nextRound,
  gameState,
}: {
  quitGame: () => void;
  nextRound: () => void;
  gameState: gameState;
}) {
  function getWinner() {
    const winner = gameState.turn === "O" ? "X" : "O";
    return gameState.player1 === winner ? "PLAYER 1" : "PLAYER 2";
  }
  function getWinnerClass() {
    return gameState.turn === "O" ? "text-cl-blue" : "text-cl-yellow";
  }
  return (
    <>
      {gameState.winningPattern ? (
        <NotificationScreen onClose={() => {}}>
          <div className="flex flex-col gap-4 py-6 sm:gap-6 sm:py-10 md:gap-8 md:py-16">
            <div className="flex items-center justify-center text-heading-xs text-cl-silver">{`${getWinner()} WINS!`}</div>
            <div
              className={`flex flex-row gap-4 ${getWinnerClass()} items-center justify-center text-heading-l `}
            >
              {gameState.turn === "O" ? (
                <X className="w-[8%] min-w-[2rem] max-w-[4rem]" />
              ) : (
                <O className="w-[10%] min-w-[2rem] max-w-[4rem]" />
              )}
              TAKES THE ROUND
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={quitGame}
                variant="secondary"
                color="blue"
                className="p-4"
              >
                QUIT
              </Button>
              <Button
                onClick={nextRound}
                variant="secondary"
                color="yellow"
                className="p-4"
              >
                NEXT ROUND
              </Button>
            </div>
          </div>
        </NotificationScreen>
      ) : (
        <>
          {!gameState.grid.some(c=> c.some(cell=>cell==='')) && (
            <NotificationScreen onClose={() => {}}>
<div className="flex flex-col gap-4 py-6 sm:gap-6 sm:py-10 md:gap-8 md:py-16">
            <div
              className={`flex flex-row gap-4  text-cl-silver items-center justify-center text-heading-l `}
            >
              
              ROUND TIED            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                onClick={quitGame}
                variant="secondary"
                color="blue"
                className="p-4"
              >
                QUIT
              </Button>
              <Button
                onClick={nextRound}
                variant="secondary"
                color="yellow"
                className="p-4"
              >
                NEXT ROUND
              </Button>
            </div>
          </div>
            </NotificationScreen>
          )}
        </>
      )}
    </>
  );
}
