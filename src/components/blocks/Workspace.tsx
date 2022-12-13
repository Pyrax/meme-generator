import classNames from 'classnames';

export type WorkspaceProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

const Workspace = ({ children, className }: WorkspaceProps) => (
  <div
    className={classNames(className, 'grow flex flex-col justify-center p-8')}
  >
    {children}
  </div>
);

export default Workspace;
