// modules/judicial-record/components/tables/external/ExternalFilesTable.tsx
import { DataTable } from '@/components/ui';
import type { AnyColumnDef } from '@/types/AnyColumnDef';
import { useCallback } from 'react';

type Row = {
  shouldUpdate: boolean; // Actualizar Data (acción)
  fileName: string; // Nombre de Archivo
  externalFirm: string; // Estudio Externo
  generatedDate: string; // Fecha Generación (YYYY-MM-DD)
  generatedTime: string; // Hora (HH:mm)
  recordCount: number; // Cant. Registros en Archivo
};

const columns: AnyColumnDef<Row>[] = [
  {
    accessorKey: 'shouldUpdate',
    header: 'Actualizar Data',
    meta: { align: 'left' },
    cell: ({ row }) => {
      const onUpdate = useCallback(() => {
        // aquí disparas tu acción real (fetch, mutate, etc.)
        console.log('Actualizar Data ->', row.original.fileName);
      }, [row.original.fileName]);

      return (
        <button
          onClick={onUpdate}
          className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium hover:bg-neutral-50"
        >
          Actualizar
        </button>
      );
    },
  },
  {
    accessorKey: 'fileName',
    header: 'Nombre de Archivo',
    cell: ({ getValue }) => <span className="truncate">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'externalFirm',
    header: 'Estudio Externo',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'generatedDate',
    header: 'Fecha Generación',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span className="tabular-nums">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'generatedTime',
    header: 'Hora',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span className="tabular-nums">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'recordCount',
    header: 'Cant. Registros en Archivo',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{getValue<number>().toLocaleString('es-PE')}</span>
    ),
  },
];

// ---------- fake data (20 filas) ----------
const firms = [
  'ESTUDIO COZ',
  'DR. GUSTAVO VALDIVIEZO',
  'ESTUDIO CÁCERES',
  'ESTUDIO RIVERA',
  'ESTUDIO PÉREZ',
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function randomDateWithin(daysBack = 30) {
  const now = new Date();
  const past = new Date(now);
  past.setDate(now.getDate() - Math.floor(Math.random() * daysBack));
  const y = past.getFullYear();
  const m = pad(past.getMonth() + 1);
  const d = pad(past.getDate());
  const hh = pad(past.getHours());
  const mm = pad(past.getMinutes());
  return { date: `${y}-${m}-${d}`, time: `${hh}:${mm}` };
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const files = [
  'expedientes_lima',
  'expedientes_arequipa',
  'expedientes_trujillo',
  'expedientes_cusco',
  'expedientes_piura',
];

const data: Row[] = Array.from({ length: 20 }).map((_, i) => {
  const base = files[i % files.length];
  const { date, time } = randomDateWithin(30);
  return {
    shouldUpdate: true,
    fileName: `${base}_${date.replaceAll('-', '')}_${pad(i + 1)}.csv`,
    externalFirm: firms[i % firms.length],
    generatedDate: date,
    generatedTime: time,
    recordCount: rand(50, 25000),
  };
});

export  const TableExternalFiles=()=> {
  return <DataTable<Row> data={data} columns={columns} striped dense={false} stickyHeader />;
}
