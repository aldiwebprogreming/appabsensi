import { create } from "zustand";

export const Appstore = create((set) => ({
  nisn: "",
  id: "",
  updatenisn: (nilai) => set({ nisn: nilai }),
}));
