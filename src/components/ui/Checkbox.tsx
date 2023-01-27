import React from 'react';
import classNames from 'classnames';

export type CheckboxProps = {
  className?: string | undefined;
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <label className="flex gap-2 items-center">
    <input
      type="checkbox"
      className={classNames(
        className,
        'w-4 h-4 text-indigo-500 bg-gray-100 rounded border-gray-300 focus:ring-indigo-400 focus:ring-2'
      )}
      {...props}
    />
    {children}
  </label>
);

export default Checkbox;
