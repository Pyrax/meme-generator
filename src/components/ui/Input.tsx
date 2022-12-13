import React from 'react';
import classNames from 'classnames';

export type InputProps = {
  className?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={classNames(
      className,
      'px-2 py-1 block w-full rounded-md bg-gray-100 border-2 border-gray-200 focus:border-indigo-400 focus:bg-white outline-0'
    )}
    {...props}
  />
);

export default Input;
