import create from 'zustand';
import { createCanvasSlice, CanvasSlice } from './slices/canvasSlice';
import { createTextSlice, TextSlice } from './slices/textSlice';

export const useStore = create<CanvasSlice & TextSlice>()((...a) => ({
  ...createCanvasSlice(...a),
  ...createTextSlice(...a),
}));
