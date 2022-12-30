import classNames from 'classnames';
import { useStore } from '../../appStore';
import { FaFont, FaDownload } from 'react-icons/fa';
import { TextElement } from '../../slices/textSlice';
import Button from '../ui/Button';
import { FileType } from '../blocks/Canvas';

export type EditorActionsProps = {
  className?: string;
  onSave: (file: FileType) => void;
};

const EXPORT_FILE_TYPES: FileType[] = [
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
    strokeSize: 0,
    strokeColor: '#ffffff',
  };

  const addTextTopHandler = () =>
    setText('top', {
      ...defaultText,
      position: 'top',
      offset: 12,
    } as TextElement);

  const addTextBottomHandler = () =>
    setText('bottom', {
      ...defaultText,
      position: 'bottom',
      offset: -12,
    } as TextElement);

  const selectImageSaveHandler = (selected: number) => {
    const { extension, mimeType } = EXPORT_FILE_TYPES[selected];
    return onSave({ extension, mimeType });
  };

  return (
    <div className={classNames(className, 'px-4')} {...props}>
      <Button onClick={addTextTopHandler} disabled={!!textMap['top']}>
        <FaFont /> Add top text
      </Button>
      <Button onClick={addTextBottomHandler} disabled={!!textMap['bottom']}>
        <FaFont /> Add bottom text
      </Button>
      <Button
        selectValues={EXPORT_FILE_TYPES.map((type) => type.extension)}
        onDropdownSelect={selectImageSaveHandler}
        onClick={() => selectImageSaveHandler(0)}
      >
        <FaDownload /> Save
      </Button>
    </div>
  );
};

export default EditorActions;
