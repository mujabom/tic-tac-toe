import { LeftForm } from "./components/LeftForm";
import imgmain from "./asset/images/illustration-sign-up-desktop.svg";
import imgmobile from "./asset/images/illustration-sign-up-mobile.svg";
import  { useEffect, useState } from "react";
import SuccessMessage from "./components/SuccessMessage";
export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState<"form" | "message">("form");
  const [email, setEmail] = useState("");
  function goToMessage(email: string) {
    setEmail(email);
    setStep("message");
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen grid place-items-center bg-neutral-dark">
      {step === "form" && (
        <div className="bg-white max-w-[55rem] w-full h-full md:h-auto flex flex-col-reverse md:flex-row md:rounded-3xl  text-neutral place-content-center md:p-6">
          <LeftForm goToMessage={goToMessage}></LeftForm>
          <div id="rightImage" className="md:w-1/2 md:h-full">
            <img
              src={isMobile ? imgmobile : imgmain}
              className="h-full w-full"
            />
          </div>
        </div>
      )}
      {step === "message" && <SuccessMessage goBack={()=>setStep('form')} email={email} />}
    </div>
  );
}
