import classNames from 'classnames';
import { useStore } from '../../appStore';
import { FaFont, FaDownload } from 'react-icons/fa';
import { TextElement } from '../../slices/textSlice';
import Button from '../ui/Button';

export type EditorActionsProps = {
  className?: string;
  onSave: Function;
};

const EXPORT_FILE_TYPES = [
  { extension: 'jpg', mimeType: 'image/jpeg' },
  { extension: 'png', mimeType: 'image/png' },
  { extension: 'gif', mimeType: 'image/gif' },
];

const EditorActions = ({ className, onSave, ...props }: EditorActionsProps) => {
  const textMap = useStore((state) => state.textMap);
  const setText = useStore((state) => state.setText);

  const defaultText = {
    text: 'Challenge accepted',
    font: 'Arial',
    size: 24,
    color: '#000000',
  };

  const setTopText = () =>
    setText('top', {
      ...defaultText,
      position: 'top',
      offset: 12,
    } as TextElement);

  const setBottomText = () =>
    setText('bottom', {
      ...defaultText,
      position: 'bottom',
      offset: -12,
    } as TextElement);

  const selectHandler = (selected: number) => {
    const { extension, mimeType } = EXPORT_FILE_TYPES[selected];
    return onSave({ extension, mimeType });
  };

  return (
    <div className={classNames(className, 'px-4')} {...props}>
      <Button onClick={() => setTopText()} disabled={!!textMap['top']}>
        <FaFont /> Add top text
      </Button>
      <Button onClick={() => setBottomText()} disabled={!!textMap['bottom']}>
        <FaFont /> Add bottom text
      </Button>
      <Button
        selectValues={EXPORT_FILE_TYPES.map((type) => type.extension)}
        onDropdownSelect={selectHandler}
        onClick={() => selectHandler(0)}
      >
        <FaDownload /> Save
      </Button>
    </div>
  );
};

export default EditorActions;
