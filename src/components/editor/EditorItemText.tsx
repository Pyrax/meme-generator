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
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <label className="flex items-center gap-2 grow">
          Text:
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
        <label className="flex items-center gap-2 group grow">
          Color:
          <Colorpicker
            color={item.color}
            onChange={(color) => changeHandler({ ...item, color })}
          />
        </label>
        <label className="flex items-center gap-2 w-28">
          Size:
          <Input
            type="number"
            min={0}
            value={item.size}
            onChange={(event) =>
              changeHandler({
                ...item,
                size: parseInt(event.target.value),
              })
            }
          />
        </label>
        <label className="flex items-center gap-2 w-48 grow">
          Font:
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
        <label className="flex items-center gap-2 w-32">
          Offset:
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
        <label className="flex items-center gap-2 w-28">
          Stroke:
          <Input
            type="number"
            min={0}
            value={item.strokeSize}
            onChange={(event) =>
              changeHandler({
                ...item,
                strokeSize: parseInt(event.target.value),
              })
            }
          />
        </label>
        <div className="grow" />
        <label className="flex items-center gap-2 group grow">
          Color:
          <Colorpicker
            color={item.strokeColor}
            onChange={(color) => changeHandler({ ...item, strokeColor: color })}
          />
        </label>
      </div>
      <div>
        <ItemRemove onRemove={removeHandler} />
      </div>
    </Item>
  );
};

export default EditorItemText;
