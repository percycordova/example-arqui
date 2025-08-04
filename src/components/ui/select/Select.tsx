import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  color?: 'blue' | 'red' | 'gray' | 'primary';
}

export const Select = ({ options, color, className = '', disabled, ...rest }: SelectProps) => {
  const base =
    'px-4 py-2 rounded shadow-sm transition-all duration-200 focus:outline-none cursor-pointer border border-gray-400';

  const colorClasses = {
    blue: 'bg-blue-50 border border-blue-600 text-blue-700 focus:ring-2 focus:ring-blue-300',
    red: 'bg-red-50 border border-red-600 text-red-700 focus:ring-2 focus:ring-red-300',
    gray: 'bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-200',
    primary: 'bg-primary/10 border border-primary text-primary focus:ring-2 focus:ring-primary/40',
  };

  const disabledClasses = 'bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-300';

  const mergedClasses = twMerge(
    clsx(base, disabled ? disabledClasses : color ? colorClasses[color] : null, className)
  );

  return (
    <select className={mergedClasses} disabled={disabled} {...rest}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
