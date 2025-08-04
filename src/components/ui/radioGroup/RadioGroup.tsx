import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Option {
  label: string;
  value: string | number;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  color?: 'blue' | 'red' | 'gray' | 'primary';
  selectedValue?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}

export const RadioGroup = ({
  name,
  options,
  color = 'primary',
  selectedValue,
  onChange,
  disabled,
  className = '',
}: RadioGroupProps) => {
  const base = 'h-5 w-5 rounded-full border transition-all duration-200';

  const colorClasses = {
    blue: 'accent-blue-600 border-blue-600',
    red: 'accent-red-600 border-red-600',
    gray: 'accent-gray-600 border-gray-400',
    primary: 'accent-primary border-primary',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const radioClass = twMerge(
    clsx(base, color ? colorClasses[color] : null, disabled ? disabledClasses : '', className)
  );

  return (
    <div className="flex flex-col gap-2">
      {options.map(option => (
        <label key={option.value} className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange?.(option.value)}
            className={radioClass}
            disabled={disabled}
          />
          <span className={disabled ? 'text-gray-500' : 'text-sm'}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
