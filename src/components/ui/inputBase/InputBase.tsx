import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
}

export const InputBase = ({ label, color = 'gray', className = '', disabled, ...rest }: InputProps) => {
  const base = 'w-full px-3 py-2 rounded border transition-all duration-200 focus:outline-none';

  const colorClasses = {
    blue: 'border-blue-600 focus:ring-2 focus:ring-blue-300',
    red: 'border-red-600 focus:ring-2 focus:ring-red-300',
    gray: 'border-gray-400 focus:ring-2 focus:ring-gray-200',
    primary: 'border-primary focus:ring-2 focus:ring-primary/50',
  };

  const disabledClasses = 'bg-gray-100 text-gray-500 cursor-not-allowed';

  const mergedClasses = twMerge(
    clsx(
      base,
      color ? colorClasses[color] : 'border-gray-300 focus:ring-2 focus:ring-gray-200',
      disabled ? disabledClasses : '',
      className
    )
  );

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input className={mergedClasses} disabled={disabled} {...rest} />
    </div>
  );
};
