import React from 'react';
import { useStore } from '../../appStore';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';

const Controls = () => {
  const { showVisualGrid, zoom } = useStore((state) => state.settings);
  const setSettings = useStore((state) => state.setSettings);

  const toggleGridHandler = () => {
    setSettings({ showVisualGrid: !showVisualGrid });
  };

  const setZoomHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ zoom: parseInt(event.target.value) });
  };

  return (
    <div className="flex px-8 py-2 gap-6 shadow-sm bg-slate-50 items-center sticky left-0">
      <label className="relative">
        <span className="sr-only">Zoom level</span>
        <Input
          type="number"
          min={25}
          max={400}
          step={5}
          value={zoom}
          className="w-[calc(3ch+theme(spacing.14))]"
          onChange={setZoomHandler}
        />
        <span className="absolute inset-y-0 right-8 select-none flex items-center font-thin">
          %
        </span>
      </label>
      <Checkbox checked={showVisualGrid} onChange={toggleGridHandler}>
        Visual grid
      </Checkbox>
    </div>
  );
};

export default Controls;
