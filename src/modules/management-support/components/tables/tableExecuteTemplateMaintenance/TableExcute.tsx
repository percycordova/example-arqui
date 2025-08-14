'use client';

import { useMemo, useState } from 'react';
import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';

export type TemplateRunRow = {
  id: string;
  order: number;
  campo: string; // Campo seleccionado
  ancho: number; // ancho (caracteres) del campo
};

const rid = () => crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);

const MOCK_RUN: TemplateRunRow[] = [
  { id: rid(), order: 1, campo: 'Nro Documento', ancho: 12 },
  { id: rid(), order: 2, campo: 'Apellido Paterno', ancho: 18 },
  { id: rid(), order: 3, campo: 'Apellido Materno', ancho: 18 },
  { id: rid(), order: 4, campo: 'Nombres', ancho: 20 },
  { id: rid(), order: 5, campo: 'Fecha Registro', ancho: 12 },
  { id: rid(), order: 6, campo: 'Estado', ancho: 8 },
];

const calcAnchoReporte = (rows: TemplateRunRow[], separador = 1) => {
  if (rows.length === 0) return 0;
  const sumCampos = rows.reduce((acc, r) => acc + r.ancho, 0);
  const sumSeparadores = (rows.length - 1) * separador;
  return sumCampos + sumSeparadores;
};

export function TableExecute({
  rows = MOCK_RUN,
  separador = 1,
}: {
  rows?: TemplateRunRow[];

  separador?: number;
}) {
  const columns: AnyColumnDef<TemplateRunRow>[] = useMemo(
    () => [
      {
        accessorKey: 'order',
        header: 'Orden',
        size: 60,
        meta: { align: 'center' },
        cell: ({ getValue }) => <span className="tabular-nums">{getValue<number>()}</span>,
      },
      {
        accessorKey: 'campo',
        header: 'Campos Seleccionados',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <span className="font-medium">{row.original.campo}</span>
            <span className="text-xs text-gray-500">(ancho {row.original.ancho})</span>
          </div>
        ),
      },
    ],
    []
  );

  const ancho = calcAnchoReporte(rows, separador);

  return (
    <DataTable<TemplateRunRow> data={rows} columns={columns} striped dense={false} stickyHeader />
  );
}
