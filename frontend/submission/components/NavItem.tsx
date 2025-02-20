import Link from "next/link"
import { ReactNode } from "react"

export default function NavItem({
  active,
  src,
  children
}: {
  active?: boolean,
  src: string,
  children: ReactNode
}) {

  return (
    <Link
      href={src}
      className={`w-[42px] h-[42px] flex items-center justify-center border border-main-orange rounded-md border-opacity-50  transition-all duration-200 ${active ? "bg-main-orange hover:bg-[#a74b00]" : "hover:border-opacity-100  hover:bg-main-orange hover:bg-opacity-5"}`}
    >
        {children}
    </Link>
  )
}
