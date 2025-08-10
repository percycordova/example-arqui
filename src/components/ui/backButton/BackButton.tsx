'use client';
import { cn } from '@/utils/cn';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate, useNavigationType } from 'react-router-dom';

type BackButtonProps = {
  label?: string;
  className?: string;
};

export const BackButton = ({ label = 'Anterior', className }: BackButtonProps) => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  // Solo mostrar si hay historial y no es carga directa sin "back"
  const canGoBack = window.history.length > 1 || navigationType !== 'POP';

  if (!canGoBack) return null;

  return (
    <button
      type="button"
      aria-label="Volver a la página anterior"
      onClick={() => navigate(-1)}
      className={cn(
        'group h-9 rounded-full border-neutral-200 bg-white/80 px-3 pr-4 text-neutral-800 shadow-sm backdrop-blur flex items-center justify-center cursor-pointer',
        'hover:bg-white hover:shadow transition-colors',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300',
        className
      )}
    >
      <ArrowLeftIcon
        className="mr-2 size-4 text-neutral-700 transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden="true"
      />
      <span className="font-medium">{label}</span>
    </button>
  );
};
