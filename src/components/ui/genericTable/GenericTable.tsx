import { ReactNode } from 'react';

interface GenericTableProps<T> {
  data: T[];
  renderHeader: () => ReactNode;
  renderRow: (row: T, index: number) => ReactNode;
  emptyMessage?: string;
}

export const GenericTable = <T,>({
  data,
  renderHeader,
  renderRow,
  emptyMessage = 'No hay datos disponibles',
}: GenericTableProps<T>) => {
  const hasData = data.length > 0;

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-200 border-b border-gray-300">{renderHeader()}</div>

      <div className="divide-y divide-gray-300">
        {hasData ? (
          <>{data.map((item, index) => renderRow(item, index))}</>
        ) : (
          <div className="py-12 text-center text-gray-500">{emptyMessage}</div>
        )}
      </div>
    </div>
  );
};
