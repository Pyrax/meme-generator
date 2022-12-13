import { useStore } from '../../appStore';
import { FaImage } from 'react-icons/fa';
import Item from './internal/Item';
import ItemRemove from './internal/ItemRemove';

export type EditorItemImageProps = {
  className?: string;
};

const EditorItemImage = ({ ...props }: EditorItemImageProps) => {
  const image = useStore((state) => state.image);
  const removeImage = useStore((state) => state.removeImage);

  if (!image) {
    return <Item {...props}>No image selected.</Item>;
  }

  const {
    originalName,
    originalType,
    element: { height, width },
  } = image;
  const removeHandler = () => removeImage();

  return (
    <Item {...props}>
      <div className="text-slate-400 pt-1">
        <FaImage className="w-full h-auto" aria-label="Image element" />
      </div>
      <div>
        <h3>{originalName}</h3>
        <p className="font-light text-sm">
          {width}x{height} (width, height) &middot; {originalType}
        </p>
      </div>
      <div>
        <ItemRemove onRemove={removeHandler} />
      </div>
    </Item>
  );
};

export default EditorItemImage;
