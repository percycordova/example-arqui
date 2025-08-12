import { DataTable } from '@/components/ui';
import { Link } from 'react-router-dom';
import type { AnyColumnDef } from '@/types/AnyColumnDef';
import { cn } from '@/utils/cn';
import { TrashIcon } from '@heroicons/react/24/outline';

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

const handleDelete = (rowData: LegalCaseRow) => {
  console.log('Eliminar fila:', rowData);
};

const columns: AnyColumnDef<LegalCaseRow>[] = [
  {
    accessorKey: 'countBT',
    header: 'Cuenta BT',
    meta: { align: 'center' },
    cell: ({ getValue }) => {
      return (
        <Link
          to={`/cartera-judicial/reasignacion-procesos/reasignar-cliente`}
          className="text-blue-600 hover:underline"
        >
          {getValue<number>()}
        </Link>
      );
    },
  },
  {
    accessorKey: 'clientName',
    header: 'Cliente',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'place',
    header: 'Plaza',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'refer',
    header: 'Referencia',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'startDay',
    header: 'Fecha Inicio',
    cell: ({ getValue }) => (
      <span className="whitespace-nowrap">{formatDate(getValue<Date>())}</span>
    ),
  },
  { accessorKey: 'ce', header: 'CE', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ca', header: 'CA', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ju', header: 'JU', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'val', header: 'VAL', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'con', header: 'CON', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'ro', header: 'RO', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  { accessorKey: 'fi', header: 'FI', cell: ({ getValue }) => <span>{getValue<string>()}</span> },
  {
    accessorKey: 'lawyer',
    header: 'Abogado',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'estExt',
    header: 'Est. Ext.',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'expInt',
    header: 'Exp. Int.',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  
  {
    accessorKey: 'action',
    header: 'Acción',
    meta: { align: 'center' },
    cell: ({ row }) => (
      <button
        onClick={() => handleDelete(row.original)}
        className="text-red-600 hover:text-red-800"
        title="Eliminar"
      >
        <TrashIcon className="w-5 h-5 cursor-pointer" />
      </button>
    ),
  },
];

const fakeData: LegalCaseRow[] = [
  {
    countBT: 1,
    clientName: 'COMPAÑÍA MINERA XYZ',
    place: 'Lima',
    refer: 'REF-001',
    startDay: new Date('2025-07-10'),
    ce: 'CE-12',
    ca: 'CA-03',
    ju: 'JU-01',
    val: 'VAL-02',
    con: 'CON-04',
    ro: 'RO-11',
    fi: 'FI-08',
    lawyer: 'KATHERINE ESPINOZA GOMEZ',
    estExt: 'Pendiente',
    expInt: 'EXP-INT-2025-001',
  },
  {
    countBT: 2,
    clientName: 'INDUSTRIAS DEL PERÚ S.A.',
    place: 'Arequipa',
    refer: 'REF-002',
    startDay: new Date('2025-07-15'),
    ce: 'CE-05',
    ca: 'CA-07',
    ju: 'JU-03',
    val: 'VAL-01',
    con: 'CON-02',
    ro: 'RO-05',
    fi: 'FI-02',
    lawyer: 'OTRO SUPERVISOR',
    estExt: 'En curso',
    expInt: 'EXP-INT-2025-045',
  },
  {
    countBT: 3,
    clientName: 'SERVICIOS LOGÍSTICOS DEL NORTE',
    place: 'Trujillo',
    refer: 'REF-003',
    startDay: new Date('2025-07-20'),
    ce: 'CE-09',
    ca: 'CA-10',
    ju: 'JU-02',
    val: 'VAL-05',
    con: 'CON-06',
    ro: 'RO-09',
    fi: 'FI-12',
    lawyer: 'KATHERINE ESPINOZA GOMEZ',
    estExt: 'Cerrado',
    expInt: 'EXP-INT-2025-078',
  },
];

export const TableSupervisingAttorneys = () => {
  return (
    <DataTable<LegalCaseRow>
      data={fakeData}
      columns={columns}
      striped
      dense={false}
      stickyHeader
      caption=""
    />
  );
};
