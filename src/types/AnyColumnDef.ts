import { ColumnDef } from '@tanstack/react-table';
type Align = 'left' | 'right' | 'center';

export type ColumnMeta = {
  align?: Align;
  headerClassName?: string;
  cellClassName?: string;
};

export type AnyColumnDef<T> = ColumnDef<T, any> & { meta?: ColumnMeta };

export interface DataTableProps<T> {
  data: T[];
  columns: AnyColumnDef<T>[];
  className?: string;
  emptyMessage?: string;
  isLoading?: boolean;
  striped?: boolean; // filas cebra
  dense?: boolean; // padding compacto
  stickyHeader?: boolean; // header pegajoso
  caption?: React.ReactNode; // opcional
  getRowId?: (row: T, index: number) => string;
}