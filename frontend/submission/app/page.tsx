import Content from "@/components/Content";
import ControlPanel from "@/components/ControlPanel";

export default function Home() {

  return (
    <div className="flex flex-col px-6 py-3 gap-y-4">
      <ControlPanel />
      <Content />
    </div>
  )
}
