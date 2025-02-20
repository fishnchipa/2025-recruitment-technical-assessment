"use client"

import Image from "next/image"
import { useState } from "react"


export default function Logo() {

  const [open ,setOpen] = useState(true)

  return (
    <div className="flex items-center hover:opacity-80 hover:cursor-pointer" onClick={() => setOpen(prev => !prev)}>
    {open ? (
      <Image 
        src="/freeRoomsLogo.png"
        alt="Freerooms logo"
        width={50}
        height={50}
      />
    ) : (
      <Image 
        src="/freeroomsDoorClosed.png"
        alt="Freerooms logo"
        width={50}
        height={50}
      />
    )}
      <h1 
        className="text-main-orange text-[32px] box-border pt-2 font-semibold font-josefin xsm:block hidden" 
      >
        Freerooms
      </h1>
    </div>
  )
}
