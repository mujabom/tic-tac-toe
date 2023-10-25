import { useState } from "react";
import checksvg from "../asset/images/icon-list.svg";
import { z } from "zod";
export function LeftForm({goToMessage}: {goToMessage: (email: string) => void}) {
  const formSchema = z.object({
    email: z.string().email(),
  });
  const [error, setError] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    try {
      formSchema.parse({ email: email });
      setError("");
      goToMessage(email);
    } catch (err) {
      setError("enter valid email");
    }
  }

  return (
    <div className="flex flex-col py-3 md:py-13 px-10 gap-6 justify-center">
      <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold">
        {" "}
        Stay updated!
      </h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <div className="flex flex-col gap-3">
        <ListItem text="Product discovery and building what matters" />
        <ListItem text="Measuring to ensure updates are a success" />
        <ListItem text="And much more!" />
      </div>

      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-between text-xs font-bold">
          <label htmlFor="input" className="">
            Email Adress
          </label>
          {error && <span className="text-primary ">{error}</span>}
        </div>
        <input
          className={`w-full py-4 px-4 mb-3 rounded-md border
          ${error && "border-primary  bg-primary bg-opacity-10 text-primary"}`}
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="text-white font-bold bg-neutral-dark py-4 rounded-md
           hover:bg-gradient-to-l from-primary to-[#ff517b]"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  //check media query
  return (
    <div className="flex flex-row items-start gap-3">
      <img src={checksvg} alt="" />
      <p>{text}</p>
    </div>
  );
}
