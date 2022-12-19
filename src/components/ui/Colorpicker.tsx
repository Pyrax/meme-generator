import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { ColorPickerBaseProps } from 'react-colorful/dist/types';
import useClickOutside from '../../hooks/useClickOutside';

export type ColorpickerProps = ColorPickerBaseProps<string>;

const PopoverPicker = ({ color, onChange }: ColorpickerProps) => {
  const popover = React.useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = React.useState(false);

  const close = React.useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative h-full min-h-[32px] aspect-square group">
      <button
        className="h-full aspect-square rounded-lg border-4 border-gray-200 opacity-75 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div
          className="absolute top-full pt-1 left-0 rounded-md drop-shadow-lg z-10"
          ref={popover}
        >
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default PopoverPicker;
