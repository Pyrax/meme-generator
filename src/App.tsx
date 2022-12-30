import React from 'react';
import classNames from 'classnames';
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
import Controls from './components/blocks/Controls';
import Canvas, { CanvasRef } from './components/blocks/Canvas';
import {
  EditorItemImage,
  EditorItemText,
  EditorActions,
} from './components/editor';

const App = () => {
  const image = useStore((state) => state.image);
  const textMap = useStore((state) => state.textMap);
  const showVisualGrid = useStore((state) => state.settings.showVisualGrid);

  const canvasRef = React.useRef<CanvasRef>(null);

  return (
    <div className="flex">
      <div className="grow flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">
        <aside className="lg:h-full lg:basis-1/3 w-full flex justify-center lg:justify-end self-start bg-gradient-to-l from-indigo-50 to-sky-50">
          <Toolbar className="overflow-y-auto">
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
        <section
          className={classNames(
            'grow lg:basis-2/3 flex flex-col overflow-x-auto',
            { 'pattern-dots pattern-3 pattern-slate-300': showVisualGrid }
          )}
        >
          <Controls />
          <Workspace>
            {!image ? (
              <SplashScreen />
            ) : (
              <Canvas
                className="flex self-start hover:ring-2 hover:ring-sky-200 ring-offset-2 rounded-sm"
                image={image.element}
                texts={Object.values(textMap)}
                ref={canvasRef}
              />
            )}
          </Workspace>
          <Copyright />
        </section>
      </div>
    </div>
  );
};

export default App;
