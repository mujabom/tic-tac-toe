export function BottomBar({ score }: { score: Score; }) {
  return <div className="flex justify-between">
    <div className=" flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-blue text-cd-navy">
      <div className="text-center">X</div>
      <div className="text-heading-m">{score.X}</div>
    </div>
    <div className="flex w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-silver text-cd-navy">
      <div className="text-center">TIES</div>
      <div className="text-heading-m">{score.tie}</div>
    </div>
    <div className=" flex aspect-[1.6] w-[30.4%] flex-col items-center justify-center rounded-[15px] bg-cl-yellow text-cd-navy">
      <div className="text-center">O</div>
      <div className="text-heading-m">{score.O}</div>
    </div>
  </div>;
}
