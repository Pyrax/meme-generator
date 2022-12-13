import classNames from 'classnames';

export type ToolbarProps = {
  children: React.ReactNode;
  className?: string;
};

export const Toolbar = ({ children, className }: ToolbarProps) => (
  <div className={classNames(className, 'm-6 grow max-w-lg')}>{children}</div>
);

export const ToolbarHeader = ({ children, className }: ToolbarProps) => (
  <h2
    className={classNames(className, 'p-4 font-bold text-lg text-indigo-400')}
  >
    {children}
  </h2>
);

export const ToolbarGroup = ({ children, className }: ToolbarProps) => (
  <div
    className={classNames(className, 'mt-4 mx-2 shadow-sm rounded-lg bg-white')}
  >
    {children}
  </div>
);

export default Toolbar;
