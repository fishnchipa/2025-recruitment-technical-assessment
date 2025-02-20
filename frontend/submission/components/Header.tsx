import Logo from "./Logo";
import Navbar from "./Navbar";


export default function Header() {

  return (
    <header className="flex justify-between px-4 py-[1px] border-b">
      <Logo />
      <Navbar /> 
    </header>
  )
}
