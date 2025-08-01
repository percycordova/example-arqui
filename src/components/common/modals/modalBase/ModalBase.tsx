import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showXButton?: boolean;
  className?: string;
  zIndexLevel?: number;
  disableBackdropClick?: boolean; // 👈 nueva prop
}

export const ModalBase: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  showXButton = true,
  className,
  zIndexLevel = 60,
  disableBackdropClick = false, // 👈 valor por defecto
}) => {
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const backdropStyle = {
    zIndex: zIndexLevel,
  };

  const modalWrapperStyle = {
    zIndex: zIndexLevel + 10,
  };

  const mergedClassName = twMerge(
    clsx(
      'bg-white shadow-lg max-w-3xl w-full py-6 relative pointer-events-auto mx-5',
      className
    )
  );

  useEffect(() => {
    setMounted(true);
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !modalRoot || !isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        style={backdropStyle}
        onClick={!disableBackdropClick ? onClose : undefined} // 👈 click condicional
      />
      <div
        className="fixed inset-0 flex items-center justify-center py-4 pointer-events-none"
        style={modalWrapperStyle}
      >
        <div
          className={mergedClassName}
          onClick={(e) => e.stopPropagation()}
        >
          {showXButton && (
            <button
              className="absolute h-8 w-8 bg-primary text-white flex items-center justify-center top-0 right-0 text-xl cursor-pointer"
              onClick={onClose}
            >
              ×
            </button>
          )}
          <div className="overflow-y-auto max-h-[90vh]">{children}</div>
        </div>
      </div>
    </>,
    modalRoot
  );
};
