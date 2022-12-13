import { StateCreator } from 'zustand';
import { TextSlice } from './textSlice';

export type ImageElement = {
  element: HTMLImageElement;
  originalName: string;
  originalType: string;
};

export type CanvasSlice = {
  image: ImageElement | null;
  setImage: (image: ImageElement) => void;
  removeImage: () => void;
};

export const createCanvasSlice: StateCreator<
  CanvasSlice & TextSlice,
  [],
  [],
  CanvasSlice
> = (set) => ({
  image: null,
  setImage: (image) => set({ image }),
  removeImage: () => set({ image: null, textMap: {} }),
});
