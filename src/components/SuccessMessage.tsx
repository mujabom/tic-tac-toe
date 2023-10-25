import { Slide } from "@mui/material";
import checksvg from "../asset/images/icon-list.svg";

export default function SuccessMessage({
  email,
  goBack,
}: {
  email: string;
  goBack: () => void;
}) {
  return (
    <div className="bg-white text-neutral p-16 w-full h-full md:h-auto md:w-[30rem] md:rounded-3xl flex flex-col items-center overflow-hidden">
      <Slide direction="left" in={true} timeout={500}>
        <div className="gap-4 flex flex-col h-full">
          <div>
            <img src={checksvg} alt="" width={64} />
          </div>
          <h1 className="text-[3.5rem] font-bold leading-tight">
            Thanks for subscribing!
          </h1>

          <p className=" ">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>

        
          <div className="h-full w-full flex flex-col justify-end">
           <button
            onClick={goBack}
            className= {`text-white flex
             md:relative md:bottom-0 md:w-full justify-center font-bold bg-neutral py-4 rounded-md hover:bg-gradient-to-l from-primary to-[#ff517b]`}
          >
            Dismiss message
          </button></div>
        </div>
      </Slide>
    </div>
  );
}
