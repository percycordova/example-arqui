import type { ReactNode } from 'react'


interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-4 py-8 border border-gray-200">
      {children}
    </div>
  )
}
