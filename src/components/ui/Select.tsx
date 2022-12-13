import React from 'react';
import classNames from 'classnames';

export type SelectProps = {
  options: readonly string[];
  className?: string | undefined;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ options, className, ...props }: SelectProps) => (
  <select
    className={classNames(
      className,
      'px-2 py-1 block w-full rounded-md bg-gray-100 border-2 border-gray-200 focus:border-indigo-400 focus:bg-white outline-0'
    )}
    {...props}
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default Select;
