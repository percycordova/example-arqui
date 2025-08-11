import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';

type RowData = {
  plaza: string;
  noClientes: number;
  propia: number;
  sciT1: number;
  titulizada2: number;
  sciT3: number;
  fideicomiso: number;
  castigoCapital: number;
  sciT2b: number;
  sciFideicomiso: number;
  total: number;
  garantia: number;
  provision: number;
};

const nf = new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const columns: AnyColumnDef<RowData>[] = [
  {
    accessorKey: 'plaza',
    header: 'Plaza',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'noClientes',
    header: 'No Clientes',
    meta: { align: 'right' },
    cell: ({ getValue }) => (
      <span className="tabular-nums">{getValue<number>().toLocaleString('es-PE')}</span>
    ),
  },
  {
    accessorKey: 'propia',
    header: 'Propia',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'sciT1',
    header: 'SCI Titulizada 1',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'titulizada2',
    header: 'Titulizada 2',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'sciT3',
    header: 'SCI Titulizada 3',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'fideicomiso',
    header: 'Fideicomiso',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'castigoCapital',
    header: 'Castigo Capital',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'sciT2b',
    header: 'SCI Titulizada 2',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'sciFideicomiso',
    header: 'SCI Fideicomiso',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'total',
    header: 'Total',
    meta: { align: 'right', cellClassName: 'font-semibold' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'garantia',
    header: 'Garantía',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
  {
    accessorKey: 'provision',
    header: 'Provisión',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{nf.format(getValue<number>())}</span>,
  },
];

// 🔹 Generar data ficticia
const plazas = [
  'Lima',
  'Arequipa',
  'Trujillo',
  'Chiclayo',
  'Piura',
  'Cusco',
  'Huancayo',
  'Iquitos',
  'Chimbote',
  'Tacna',
  'Juliaca',
  'Pucallpa',
  'Tarapoto',
  'Ayacucho',
  'Huaraz',
  'Ica',
  'Cajamarca',
  'Tumbes',
  'Puno',
  'Moquegua',
];

function rnd(min: number, max: number) {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

const fakeData: RowData[] = plazas.map(name => {
  const noClientes = Math.floor(rnd(80, 3500));
  const propia = rnd(50_000, 450_000);
  const sciT1 = rnd(10_000, 200_000);
  const titulizada2 = rnd(5_000, 150_000);
  const sciT3 = rnd(0, 120_000);
  const fideicomiso = rnd(0, 180_000);
  const castigoCapital = rnd(0, 90_000);
  const sciT2b = rnd(0, 140_000);
  const sciFideicomiso = rnd(0, 160_000);

  const total =
    propia + sciT1 + titulizada2 + sciT3 + fideicomiso + castigoCapital + sciT2b + sciFideicomiso;

  const garantia = Math.round(total * rnd(0.05, 0.2) * 100) / 100;
  const provision = Math.round(total * rnd(0.02, 0.08) * 100) / 100;

  return {
    plaza: name,
    noClientes,
    propia,
    sciT1,
    titulizada2,
    sciT3,
    fideicomiso,
    castigoCapital,
    sciT2b,
    sciFideicomiso,
    total,
    garantia,
    provision,
  };
});

export const TableTypePlace = () => {
  return (
    <DataTable<RowData>
      data={fakeData}
      columns={columns}
      striped
      dense={false}
      stickyHeader={true}
    />
  );
};
