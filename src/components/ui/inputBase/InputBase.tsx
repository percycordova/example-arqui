import React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
}

export const InputBase = ({
  label,
  color = 'gray',
  className = '',
  disabled,
  ...rest
}: InputProps) => {
  const base = 'w-[400px] px-3 py-2 rounded border transition-all duration-200 focus:outline-none';

  const colorClasses = {
    blue: 'border-blue-600 focus:ring-2 focus:ring-blue-300',
    red: 'border-red-600 focus:ring-2 focus:ring-red-300',
    gray: 'border-gray-400 focus:ring-2 focus:ring-gray-200 focus:border-gray-400',
    primary: 'border-primary focus:ring-2 focus:ring-primary/50',
  } as const;

  const disabledClasses = 'bg-gray-100 text-gray-500 cursor-not-allowed';

  const mergedClasses = cn(
    base,
    colorClasses[color] ?? 'border-gray-300 focus:ring-2 focus:ring-gray-200',
    disabled && disabledClasses,
    className
  );

  return (
    <div className="flex flex-row items-center gap-5">
      {label && <label className="text-sm w-[80px] font-medium text-[#333]">{label}</label>}
      <input className={mergedClasses} disabled={disabled} {...rest} />
    </div>
  );
};
