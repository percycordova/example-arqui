import React from 'react';
import { cn } from '@/utils/cn';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  color?: 'blue' | 'red' | 'gray' | 'primary';
  defaultMessage?: string;
}

export const SelectBase = ({
  options,
  color = 'gray',
  className = '',
  disabled,
  defaultMessage = 'Seleccione una opción',
  ...rest
}: SelectProps) => {
  const base =
    'px-4 py-2 rounded shadow-sm transition-all duration-200 focus:outline-none cursor-pointer border';

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-600 text-blue-700 focus:ring-2 focus:ring-blue-300',
    red: 'bg-red-50 border-red-600 text-red-700 focus:ring-2 focus:ring-red-300',
    gray: 'bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-200',
    primary: 'bg-primary/10 border-primary text-primary focus:ring-2 focus:ring-primary/40',
  } as const;

  const disabledClasses = 'bg-gray-100 text-gray-500 cursor-not-allowed border-gray-300';

  const mergedClasses = cn(base, disabled ? disabledClasses : colorClasses[color], className);

  return (
    <select className={mergedClasses} disabled={disabled} style={{ width: '400px' }} {...rest}>
      <option value="" disabled>
        {defaultMessage}
      </option>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
