import { StateCreator } from 'zustand';

export const FONTS = ['Arial', 'Comic Sans', 'Pacifico'] as const;

export type TextElement = {
  text: string;
  position: TextPosition;
  font: typeof FONTS[number];
  size: number;
  offset: number;
  color: string;
};

export type TextPosition = 'top' | 'bottom';

export type TextSlice = {
  textMap: { [key: string]: TextElement };
  setText: (key: string, text: TextElement) => void;
  removeText: (key: string) => void;
};

export const createTextSlice: StateCreator<TextSlice, [], [], TextSlice> = (
  set
) => ({
  textMap: {},
  setText: (key, text) =>
    set((state) => ({
      textMap: { ...state.textMap, [key]: text },
    })),
  removeText: (key) =>
    set((state) => {
      const { [key]: deleted, ...rest } = state.textMap;
      return { textMap: { ...rest } };
    }),
});
