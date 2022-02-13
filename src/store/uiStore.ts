import createStore from "zustand";
import { getIsCompact } from "../utils/getIsCompact";

interface WindowSettings {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface UiState {
  isCompact: boolean;
  setIsCompact: (value: boolean) => void;

  showCompactList: boolean;
  openCompactList: () => void;
  closeCompactList: () => void;

  selectedDevice: string | null;
  setSelectedDevice: (id: string) => void;

  showWindow: boolean;
  openWindow: () => void;
  closeWindow: () => void;

  settingsWindow: WindowSettings;
  setSettings: (settings: WindowSettings) => void;
}

export const useUiStore = createStore<UiState>((set, get) => ({
  isCompact: getIsCompact(),
  setIsCompact: (value) => set({ isCompact: value }),

  showCompactList: false,
  openCompactList: () => set({ showCompactList: true }),
  closeCompactList: () => set({ showCompactList: false }),

  selectedDevice: null,
  setSelectedDevice: (id) => set({ selectedDevice: id, showWindow: true }),

  showWindow: false,
  openWindow: () => set({ showWindow: true }),
  closeWindow: () => set({ showWindow: false, selectedDevice: null }),

  settingsWindow: {
    x: 0,
    y: 0,
    width: 420,
    height: 420,
  },
  setSettings: (settings) => set({ settingsWindow: settings }),
}));
