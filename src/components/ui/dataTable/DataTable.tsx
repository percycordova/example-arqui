import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import type { ColumnMeta, DataTableProps } from '@/types/AnyColumnDef';

const cn = (...v: Array<string | false | undefined>) => v.filter(Boolean).join(' ');

export function DataTable<T>({
  data,
  columns,
  className,
  emptyMessage = 'No hay resultados.',
  isLoading = false,
  striped = true,
  stickyHeader = false,
  caption,
  getRowId,
}: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId,
  });

  const colCount = table.getAllLeafColumns().length;

  return (
    <div
      className={cn(
        'overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-800 text-[#333]',
        className
      )}
    >
      <table className="w-full caption-bottom text-sm">
        {caption ? (
          <caption className="caption-top text-left p-3 text-neutral-500">{caption}</caption>
        ) : null}

        <thead
          className={cn(
            'bg-neutral-50 dark:bg-neutral-900/40',
            stickyHeader && 'sticky top-0 z-10'
          )}
        >
          {table.getHeaderGroups().map(hg => (
            <tr
              key={hg.id}
              className="[&>th]:border-b [&>th]:px-3 [&>th]:py-4 [&>th]:text-center [&>th]:text-xs [&>th]:font-semibold [&>th]:text-neutral-500 dark:[&>th]:border-neutral-800"
            >
              {hg.headers.map(h => (
                <th key={h.id}>{flexRender(h.column.columnDef.header, h.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="[&>tr]:border-b [&>tr]:border-neutral-200 dark:[&>tr]:border-neutral-800">
          {isLoading ? (
            <tr>
              <td colSpan={colCount} className="h-24 text-center text-neutral-500">
                Cargando...
              </td>
            </tr>
          ) : table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={colCount} className="h-24 text-center text-neutral-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row, idx) => (
              <tr
                key={row.id}
                className={cn(
                  striped && idx % 2 === 1 && 'bg-neutral-50/60 dark:bg-neutral-900/30'
                )}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-3 py-4 align-middle text-center">
                    {flexRender(cell.column.columnDef.cell!, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
