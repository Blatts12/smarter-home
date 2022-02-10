import createStore from "zustand";

interface WindowSettings {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface UiState {
  isCompact: boolean;
  setIsCompact: (value: boolean) => void;

  selectedDevice: string | null;
  setSelectedDevice: (id: string) => void;

  showWindow: boolean;
  openWindow: () => void;
  closeWindow: () => void;

  settingsWindow: WindowSettings;
  setSettings: (settings: WindowSettings) => void;
}

export const useUiStore = createStore<UiState>((set, get) => ({
  isCompact: window.innerWidth <= 600,
  setIsCompact: (value) => set({ isCompact: value }),

  selectedDevice: null,
  setSelectedDevice: (id) => set({ selectedDevice: id, showWindow: true }),

  showWindow: false,
  openWindow: () => set({ showWindow: true }),
  closeWindow: () => set({ showWindow: false, selectedDevice: null }),

  settingsWindow: {
    x: 0,
    y: 0,
    width: 500,
    height: 400,
  },
  setSettings: (settings) => set({ settingsWindow: settings }),
}));
