import React from 'react';
import { TextElement } from '../../slices/textSlice';

export type CanvasProps = {
  image: HTMLImageElement;
  texts: TextElement[];
  zoom?: number;
  className?: string | undefined;
};

export type CanvasRef = {
  saveImage: ({ name, extension, mimeType }: SaveFileType) => void;
};

export type SaveFileType = FileType & { name?: string };

export type FileType = {
  extension: string;
  mimeType: string;
};

type getWrappedTextFragmentsOptions = {
  context: CanvasRenderingContext2D;
  text: string;
  x: number;
  y: number;
  maxWidth: number;
  lineHeight: number;
};

/**
 * Draws line-wrapping text on a canvas
 */
const getWrappedTextFragments = (
  onTextWrapped: (textFragment: string, x: number, y: number) => any,
  { context, text, x, y, maxWidth, lineHeight }: getWrappedTextFragmentsOptions
) => {
  let current = '';
  let yPos = y;
  const words = text.split(' ');

  for (let n = 0; n < words.length; n++) {
    const withNextWord = current + words[n] + ' ';
    const { width } = context.measureText(withNextWord);

    // Line exceeds width, so all previous words should be drawn and the
    // next word should go in the next line.
    if (width > maxWidth) {
      onTextWrapped(current, x, yPos);
      yPos += lineHeight;
      current = words[n] + ' ';
    } else {
      current = withNextWord;
    }
  }
  // Draw remaining text.
  onTextWrapped(current, x, yPos);
};

const getTextCenter = (
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number
) => {
  const { width } = context.measureText(text);
  return [x - width / 2, y];
};

const Canvas = React.forwardRef<CanvasRef, CanvasProps>(
  ({ image, texts, zoom = 100, className }, forwardedRef) => {
    const innerRef = React.useRef<HTMLCanvasElement>(null);

    const { width = 0, height = 0 } = image;

    const scale = zoom / 100.0;
    const scaledWidth = Math.ceil(width * scale);
    const scaledHeight = Math.ceil(height * scale);

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
          context.save();

          context.scale(scale, scale);
          context.drawImage(image, 0, 0);

          texts.forEach(
            ({
              text,
              size,
              font,
              color,
              position,
              offset,
              strokeColor,
              strokeSize,
            }) => {
              context.textAlign = 'left';
              context.textBaseline = 'middle';
              context.font = `${size}px ${font}`;

              const yPos = position === 'top' ? size : image.height - size / 2;
              const [x, y] = [image.width / 2, yPos + offset];

              const textOptions = {
                context,
                text,
                x,
                y,
                maxWidth: image.width,
                lineHeight: size,
              };

              if (strokeSize && strokeColor) {
                getWrappedTextFragments((fragText, fragX, fragY) => {
                  const [cx, cy] = getTextCenter(
                    context,
                    fragText,
                    fragX,
                    fragY
                  );
                  context.strokeStyle = strokeColor;
                  context.lineWidth = strokeSize;
                  context.miterLimit = 2; // prevents weird peaks of font edges
                  context.strokeText(fragText, cx, cy);
                }, textOptions);
              }

              getWrappedTextFragments((fragText, fragX, fragY) => {
                const [cx, cy] = getTextCenter(context, fragText, fragX, fragY);
                context.fillStyle = color;
                context.fillText(fragText, cx, cy);
              }, textOptions);
            }
          );

          context.restore();
        }
      }
    }, [image, texts, scale]);

    return (
      <div className={className}>
        <canvas ref={innerRef} width={scaledWidth} height={scaledHeight}>
          Unfortunately, your browser does not support canvas. Please try a
          different browser.
        </canvas>
      </div>
    );
  }
);

export default Canvas;
