import { Search } from "lucide-react";

export default function Searchbar() {

  return (
    <div className="w-full max-w-[710px] relative">
      <input className="w-full h-full focus:border-main-orange border rounded-md pl-8 focus:outline-none ring-0 focus:ring-0"/>
        <Search
          size={17}
          className="text-gray-500 absolute inset-0 my-auto left-2"
          strokeWidth={3}
        />
    </div>
  )
}
