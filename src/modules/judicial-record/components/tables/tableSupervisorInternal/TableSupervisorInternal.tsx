import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { useNavigate } from 'react-router-dom';

export type CaseRow = {
  demandado: string;
  ctabt: string;
  materia: 'Civil' | 'Penal' | 'Administrativo';
  proceso: number;
  subProceso: number;
  fechaIngreso: string; // ISO
  fechaDemanda: string; // ISO
  saldoDemanda: number;
  actu: number; // actuación / pendiente (placeholder)
  estudioExterno: string;
  sector?: string;
  unidad?: string;
};

const nfInt = new Intl.NumberFormat('es-PE');

const columns: AnyColumnDef<CaseRow>[] = [
  { accessorKey: 'demandado', header: 'Demandado',
    cell: ({ getValue }) => {
      const navigate = useNavigate();
      return <span className="tabular-nums cursor-pointer hover:underline text-blue-600"
      onClick={() => navigate(`/ficha`)}
      >{nfInt.format(getValue<number>())}</span>;
    },
   },
  { accessorKey: 'ctabt', header: 'CtaBT', meta: { align: 'center' } },
  { accessorKey: 'materia', header: 'Mater', meta: { align: 'center' } },
  {
    accessorKey: 'proceso',
    header: 'Proce',
    meta: { align: 'right' },
    cell: ({ getValue }) => {
      const navigate = useNavigate();
      return <span className="tabular-nums cursor-pointer hover:underline text-blue-600"
      onClick={() => navigate(`/ficha`)}
      >{nfInt.format(getValue<number>())}</span>;
    },
  },
  {
    accessorKey: 'subProceso',
    header: 'Sub Proce',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  {
    accessorKey: 'fechaIngreso',
    header: 'Fecha Ingreso',
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString('es-PE'),
  },
  {
    accessorKey: 'fechaDemanda',
    header: 'Fecha Demanda',
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString('es-PE'),
  },
  {
    accessorKey: 'saldoDemanda',
    header: 'Saldo Demanda',
    meta: { align: 'right', cellClassName: 'font-semibold' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  {
    accessorKey: 'actu',
    header: 'Actu',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{nfInt.format(getValue<number>())}</span>
    ),
  },
  { accessorKey: 'estudioExterno', header: 'Estudio Externo' },
  { accessorKey: 'sector', header: 'Sector/s' },
  { accessorKey: 'unidad', header: 'Unidad a Ca / Recuperabl' },
];

// --- data dummy para probar ---
const data: CaseRow[] = [
  {
    demandado: 'VARGAR ARROYO ANA',
    ctabt: '536082',
    materia: 'Civil',
    proceso: 14122,
    subProceso: 1,
    fechaIngreso: '2013-06-12',
    fechaDemanda: '2012-07-12',
    saldoDemanda: 293648,
    actu: 0,
    estudioExterno: 'JUAN CARLOS RODRIGUEZ AYALA ABOGADOS S.C.',
    sector: '',
    unidad: '',
  },
];

export const TableSupervisorInternal = () => {
  return <DataTable<CaseRow> data={data} columns={columns} striped dense={false} stickyHeader />;
};
