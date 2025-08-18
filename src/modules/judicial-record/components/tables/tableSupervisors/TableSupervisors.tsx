import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { getSlug } from '@/utils/slug';
import { useNavigate } from 'react-router-dom';

type RowData = {
  supervisor: string;
  civil: number;
  penal: number;
  administrativo: number;
};

const nfInt = new Intl.NumberFormat('es-PE');

const columns: AnyColumnDef<RowData>[] = [
  {
    accessorKey: 'supervisor',
    header: 'Supervisor',
    cell: ({ getValue }) => {
      const navigate = useNavigate();
      const name = getValue<string>();

      return (
        <button
          onClick={() =>
            navigate(`/cartera-judicial/supervisor/${encodeURIComponent(getSlug(name))}`)
          }
          className="text-blue-600 hover:underline cursor-pointer"
          title={`Ver detalle de ${name}`}
        >
          {name}
        </button>
      );
    },
  },
  {
    accessorKey: 'civil',
    header: 'Civil',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  {
    accessorKey: 'penal',
    header: 'Penal',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  {
    accessorKey: 'administrativo',
    header: 'Administrativo',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  {
    id: 'total',
    header: 'N.º Procesos',
    meta: { align: 'right', cellClassName: 'font-semibold' },
    cell: ({ row }) => {
      const { civil, penal, administrativo } = row.original;
      const total = (civil || 0) + (penal || 0) + (administrativo || 0);
      return <span className="tabular-nums">{nfInt.format(total)}</span>;
    },
  },
];

// --- Data ficticia para probar rápidamente ---
const seed = [
  { supervisor: 'CAROLYN ORTEGA RAMIREZ', civil: 2264, penal: 0, administrativo: 0 },
  { supervisor: 'DANIEL EMILIO ROMERO RAMIREZ', civil: 1069, penal: 0, administrativo: 0 },
  { supervisor: 'ESTHER ALARCÓN OCHOA', civil: 0, penal: 0, administrativo: 0 },
  { supervisor: 'JUAN JOSÉ RODRIGUES PAJARES', civil: 304, penal: 0, administrativo: 0 },
];

export const TableSupervisors = () => {
  return <DataTable<RowData> data={seed} columns={columns} striped dense={false} stickyHeader />;
};
