import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'add' | 'cancel'
}

export const Button = ({
  children,
  variant = 'add',
  className,
  ...props
}: ButtonProps) => {
  const baseStyle = 'text-white px-4 py-2 rounded font-medium cursor-pointer transition duration-300 ease-in-out'
  const variantStyle = {
    add: 'bg-primary hover:opacity-75',
    cancel: 'bg-red-500 hover:opacity-75',
  }

  return (
    <button
      type="button"
      className={clsx(baseStyle, variantStyle[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
