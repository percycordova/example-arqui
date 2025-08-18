import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonSize = 'sm' | 'base' | 'lg';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  color?: 'blue' | 'green' | 'red' | 'gray' | 'primary';
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
}

export const ButtonIcon = ({
  title,
  children,
  color = 'gray',
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled,
  size = 'base',
  ...rest
}: ButtonIconProps) => {
  const base =
    'inline-flex cursor-pointer items-center justify-center rounded font-medium shadow-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1';

  // 👇 tamaños
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-2 text-xs',
    base: 'px-4 py-3 text-sm', // original
    lg: 'px-5 py-3.5 text-base w-full max-w-[320px]',
  };

  // 👇 colores
  const colorClasses = {
    blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200',
    red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-200',
    green: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-200',
    gray: 'bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200',
    primary: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary/30',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:bg-inherit border border-gray-200';

  const mergedClasses = cn(
    base,
    sizeClasses[size],
    colorClasses[color],
    disabled && disabledClasses,
    loading && 'cursor-wait',
    className
  );

  // Spinner size dinámico
  const spinnerSize = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const iconSpacing = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';

  return (
    <button type={type} className={mergedClasses} disabled={disabled || loading} {...rest}>
      {loading && (
        <svg
          className={cn(
            'animate-spin -ml-1 mr-2',
            spinnerSize,
            color === 'gray' ? 'text-gray-600' : 'text-white'
          )}
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
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
              5.291A7.962 7.962 0 014 12H0c0 3.042 
              1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {icon && iconPosition === 'left' && <span className={cn(iconSpacing, iconSize)}>{icon}</span>}

      {children ?? title}

      {icon && iconPosition === 'right' && (
        <span className={cn(iconSpacing, iconSize)}>{icon}</span>
      )}
    </button>
  );
};
