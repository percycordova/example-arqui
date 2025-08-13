import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { ButtonIcon } from '../buttonBase/ButtonIcon';
import { ButtonBase } from '../buttonBase/ButtonBase';

type PaginationProps = {
  totalItems: number;
  page: number; // 1-based
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
};

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => onPageChange(Math.min(Math.max(1, p), totalPages));

  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-neutral-600">
        Mostrando <span className="font-medium">{start}</span>–
        <span className="font-medium">{end}</span> de{' '}
        <span className="font-medium">{totalItems}</span>
      </div>

      <div className="flex items-center gap-3">
        {onPageSizeChange && (
          <label className="flex items-center gap-2 text-sm">
            Filas por página:
            <select
              className="border rounded px-2 py-1"
              value={pageSize}
              onChange={e => onPageSizeChange(Number(e.target.value))}
            >
              {pageSizeOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        )}

        <div className="flex items-center gap-2">
          <ButtonIcon
            color="gray"
            title=""
            icon={<ChevronDoubleLeftIcon className="w-5 h-5" />}
            aria-label="Primera página"
            disabled={!canPrev}
            onClick={() => goTo(1)}
            className="w-auto px-2 py-2"
          />

          <ButtonIcon
            color="gray"
            disabled={!canPrev}
            onClick={() => goTo(page - 1)}
            title="Anterior"
            icon={<ChevronLeftIcon />}
            className="w-auto px-2 py-2"
          />

          <span className="text-sm">
            Página <span className="font-medium">{page}</span> de{' '}
            <span className="font-medium">{totalPages}</span>
          </span>

          <ButtonIcon
            color="gray"
            disabled={!canNext}
            onClick={() => goTo(page + 1)}
            title="Siguiente"
            icon={<ChevronRightIcon />}
            className="w-auto px-2 py-2"
            iconPosition="right"
          />

          <ButtonIcon
            color="gray"
            title=""
            icon={<ChevronDoubleRightIcon className="w-5 h-5" />}
            aria-label="Última página"
            disabled={!canNext}
            onClick={() => goTo(totalPages)}
            className="w-auto px-2 py-2"
          />
        </div>
      </div>
    </div>
  );
};
