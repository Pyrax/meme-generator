import React from 'react';
import { useStore } from './appStore';
import {
  Toolbar,
  ToolbarHeader,
  ToolbarGroup,
} from './components/blocks/Toolbar';
import Logo from './components/blocks/Logo';
import Workspace from './components/blocks/Workspace';
import Copyright from './components/blocks/Copyright';
import SplashScreen from './components/blocks/SplashScreen';
import Canvas, { CanvasRef } from './components/blocks/Canvas';
import {
  EditorItemImage,
  EditorItemText,
  EditorActions,
} from './components/editor';

const App = () => {
  const image = useStore((state) => state.image);
  const textMap = useStore((state) => state.textMap);

  const canvasRef = React.useRef<CanvasRef>(null);

  return (
    <div className="grid grid-cols-3">
      <aside className="flex justify-end self-start h-full relative bg-gradient-to-l from-indigo-50 to-sky-50">
        <Toolbar>
          <div className="divide-y mx-4 py-4">
            <Logo />
            <p className="pt-2">
              Create your own memes from images on your hard drive!
            </p>
          </div>
          {!image && (
            <ToolbarGroup>
              <ToolbarHeader>Get started</ToolbarHeader>
              <p className="px-4 pb-4">
                This is your toolbar. Select an image in your workspace right
                next to this before you can edit it here.
              </p>
            </ToolbarGroup>
          )}
          {image && (
            <ToolbarGroup className="divide-y">
              <ToolbarHeader>Edit elements</ToolbarHeader>
              <EditorItemImage className="py-4" />
              {Object.entries(textMap).map(([key, text]) => (
                <EditorItemText
                  key={`text-${key}`}
                  className="py-4"
                  text={text}
                  textKey={key}
                />
              ))}
              <EditorActions
                className="py-4 flex flex-wrap gap-2 text-sm bg-stone-50 rounded-b-lg"
                onSave={(img) => canvasRef?.current?.saveImage(img)}
              />
            </ToolbarGroup>
          )}
        </Toolbar>
      </aside>
      <section className="col-span-2 flex flex-col space-between min-h-screen pattern-dots pattern-3 pattern-slate-300">
        <Workspace>
          {!image ? (
            <SplashScreen />
          ) : (
            <Canvas
              image={image.element}
              texts={Object.values(textMap)}
              ref={canvasRef}
            />
          )}
        </Workspace>
        <Copyright />
      </section>
    </div>
  );
};

export default App;
