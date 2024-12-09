"use client"
import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { useMenuStore } from '@/stores/menu';

const MenuCloseButton = () => {
    const { isOpen, open, close} = useMenuStore();
    return (
        <button onClick={close} className="text-xl p-2 align-middle current/75 focus:ring-2 ring-current rounded hover:current">
            <FaXmark />
        </button>
    )
}

export default MenuCloseButton