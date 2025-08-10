'use client';
import { cn } from '@/utils/cn';
import { HomeIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

type HomeButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

export function HomeButton({ label = 'Inicio', className }: HomeButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      aria-label="Ir al inicio"
      className={cn(
        'group h-9 rounded-full border border-red-200/70 bg-red-50/70 px-3 pr-4 text-red-700 shadow-sm backdrop-blur flex items-center justify-center cursor-pointer',
        'hover:bg-red-50 hover:shadow transition-colors',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-300',
        className
      )}
      onClick={() => navigate('/')}
    >
      <HomeIcon
        className="mr-2 size-4 text-red-700 transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="font-semibold">{label}</span>
    </button>
  );
}
