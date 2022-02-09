import createStore from "zustand";

interface UiState {
  isCompact: boolean;
  setIsCompact: (value: boolean) => void;
}

export const useUiStore = createStore<UiState>((set, get) => ({
  isCompact: window.innerWidth <= 600,
  setIsCompact: (value) => set({ isCompact: value }),
}));
