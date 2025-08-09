import { Link } from "react-router-dom"
import { Logo, Menu, Search, Profile, Bag } from "../assets/svgs"
import { useEffect, useRef, useState } from "react"
import { getCartItemsCount } from "../state/cartSlice"
import { useAppSelector } from "../state/store"

const Navbar = () => {
  const navLinks = ["home", "collections", "about", "contact"]
  const ref = useRef<HTMLUListElement | null>(null)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e?.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const itemCount = useAppSelector(getCartItemsCount)
  console.log(itemCount)

  return (
    <nav className="w-full h-full">
      <div className="w-[90%] h-full max-w-7xl mx-auto flex items-center">
        <div className="w-full h-10 flex">
          <Logo />

          <div className="h-full flex-1 flex gap-2 flex-row-reverse md:flex-row">
            <div className="relative h-full md:flex-1 md:flex md:justify-center">
              <div className="h-10 aspect-square flex items-center justify-center cursor-pointer rounded-md text-[#323232] hover:bg-slate-200 md:hidden" onClick={() => setOpen(prev => !prev)}>
                <Menu className="h-8 w-8" />
              </div>

              <ul ref={ref} className={`absolute transition-[height] ${open && "h-40" || "h-0 border-none"} top-12 right-0 rounded-md overflow-hidden border-1 border-slate-300 bg-[#F8F8F8] md:relative md:flex md:top-0 md:h-10 md:border-none md:bg-white md:rounded-none`}>
                {navLinks.map((elm, i) => (
                  <li key={i} onClick={() => setOpen(false)} className="h-10 flex items-center px-4 uppercase text-base text-[#5B5B5B] font-medium cursor-pointer hover:bg-slate-200">
                    <Link to={elm}>
                      {elm}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex gap-2 h-full">
              <li key={0} className="h-10 aspect-square flex items-center justify-center cursor-pointer rounded-full text-[#323232] hover:bg-slate-200">
                <Search />
              </li>
              <li key={1} className="h-10 aspect-square flex items-center justify-center cursor-pointer rounded-full text-[#323232] hover:bg-slate-200">
                <Link to={"/cart"} className={`relative `}>
                  <Bag />
                  <span className={`absolute text-xs text-white flex items-center justify-center rounded-full bottom-[-5px] ${itemCount > 0 && "animate-ping-once"} right-[-10px] aspect-square h-4 bg-black`}>{itemCount}</span>
                </Link>
              </li>
              <li key={2} className="relative h-10 aspect-square flex items-center justify-center cursor-pointer rounded-full text-[#323232] hover:bg-slate-200">
                <Link to={"/login"}>
                  <Profile />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
