import React from 'react';
import classNames from 'classnames';
import { FaUpload } from 'react-icons/fa';

export type FileInputProps = {
  className?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * File input with customized styles.
 *
 * For a guide on styling file inputs,
 * see: https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
 */
const FileInput = ({ className, ...props }: FileInputProps) => (
  <span
    className={classNames(
      className,
      'inline-block p-0.5 rounded-full text-blue-400 bg-[linear-gradient(45deg,theme(colors.blue.500)_30%,theme(colors.blue.100)_60%)] bg-[length:400%] bg-[100%] bg-no-repeat hover:bg-[0] focus-within:bg-[0] active:bg-[0] focus-within:ring cursor-pointer hover:text-blue-500 focus-within:text-blue-500 duration-500 ease-out'
    )}
  >
    <label className="flex flex-nowrap items-center gap-3 py-2 px-6 bg-slate-50 rounded-full cursor-pointer opacity-80">
      <input
        type="file"
        className="absolute opacity-0 w-[0.1px] h-[0.1px] -z-[1] overflow-hidden"
        {...props}
      />
      <FaUpload /> Choose a file
    </label>
  </span>
);

export default FileInput;
