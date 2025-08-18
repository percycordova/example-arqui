import { useMemo, useState } from 'react';
import { DataTable } from '@/components/ui';
import { Link } from 'react-router-dom';
import type { AnyColumnDef } from '@/types/AnyColumnDef';
import { Pagination } from '@/components/ui/pagination/Pagination';

export type LegalCaseRow = {
  nro: number;
  ctaBT: number;
  cliente: string;
  expInt: string;
  seleccion: boolean;
};

const columns: AnyColumnDef<LegalCaseRow>[] = [
  {
    accessorKey: 'nro',
    header: 'Nro',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
  {
    accessorKey: 'ctaBT',
    header: 'CtaBT',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
  {
    accessorKey: 'cliente',
    header: 'Cliente',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'expInt',
    header: 'Exp. Int',
    meta: { align: 'center' },
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: 'seleccion',
    header: 'Seleccionar',
    meta: { align: 'center' },
    cell: () => (
      <span className="text-center cursor-pointer">
        <input type="checkbox" className="w-5 h-5 text-gray-600 cursor-pointer" />
      </span>
    ),
  },
];

const fakeData: LegalCaseRow[] = Array.from({ length: 50 }, (_, index) => ({
  nro: index + 1,
  ctaBT: 38927900 + index,
  cliente: `Cliente ${index + 1}`,
  expInt: `EXP-INT-2025-${index + 1}`,
  seleccion: true, 
}));

export const TableReasignmentSupervising = () => {
  const [page, setPage] = useState(1);      
  const [pageSize, setPageSize] = useState(10); 
  const pagedData = useMemo(() => {
    const startIdx = (page - 1) * pageSize;
    return fakeData.slice(startIdx, startIdx + pageSize);
  }, [page, pageSize]);

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
        caption="Selecciones los clientes a los cuales se les reasignará un abogado supervisor"
      />
      
      <Pagination
        totalItems={fakeData.length}  
        page={page}                  
        pageSize={pageSize}           
        onPageChange={setPage}       
        onPageSizeChange={handlePageSizeChange} 
        pageSizeOptions={[5, 10, 20, 50]} 
      />
    </div>
  );
};
