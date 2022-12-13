import { useStore } from '../../appStore';
import { FaFont } from 'react-icons/fa';
import { FONTS, TextElement } from '../../slices/textSlice';
import Colorpicker from '../ui/Colorpicker';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Item from './internal/Item';
import ItemRemove from './internal/ItemRemove';

export type EditorItemTextProps = {
  className?: string;
  text: TextElement;
  textKey: string;
};

const EditorItemText = ({
  text: item,
  textKey,
  ...props
}: EditorItemTextProps) => {
  const setText = useStore((state) => state.setText);
  const removeText = useStore((state) => state.removeText);

  const changeHandler = (newText: TextElement) => setText(textKey, newText);
  const removeHandler = () => removeText(textKey);

  return (
    <Item {...props}>
      <div className="text-slate-400 pt-1">
        <FaFont className="w-full h-auto" aria-label="Text element" />
        <div className="truncate text-center text-xs">{textKey}</div>
      </div>
      <div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            Text:{' '}
            <Input
              type="text"
              value={item.text}
              onChange={(event) =>
                changeHandler({
                  ...item,
                  text: event.target.value,
                })
              }
            />
          </label>
          <label className="flex items-center justify-end gap-2 w-32 group">
            Color:{' '}
            <Colorpicker
              color={item.color}
              onChange={(color) => changeHandler({ ...item, color })}
            />
          </label>
        </div>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2 w-[108px]">
            Size:{' '}
            <Input
              type="number"
              value={item.size}
              onChange={(event) =>
                changeHandler({
                  ...item,
                  size: parseInt(event.target.value),
                })
              }
            />
          </label>
          <label className="flex items-center gap-2 grow">
            Font:{' '}
            <Select
              value={item.font}
              className="h-full"
              options={FONTS}
              onChange={(event) =>
                changeHandler({
                  ...item,
                  font: event.target.value as typeof FONTS[number],
                })
              }
            />
          </label>
        </div>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2 w-[128px]">
            Offset:{' '}
            <Input
              type="number"
              value={item.offset}
              onChange={(event) =>
                changeHandler({
                  ...item,
                  offset: parseInt(event.target.value),
                })
              }
            />
          </label>
        </div>
      </div>
      <div>
        <ItemRemove onRemove={removeHandler} />
      </div>
    </Item>
  );
};

export default EditorItemText;
