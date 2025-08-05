import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
}

export const CheckboxBase = ({ label, color, className = '', disabled, ...rest }: CheckboxProps) => {
  const base = 'h-5 w-5 rounded border transition-all duration-200';

  const colorClasses = {
    blue: 'accent-blue-600 border-blue-600',
    red: 'accent-red-600 border-red-600',
    gray: 'accent-gray-600 border-gray-400',
    primary: 'accent-primary border-primary',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const mergedClasses = twMerge(
    clsx(base, color ? colorClasses[color] : null, disabled ? disabledClasses : '', className)
  );

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input type="checkbox" className={mergedClasses} disabled={disabled} {...rest} />
      {label && <span className={disabled ? 'text-gray-500' : 'text-sm'}>{label}</span>}
    </label>
  );
};
