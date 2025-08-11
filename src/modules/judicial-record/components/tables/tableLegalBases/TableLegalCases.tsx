import { DataTable } from '@/components/ui';
import type { AnyColumnDef } from '@/types/AnyColumnDef';

export type LegalCaseRow = {
  city: string; // LIMA, AREQUIPA, etc.
  internalCaseNo: string; // Nro.Exp. Interno (ej: 4547-1)
  plaintiff: string; // Demandante
  defendant: string; // Demandado
  courtNo: string; // Nro.Juzgado (texto libre)
  courtName: string; // Juzgado (nombre del juzgado)
  caseNo: string; // Nro.Exp. (ej: 87458-2008)
  inHouseLawyer: string; // Abogado Interno
  externalFirm: string; // Estudio Externo
};

// columnas con tu look & feel
const columns: AnyColumnDef<LegalCaseRow>[] = [
  {
    accessorKey: 'internalCaseNo',
    header: 'Nro.Exp. Interno',
    meta: { align: 'left' },
    cell: ({ getValue }) => <span className="tabular-nums">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'plaintiff',
    header: 'Demandante',
    cell: ({ getValue }) => (
      <a href="#" className="text-blue-600 hover:underline">
        {getValue<string>()}
      </a>
    ),
  },
  {
    accessorKey: 'defendant',
    header: 'Demandado',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'courtNo',
    header: 'Nro.Juzgado',
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'courtName',
    header: 'Juzgado',
    cell: ({ getValue }) => <span className="uppercase">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'caseNo',
    header: 'Nro.Exp.',
    meta: { align: 'right' },
    cell: ({ getValue }) => <span className="tabular-nums">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'inHouseLawyer',
    header: 'Abogado Interno',
    cell: ({ getValue }) => <span className="uppercase">{getValue<string>()}</span>,
  },
  {
    accessorKey: 'externalFirm',
    header: 'Estudio Externo',
    cell: ({ getValue }) => (
      <a href="#" className="text-blue-600 hover:underline">
        {getValue<string>()}
      </a>
    ),
  },
];

// --------- fake data (20 filas) ----------
const names = [
  'ABANTO ARANTO, ABRAHAM',
  'ABANTO NAVARRETE, ABEL CESAR',
  'ABANTO NORIEGA, JOSE LUIS',
  'ABARCA GONZALES, JOSE LUIS',
  'RAKELITA Y ANEXOS S.A',
  'CARRASCO REYNOSO, MARCO ANTONIO',
  'GARCIA PEREZ, LUIS MIGUEL',
  'RODRIGUEZ LOPEZ, ANA MARIA',
  'HUAMAN FLORES, PEDRO',
  'QUISPE MAMANI, JUAN',
  'VARGAS SOTO, LUCIA',
  'MENDOZA DIAZ, CARLOS',
  'SANCHEZ RIVERA, ROSA',
  'TORRES GUTIERREZ, DAVID',
  'RAMIREZ SILVA, KAREN',
  'PAREDES ROJAS, SERGIO',
  'SALAZAR CASTRO, MARIA',
  'FLORES MEJIA, HUGO',
  'PONCE REYES, CLAUDIA',
  'ALVAREZ ROMAN, JULIO',
];

const courts = ['JUZGADO PAZ LETRADO', 'JUZGADO CIVIL', 'JUZGADO COMERCIAL', 'JUZGADO DE FAMILIA'];

function num(n: number) {
  return String(n).padStart(4, '0');
}
function year() {
  return (2005 + Math.floor(Math.random() * 20)).toString();
}

const firms = ['DR. GUSTAVO VALDIVIEZO', 'ESTUDIO COZ', 'ESTUDIO CÁCERES', 'ESTUDIO RIVERA', '—'];

const fakeData: LegalCaseRow[] = Array.from({ length: 20 }).map((_, i) => ({
  city: 'LIMA',
  internalCaseNo: `${4500 + i}-${(i % 3) + 1}`,
  plaintiff: names[i],
  defendant: i % 3 === 0 ? 'SCI' : 'SCOTIABANK',
  courtNo: i % 4 === 0 ? 'Juzgado Prueba' : '**********************'.slice(0, (i % 10) + 6),
  courtName: courts[i % courts.length],
  caseNo: `${num(7000 + i * 13)}-${year()}`,
  inHouseLawyer: ['ANA SAENZ', 'MONICA', 'CRISTINA ISABEL', 'MIGUEL PACHAS'][i % 4],
  externalFirm: firms[i % firms.length],
}));

// componente
export const TableLegalCases = () => {
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
