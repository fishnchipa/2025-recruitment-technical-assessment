import Image from "next/image"

type ContentItemProps = {
  name: string,
  rooms: number,
  picture: string  
}

export default function ContentItem({name, rooms, picture}: ContentItemProps) {

  return (
    <div className="w-full lg:h-[385px] md:h-[300px] h-[200px] relative bg-main-orange">
      <Image 
        src={picture}
        alt={name}
        fill
        className="object-cover hover:opacity-80 hover:cursor-pointer"
      />
      <div className="min-w-[153px] w-[153px] h-9 flex items-center justify-center  top-2 right-2 absolute bg-white rounded-2xl pointer-events-none">
        <div className="flex items-center justify-center gap-x-2 text-[12px]">
          <span className="w-3 aspect-square bg-green-500 rounded-full"></span>
          <span>{rooms} rooms avaliable</span>
        </div>
      </div>
      <div className="w-full h-14 px-2 absolute bottom-2 text-white text-sm font-semibold">
        <div className="flex items-center pl-4 w-full h-full bg-main-orange rounded-lg ">
          {name}
        </div>
      </div>
    </div>
  )
}
