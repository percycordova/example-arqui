'use client';

import { useMemo, useState } from 'react';
import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { FunnelIcon } from '@heroicons/react/24/solid';

export type TemplateRunRow = {
  id: string;
  order: number;
  campo: string; // Campo seleccionado
  ancho: number; // ancho (caracteres) del campo
};

const rid = () => crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);

export type FilterRow = {
  id: string;
  columna: string;
  filtro: 'IGUAL' | 'CONTIENTE' | 'EMPIEZA_CON' | 'TERMINA_CON' | 'MAYOR' | 'MENOR' | 'ENTRE';
  valor: string;
};

const MOCK_FILTERS: FilterRow[] = [
  { id: rid(), columna: 'Nro Documento', filtro: 'IGUAL', valor: '' },
  { id: rid(), columna: 'Apellido Paterno', filtro: 'CONTIENTE', valor: '' },
  { id: rid(), columna: 'Fecha Registro', filtro: 'ENTRE', valor: '2024-01-01,2024-12-31' },
];

export function TableEntryValues({
  initial = MOCK_FILTERS,
  onChange,
}: {
  initial?: FilterRow[];
  onChange?: (rows: FilterRow[]) => void;
}) {
  const [rows, setRows] = useState<FilterRow[]>(initial);

  const update = (id: string, patch: Partial<FilterRow>) => {
    setRows(prev => {
      const next = prev.map(r => (r.id === id ? { ...r, ...patch } : r));
      onChange?.(next);
      return next;
    });
  };

  const columns: AnyColumnDef<FilterRow>[] = useMemo(
    () => [
      {
        accessorKey: 'columna',
        header: 'Columna',
      },
      {
        id: 'filtro',
        header: 'Filtro',
        size: 220,
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <FunnelIcon className="size-4 text-gray-500" />
            <select
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
              value={row.original.filtro}
              onChange={e =>
                update(row.original.id, {
                  filtro: e.target.value as FilterRow['filtro'],
                })
              }
            >
              <option value="IGUAL">IGUAL (=)</option>
              <option value="CONTIENTE">CONTIENTE (LIKE %v%)</option>
              <option value="EMPIEZA_CON">EMPIEZA_CON (LIKE v%)</option>
              <option value="TERMINA_CON">TERMINA_CON (LIKE %v)</option>
              <option value="MAYOR">MAYOR (&gt;)</option>
              <option value="MENOR">MENOR (&lt;)</option>
              <option value="ENTRE">ENTRE (v1,v2)</option>
            </select>
          </div>
        ),
      },
      {
        id: 'valor',
        header: 'Valor',
        cell: ({ row }) => (
          <input
            className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
            placeholder={row.original.filtro === 'ENTRE' ? 'v1,v2' : 'valor...'}
            value={row.original.valor}
            onChange={e => update(row.original.id, { valor: e.target.value })}
          />
        ),
      },
    ],
    []
  );

  return <DataTable<FilterRow> data={rows} columns={columns} striped dense={false} stickyHeader />;
}
