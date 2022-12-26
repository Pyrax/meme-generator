import classNames from 'classnames';

export type WorkspaceProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

const Workspace = ({ children, className }: WorkspaceProps) => (
  <>
    {/* grow to fill height */}
    <div className="grow flex">
      {/* grow to fill width */}
      <div className="grow flex flex-col justify-center pt-8 px-8">
        {children}
      </div>
    </div>
  </>
);

export default Workspace;
