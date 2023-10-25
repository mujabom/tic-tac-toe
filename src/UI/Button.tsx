interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  color?: "yellow" | "blue";
  className?: string;
}
export default function Button({
  variant,
  className,
  children,
  color = "yellow",
  ...props
}: ButtonProps) {
  const colorClass =
    color === "yellow"
      ? "bg-cl-yellow hover:bg-cl-yellow-h "
      : variant === "primary"
      ? "bg-cl-blue hover:bg-cl-blue-h"
      : "bg-cl-silver hover:bg-cl-silver-h";

  const variantClass =
    variant === "primary" ? "text-heading-s rounded-3xl pb-2" : "text-heading-xs  p-3 rounded-[0.6rem] pb-4";

  function getShadow() {
    if (color === "yellow") {
      return variant === "primary" ? "shadow-i-yellow" : "shadow-i-yellow-s";
    }
    return variant === "primary" ? "shadow-i-blue" : "shadow-i-blue-s";
  }

  return (
    <button
      className={`${className} ${colorClass} ${variantClass} ${getShadow()} text-cd-navy  
      
    
    `}
      {...props}
    >
      {children}
    </button>
  );
}

{
  /* <div className="w-[410px] h-[67px] bg-amber-400 rounded-[15px] shadow-inner" />; */
}
