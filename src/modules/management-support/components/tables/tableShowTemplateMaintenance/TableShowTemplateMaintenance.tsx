'use client';

import { useMemo, useState } from 'react';
import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';

import { KeyIcon, LockClosedIcon, PrinterIcon } from '@heroicons/react/24/solid';

/** =========================
 *  Tipos y Props
 *  ========================= */
export type TemplateRow = {
  id: string;
  propietario: string; // Usuario
  categoria: string; // Tipo
  descripcion: string; // Descripción
  fecha: string; // Fecha Ingreso (ISO)
  permiteEliminar: boolean; // solo para mostrar icono llave/candado
  reporteDisponible: boolean;
  selected?: boolean;
};

type TableProps = {
  data?: TemplateRow[];
  onToggleRow?: (id: string, checked: boolean) => void;
  onToggleAll?: (checked: boolean) => void;
  allChecked?: boolean;
};

/** =========================
 *  Mock data helpers
 *  ========================= */
const owners = [
  'Sistemas',
  'Créditos',
  'Legal',
  'Comercial',
  'Operaciones',
  'Auditoría',
  'Riesgos',
  'Tesorería',
];

const categorias = [
  'PLANTILLA_1',
  'PLANTILLA_2',
  'CONTRATO',
  'CARTA',
  'MEMORANDO',
  'SOLICITUD',
  'OFICIO',
];

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function rid() {
  return crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
}
function randomDateIn2024() {
  const start = new Date('2024-01-01').getTime();
  const end = new Date('2024-12-31').getTime();
  return new Date(start + Math.random() * (end - start)).toISOString();
}

/** =========================
 *  Mock data
 *  ========================= */
export const TEMPLATES_DATA: TemplateRow[] = Array.from({ length: 14 }).map(() => ({
  id: rid(),
  propietario: pick(owners),
  categoria: pick(categorias),
  descripcion: 'Plantilla generada automáticamente para pruebas.',
  fecha: randomDateIn2024(),
  permiteEliminar: Math.random() > 0.35, // ~65% sí permiten
  reporteDisponible: Math.random() > 0.5, // ~50% tiene reporte
  selected: false,
}));

const df = new Intl.DateTimeFormat('es-PE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

/** =========================
 *  Tabla (columnas como la maqueta)
 *  ========================= */
export const TableShowTemplateMaintenance = ({
  data,
  onToggleRow,
  onToggleAll,
  allChecked,
}: TableProps) => {
  const columns: AnyColumnDef<TemplateRow>[] = useMemo(
    () => [
      {
        id: 'sel',
        header: () => (
          <input
            aria-label="Seleccionar todo"
            type="checkbox"
            className="size-4 accent-red-700"
            checked={allChecked}
            // onChange={e => onToggleAll(e.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            aria-label="Seleccionar fila"
            type="checkbox"
            className="size-4 accent-red-700"
            checked={!!row.original.selected}
            // onChange={e => onToggleRow(row.original.id, e.target.checked)}
          />
        ),
        size: 40,
        meta: { align: 'center' },
      },
      {
        accessorKey: 'propietario',
        header: 'Usuario',
      },
      {
        accessorKey: 'categoria',
        header: 'Tipo',
        cell: ({ row }) => {
          const ok = row.original.permiteEliminar;
          return (
            <div className="flex items-center gap-2">
              {ok ? (
                <KeyIcon className="size-4 text-yellow-500 shrink-0" />
              ) : (
                <LockClosedIcon className="size-4 text-gray-500 shrink-0" />
              )}
              <span className="uppercase tracking-wide">{row.original.categoria}</span>
            </div>
          );
        },
      },
      {
        accessorKey: 'descripcion',
        header: 'Descripción',
        cell: ({ getValue }) => <span className="text-gray-700">{getValue<string>()}</span>,
      },
      {
        accessorKey: 'fecha',
        header: 'Fecha Ingreso',
        meta: { align: 'center' },
        cell: ({ getValue }) => (
          <span className="tabular-nums">{df.format(new Date(getValue<string>()))}</span>
        ),
      },
      {
        id: 'reporte',
        header: 'Reporte',
        meta: { align: 'center' },
        size: 80,
        cell: ({ row }) =>
          row.original.reporteDisponible ? (
            <button
              type="button"
              title="Imprimir reporte"
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 hover:bg-gray-50"
              onClick={() => {
                // aquí llamas a tu acción de imprimir / ver reporte
                console.log('Imprimir/Ver reporte de', row.original.id);
              }}
            >
              <PrinterIcon className="size-4" />
              <span className="text-xs">Imprimir</span>
            </button>
          ) : (
            <span className="text-gray-400">—</span>
          ),
      },
    ],
    [allChecked, onToggleAll, onToggleRow]
  );

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <DataTable<TemplateRow>
        data={TEMPLATES_DATA}
        columns={columns}
        striped
        dense={false}
        stickyHeader
      />
    </div>
  );
};
