import { create } from "zustand";

export const useMenuStore = create((set) => ({
    isOpen: false,
    open: () => set(() => ({ isOpen: true})),
    close: () => set(() => ({ isOpen: false})),
}))