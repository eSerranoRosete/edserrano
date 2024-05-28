import { create } from "zustand";
import { projects } from "@/lib/projects";

type AppColors = {
  background: string;
  foreground: string;
};

export type State = {
  colors: AppColors;
};

export type Actions = {
  setAppColors: (colors: AppColors) => void;
};

export const useAppState = create<State & Actions>((set) => ({
  colors: {
    background: projects[0].background,
    foreground: projects[0].foreground,
  },

  setAppColors: (colors) => set({ colors }),
}));
