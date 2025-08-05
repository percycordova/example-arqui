import { useEffect } from 'react';

export const useClickAway = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onClickAway: () => void
) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [ref, onClickAway]);
};
