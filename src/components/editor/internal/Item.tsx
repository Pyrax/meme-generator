import classNames from 'classnames';

export type ItemProps = {
  children?: React.ReactNode;
  className?: string;
};

const Item = ({ children, className, ...props }: ItemProps) => (
  <div
    className={classNames(
      className,
      'px-4 grid grid-cols-[theme(space.8)_auto_max-content] gap-4'
    )}
    {...props}
  >
    {children}
  </div>
);

export default Item;
