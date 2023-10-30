export function BottomBar({ gameState }: { gameState: gameState }) {
  return (
    <div className="flex justify-between">
      <div className=" flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-blue text-cd-navy">
        <div className="text-center">{` X (${
          gameState.player1 === "X" ? "P1" : "P2"
        })
      `}</div>
        <div className="text-heading-m">{gameState.score.X}</div>
      </div>
      <div className="flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-silver text-cd-navy">
        <div className="text-center">TIES</div>
        <div className="text-heading-m">{gameState.score.tie}</div>
      </div>
      <div className=" flex aspect-[1.6] w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-yellow text-cd-navy">
        <div className="text-center">{`O (${
          gameState.player1 === "O" ? "P1" : "P2"
        })`}</div>
        <div className="text-heading-m">{gameState.score.O}</div>
      </div>
    </div>
  );
}
