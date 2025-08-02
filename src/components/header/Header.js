"use client"
import Image from "next/image";

import HeaderButton from "./HeaderButton";
import { mergeClassNames } from "@/utils/common";
import { useMenuStore } from "@/stores/menu";


const Header = () => {
  const { isOpen } = useMenuStore();

  // sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
  return (
    <header className={mergeClassNames("p-4 shadow-lg shadow-black/5 w-full sticky top-0 z-10 bg-[#e7e7e7]", isOpen && "rounded-t-2xl")}>
        <div className="mx-auto px-6 flex items-center justify-between w-full container">
            <Image src="/logo.svg" alt="Home" height={50} width={50}/>
            <div>
              <HeaderButton/>
            </div>
        </div>
    </header>
  )
}

export default Header;