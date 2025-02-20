import ControlButton from "@/components/ControlButton";
import Searchbar from "@/components/Searchbar";
import { Filter, ListFilter } from "lucide-react";

export default function ControlPanel() {


  return (
    <div className="flex xsm:flex-row flex-col justify-between  gap-2">
      <ControlButton>
        <Filter className="text-main-orange" fill="#ed6d00" size={18}/>
        Filters
      </ControlButton>
      <Searchbar />
      <ControlButton>
        <ListFilter className="text-main-orange" fill="#ed6d00" size={18}/>
        Sort
      </ControlButton>
    </div>
  )
}
