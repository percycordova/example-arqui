// src/modules/judicial-record/components/tables/tableSupervisingAttorneys/TableSupervisingAttorneys.tsx
import { useMemo, useState } from 'react';
import { DataTable } from '@/components/ui';
import { Link } from 'react-router-dom';
import type { AnyColumnDef } from '@/types/AnyColumnDef';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Pagination } from '@/components/ui/pagination/Pagination';

export type LegalCaseRow = {
  countBT: number;
  clientName: string;
  place: string;
  refer: string;
  startDay: Date;
  ce: string;
  ca: string;
  ju: string;
  val: string;
  con: string;
  ro: string;
  fi: string;
  lawyer: string;
  estExt: string;
  expInt: string;
};

const formatDate = (d: Date) =>
  new Date(d).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });

const columns: AnyColumnDef<LegalCaseRow>[] = [
  {
    accessorKey: 'countBT',
    header: 'Cuenta BT',
    meta: { align: 'center' },
    cell: ({ getValue }) => (
      <Link
        to={`/cartera-judicial/otros/reporte-pase-judicial/detalle`}
        className="text-blue-600 hover:underline"
      >
        {getValue<number>()}
      </Link>
    ),
  },
  { accessorKey: 'clientName', header: 'Cliente', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'place', header: 'Plaza', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'refer', header: 'Referencia', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  {
    accessorKey: 'startDay',
    header: 'Fecha Inicio',
    cell: ({ getValue }) => <span className="whitespace-nowrap">{formatDate(getValue<Date>())}</span>,
  },
  { accessorKey: 'ce', header: 'CE', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ca', header: 'CA', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ju', header: 'JU', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'val', header: 'VAL', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'con', header: 'CON', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ro', header: 'RO', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'fi', header: 'FI', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'lawyer', header: 'Abogado', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'estExt', header: 'Est. Ext.', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'expInt', header: 'Exp. Int.', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  {
    accessorKey: 'action',
    header: 'Eliminar',
    meta: { align: 'center' },
    cell: ({ row }) => (
      <button
        onClick={() => console.log('Eliminar fila:', row.original)}
        className="text-red-600 hover:text-red-800"
        title="Eliminar"
      >
        <TrashIcon className="w-5 h-5 cursor-pointer" />
      </button>
    ),
  },
];

// ——— Fake data ———
const seed: LegalCaseRow[] = [
  {
    countBT: 1,
    clientName: 'COMPAÑÍA MINERA XYZ',
    place: 'Lima',
    refer: 'REF-001',
    startDay: new Date('2025-07-10'),
    ce: 'CE-12', ca: 'CA-03', ju: 'JU-01', val: 'VAL-02', con: 'CON-04',
    ro: 'RO-11', fi: 'FI-08', lawyer: 'KATHERINE ESPINOZA GOMEZ',
    estExt: 'Pendiente', expInt: 'EXP-INT-2025-001',
  },
];

export const TableSupervisingAttorneys = () => {

  const [rows] = useState<LegalCaseRow[]>(() => {
    const many = Array.from({ length: 57 }, (_, i) => ({
      ...seed[0],
      countBT: i + 1,
      refer: `REF-${String(i + 1).padStart(3, '0')}`,
    }));
    return many;
  });

  const [page, setPage] = useState(1);        // 1-based
  const [pageSize, setPageSize] = useState(10);

  const pagedData = useMemo(() => {
    const startIdx = (page - 1) * pageSize;
    return rows.slice(startIdx, startIdx + pageSize);
  }, [rows, page, pageSize]);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setPage(1);
  };

  return (
    <div>
      <DataTable<LegalCaseRow>
        data={pagedData}
        columns={columns}
        striped
        dense={false}
        stickyHeader
        caption=""
      />
      <Pagination
        totalItems={rows.length}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={handlePageSizeChange}
        pageSizeOptions={[5, 10, 20, 50]}
      />
    </div>
  );
};
