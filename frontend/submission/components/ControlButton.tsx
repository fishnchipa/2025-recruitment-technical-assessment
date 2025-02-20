import { HTMLAttributes } from "react";

export default function ControlButton({
  ...props
}: HTMLAttributes<HTMLButtonElement>) 
{

  return (
    <button 
      className="min-w-[140px] h-11 flex items-center justify-center gap-x-2 rounded-xl border-2 border-main-orange text-main-orange font-semibold"
      {...props}
    >
      {props.children}            
    </button>
  )
}
