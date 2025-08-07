import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  color?: 'blue' | 'red' | 'gray' | 'primary';
  loading?: boolean;
}

export const ButtonBase = ({
  title,
  children,
  color = 'gray',
  loading = false,
  className = '',
  type = 'button',
  disabled,
  ...rest
}: ButtonBaseProps) => {
  const base =
    'inline-flex cursor-pointer items-center justify-center min-w-[200px] px-4 py-3 rounded font-medium shadow-sm text-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1';

  const colorClasses = {
    blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200',
    red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-200',
    gray: 'bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200',
    primary: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary/30',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:bg-inherit border border-gray-200';

  const mergedClasses = twMerge(
    clsx(
      base,
      colorClasses[color],
      disabled && disabledClasses,
      loading && 'cursor-wait',
      className
    )
  );

  return (
    <button type={type} className={mergedClasses} disabled={disabled || loading} {...rest}>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
              1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children ?? title}
    </button>
  );
};
