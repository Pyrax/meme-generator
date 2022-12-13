import { useStore } from '../../appStore';
import FileInput from '../ui/FileInput';

const SplashScreen = () => {
  const setImage = useStore((state) => state.setImage);

  // File input event handler to update state with selected image file.
  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event?.target;
    if (files) {
      const file = files[0];
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          element: img,
          originalName: file.name,
          originalType: file.type,
        });
      };
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 max-w-prose p-5 bg-slate-50 shadow-md border border-blue-400 rounded-lg">
      Select an image to edit:{' '}
      <FileInput onChange={onSelectImage} accept="image/*" />
    </div>
  );
};

export default SplashScreen;
