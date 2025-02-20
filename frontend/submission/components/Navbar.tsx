"use client"

import { DoorOpen, LayoutGrid, Map, Moon, Search } from "lucide-react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"


export default function Navbar() {
  const pathname = usePathname();


  return (
    <nav className="flex items-center py-3 gap-x-2">
      <NavItem src="">
        <Search 
          size={17}
          className={"text-main-orange"}
          strokeWidth={3}
        />
      </NavItem> 
      <NavItem src="browse" active={pathname.includes("browse")}>
        <LayoutGrid 
          size={24}
          fill={pathname.includes("browse") ? "white" : "#ed6d00"}
          className={pathname.includes("browse") ? "text-white" : "text-main-orange"}
        />
      </NavItem> 
      <NavItem src="">
        <DoorOpen 
          size={24}
          className={"text-main-orange"}
        />
      </NavItem> 
      <NavItem src="">
        <Map 
          size={24}
          className={"text-main-orange"}
        />
      </NavItem> 
      <NavItem src="">
        <Moon 
          fill="#ed6d00"
          size={24}
          className={"text-main-orange"}
        />
      </NavItem> 

    </nav>
  )
}
