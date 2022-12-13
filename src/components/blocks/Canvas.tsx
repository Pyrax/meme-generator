import React from 'react';
import { TextElement } from '../../slices/textSlice';

export type CanvasProps = {
  image: HTMLImageElement;
  texts: TextElement[];
};

export type CanvasRef = {
  saveImage: ({
    name,
    extension,
    mimeType,
  }: {
    name?: string;
    extension?: string;
    mimeType?: string;
  }) => void;
};

const Canvas = React.forwardRef<CanvasRef, CanvasProps>(
  ({ image, texts }, forwardedRef) => {
    const innerRef = React.useRef<HTMLCanvasElement>(null);

    const { width = 0, height = 0 } = image;

    React.useImperativeHandle(forwardedRef, () => ({
      saveImage({ name = 'meme', extension = 'jpg', mimeType = 'image/jpeg' }) {
        if (!innerRef.current) {
          return;
        }

        // Use a temporary link for download
        const tmpLink = document.createElement('a');

        // Default file name of download unless changed by user:
        tmpLink.download = `${name}.${extension}`;
        tmpLink.href = innerRef.current.toDataURL(mimeType);

        // Trigger download:
        tmpLink.click();
        tmpLink.remove();
      },
    }));

    React.useEffect(() => {
      if (innerRef?.current) {
        const canvas = innerRef.current;
        const context = canvas.getContext('2d');

        if (context) {
          context.drawImage(image, 0, 0);

          texts.forEach(({ text, size, font, color, position, offset }) => {
            const yPos = position === 'top' ? size : image.height - size / 2;

            // TODO:  auto line-break

            context.font = `${size}px ${font}`;
            context.fillStyle = color;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, image.width / 2, yPos + offset, image.width);
          });
        }
      }
    }, [image, texts]);

    return (
      <div>
        <canvas ref={innerRef} width={width} height={height}>
          Unfortunately, your browser does not support canvas. Please try a
          different browser
        </canvas>
      </div>
    );
  }
);

export default Canvas;
