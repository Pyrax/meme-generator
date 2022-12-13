import React from 'react';
import classNames from 'classnames';
import { FaCaretDown } from 'react-icons/fa';
import Caret from './Caret';

// Common props used by Button and SplitButton
type CommonProps = {
  children?: React.ReactNode;
  className?: string | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  variant?: keyof typeof variants;
  // Optional dropdown props:
  selectValues?: string[];
  onDropdownSelect?: (selected: number) => void;
} & CommonProps;

const variants = {
  default:
    'py-2 px-4 rounded-lg text-indigo-400 border-2 border-indigo-200 bg-slate-50 hover:bg-indigo-100 hover:text-indigo-500 hover:border-indigo-500 ring-indigo-300 transition-colors',
  dangerAction:
    'p-2 rounded-full text-slate-400 hover:text-red-600 ring-red-300',
};

const SplitButton = ({ children, className, ...props }: CommonProps) => (
  <span
    className={classNames(className, `h-full flex flex-nowrap items-center`)}
    tabIndex={0}
    role="button"
    {...props}
  >
    {children}
  </span>
);

const Button = ({
  variant = 'default',
  children = 'Button',
  selectValues,
  onDropdownSelect,
  className,
  ...props
}: ButtonProps) => {
  // If button has select options, render a split-button with a dropdown menu
  // showing the options.
  if (selectValues) {
    // Pass props to the button on the left, since that button is used for default action.
    // So, we can register handlers like onClick for the default option in our parent component.
    return (
      <button
        tabIndex={-1}
        className={classNames(
          className,
          'flex flex-nowrap items-center font-extrabold relative'
        )}
      >
        <SplitButton
          className={`${variants[variant]} gap-2 rounded-r-none border-r focus:ring cursor-pointer`}
          {...props}
        >
          {children}
        </SplitButton>
        <span className="group h-full">
          <SplitButton
            className={`${variants[variant]} px-2 border-indigo-200 rounded-l-none border-l focus:ring cursor-pointer`}
          >
            <FaCaretDown />
          </SplitButton>
          <span className="hidden group-focus-within:block active:block absolute top-full right-0 left-0 bg-slate-50 rounded-lg border border-indigo-200 bg-indigo-50 drop-shadow-lg mt-1.5 -mx-[6px] cursor-default">
            {/* Dropdown menu-arrow */}
            <Caret className="border-indigo-50 z-10" />
            {/* Dropdown menu-arrow border */}
            <Caret size={1} className="border-indigo-200" />
            <ul className="divide-y font-light">
              {selectValues.map((value, index) => (
                <li
                  key={value}
                  className="flex first:rounded-t-lg last:rounded-b-lg hover:bg-indigo-100 focus-within:bg-indigo-100 active:bg-indigo-200 cursor-pointer"
                >
                  <button
                    className="px-4 py-1.5 grow"
                    onClick={() => {
                      if (!onDropdownSelect) {
                        return;
                      }
                      return onDropdownSelect(index);
                    }}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      className={classNames(
        className,
        `flex flex-nowrap items-center font-extrabold relative gap-2 focus:ring disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400`,
        variants[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
