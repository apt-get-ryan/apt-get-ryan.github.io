"use client"
import Image from "next/image";

import HeaderButton from "./HeaderButton";
import { mergeClassNames } from "@/utils/common";
import { useMenuStore } from "@/stores/menu";


const Header = () => {
  const { isOpen } = useMenuStore();
  return (
    <header className={mergeClassNames("p-4 shadow-xl shadow-black/30 w-fullsticky bg-slate-900", isOpen && "rounded-t-2xl")}>
        <div className="mx-auto px-6 flex items-center justify-between w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <Image src="/logo.svg" alt="Home" height={50} width={50}/>
            <div>
              <HeaderButton/>
            </div>
        </div>
    </header>
  )
}

export default Header;