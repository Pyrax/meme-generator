import { useStore } from '../../appStore';
import Checkbox from '../ui/Checkbox';

const Controls = () => {
  const showVisualGrid = useStore((state) => state.settings.showVisualGrid);
  const setSettings = useStore((state) => state.setSettings);

  const toggleGridHandler = () => {
    setSettings({ showVisualGrid: !showVisualGrid });
  };

  return (
    <div className="flex bg-slate-50 shadow-sm items-center px-8 py-3">
      <Checkbox checked={showVisualGrid} onChange={toggleGridHandler}>
        Visual grid
      </Checkbox>
    </div>
  );
};

export default Controls;
