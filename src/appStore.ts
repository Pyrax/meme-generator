import create from 'zustand';
import { createCanvasSlice, CanvasSlice } from './slices/canvasSlice';
import { createTextSlice, TextSlice } from './slices/textSlice';
import { createSettingsSlice, SettingsSlice } from './slices/settingsSlice';

export const useStore = create<CanvasSlice & TextSlice & SettingsSlice>()(
  (...a) => ({
    ...createCanvasSlice(...a),
    ...createTextSlice(...a),
    ...createSettingsSlice(...a),
  })
);
