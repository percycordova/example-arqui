import { DataTable } from '@/components/ui';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import type { AnyColumnDef } from '@/types/AnyColumnDef';

export type LegalCaseRow = {
  client: string; // SCOMBRO
  integrativeAccount: number; // 38927901
  totalDebt: number; // -300
  clientLink: string; // scombro
};

// Columnas con tu look & feel
const columns: AnyColumnDef<LegalCaseRow>[] = [
  {
    accessorKey: 'client',
    header: 'Cliente',
    cell: ({ getValue }) => {
      const clientName = getValue<string>();

      return (
        <Link to={`/cartera-judicial/reasignacion-procesos/reasignar-cliente`} className="text-blue-600 hover:underline">
          {clientName}
        </Link>
      );
    },
  },
  {
    accessorKey: 'integrativeAccount',
    header: 'Cuenta Integradora',
    meta: { align: 'left' },
    cell: ({ getValue }) => <span className="tabular-nums">{getValue<number>()}</span>,
  },
  {
    accessorKey: 'totalDebt',
    header: 'Deuda Total',
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
];

// --------- fake data (3 filas) ----------
const fakeData: LegalCaseRow[] = [
  { 
    clientLink: 'compañia-minera',
    client: 'COMPAÑÍA MINERA XYZ',
    integrativeAccount: 38927901,
    totalDebt: -300,
  },
  {
    clientLink: 'industrias-peru',
    client: 'INDUSTRIAS DEL PERU S.A.',
    integrativeAccount: 38927902,
    totalDebt: 250,
  },
  {
    clientLink: 'servicios-logisticos',
    client: 'SERVICIOS LOGÍSTICOS DEL NORTE',
    integrativeAccount: 38927903,
    totalDebt: -150,
  },
];

// Componente
export const TableSearchClient = () => {
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
