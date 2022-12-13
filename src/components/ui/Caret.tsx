import classNames from 'classnames';

export type CaretProps = {
  className?: string | undefined;
  size?: number;
};

const sizes = [
  '-top-[10px] border-[10px] mr-2',
  '-top-[12px] border-[12px] mr-1.5',
  '-top-[14px] border-[14px] mr-1',
  '-top-[16px] border-[16px] mr-0.5',
  '-top-[18px] border-[18px]',
];

const Caret = ({ className, size = 0, ...props }: CaretProps) => {
  return (
    <div
      className={classNames(
        `absolute h-0 w-0 ${sizes[size]} right-1 border-t-0 border-l-transparent border-r-transparent`,
        className
      )}
      {...props}
    />
  );
};

export default Caret;
