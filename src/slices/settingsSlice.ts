import { StateCreator } from 'zustand';

export type Settings = {
  showVisualGrid: boolean;
  zoom: number;
};

export type SettingsSlice = {
  settings: Settings;
  setSettings: (settings: Partial<Settings>) => void;
  resetSettings: () => void;
};

const defaultSettings = {
  showVisualGrid: true,
  zoom: 100,
};

export const createSettingsSlice: StateCreator<
  SettingsSlice,
  [],
  [],
  SettingsSlice
> = (set) => ({
  settings: defaultSettings,
  // Merge settings with current state if only a partial setting is given
  setSettings: (settings) =>
    set((state) => ({ settings: { ...state.settings, ...settings } })),
  resetSettings: () => set({ settings: defaultSettings }),
});
