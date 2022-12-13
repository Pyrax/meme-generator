import { useStore } from './appStore';
import { FaFont, FaDownload } from 'react-icons/fa';
import {
  Toolbar,
  ToolbarHeader,
  ToolbarGroup,
} from './components/blocks/Toolbar';
import Workspace from './components/blocks/Workspace';
import Copyright from './components/blocks/Copyright';
import SplashScreen from './components/blocks/SplashScreen';
import Button from './components/ui/Button';

const App = () => {
  const image = useStore((state) => state.image);

  return (
    <div className="grid grid-cols-3">
      <aside className="flex justify-end self-start h-full relative bg-gradient-to-l from-indigo-50 to-sky-50">
        <Toolbar>
          <div className="divide-y mx-4 py-4">
            <h1 className="pb-2 text-3xl font-bold text-indigo-600">
              <a href="/">Meme generator</a>
            </h1>
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

              <div className="p-4 flex flex-wrap gap-2 text-sm bg-stone-50 rounded-b-lg">
                <Button>
                  <FaFont /> Add top text
                </Button>
                <Button>
                  <FaFont /> Add bottom text
                </Button>
                <Button selectValues={['.jpg', '.png', '.gif']}>
                  <FaDownload /> Save
                </Button>
              </div>
            </ToolbarGroup>
          )}
        </Toolbar>
      </aside>
      <section className="col-span-2 flex flex-col space-between min-h-screen pattern-dots pattern-3 pattern-slate-300">
        <Workspace>{!image ? <SplashScreen /> : <div>Canvas</div>}</Workspace>
        <Copyright />
      </section>
    </div>
  );
};

export default App;
