"use client"
import { FaBars } from "react-icons/fa6";
import { useMenuStore } from "@/stores/menu";

function HeaderButton() {
    const { isOpen, open, close} = useMenuStore();

    return (
        <button onClick={open} className="text-xl p-2 align-middle text-black/75 dark:text-white/75 focus:ring-2 ring-current rounded dark:hover:text-white hover:text-black">
            <FaBars/>
        </button>
    )
}

export default HeaderButton