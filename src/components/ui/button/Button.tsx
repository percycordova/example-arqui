import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
}

export const Button = ({
  title,
  color,
  className = '',
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) => {
  const base =
    'px-4 py-2 rounded font-medium shadow-sm transition-all duration-200 focus:outline-none cursor-pointer';

  const colorClasses = {
    blue: 'bg-blue-600 text-white hover:bg-blue-700',
    red: 'bg-red-600 text-white hover:bg-red-700',
    gray: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    primary: 'bg-primary text-white hover:bg-primary/80',
  };

  const disabledClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed';

  const mergedClasses = twMerge(
    clsx(
      base,
      disabled
        ? disabledClasses
        : color
          ? colorClasses[color]
          : null,
      className
    )
  );

  return (
    <button type={type} className={mergedClasses} disabled={disabled} {...rest}>
      {title}
    </button>
  );
};
