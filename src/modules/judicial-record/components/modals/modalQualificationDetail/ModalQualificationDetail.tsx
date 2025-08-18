import { ModalBase } from '@/components/ui/modalBase/ModalBase';
import { InputBase, ButtonBase, Title } from '@/components/ui';
import { DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { useMemo } from 'react';

type NotaRow = {
  id: string;
  titulo: string;
  observaciones: string;
};

interface ModalDetalleEstadoProps {
  isOpen: boolean;
  onClose: () => void;
  codigoBT?: string;
  nroReferencia?: string;
  cliente?: string;
  fecha?: string; // ISO
  estado?: string;
}

export const ModalQualificationDetail = ({
  isOpen,
  onClose,
  codigoBT = 'BT-00001',
  nroReferencia = 'REF-2025-01',
  cliente = 'Cliente Ejemplo SAC',
  fecha = new Date().toISOString().slice(0, 10),
  estado = 'Pendiente',
}: ModalDetalleEstadoProps) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-5xl"
      disableBackdropClick={false}
      showXButton
    >
      <div className="px-6 py-8 space-y-6">
        {/* Título */}
        <Title text="Detalle del Estado" />

        {/* Bloque 1 */}
        <div className="border border-gray-300 px-5 py-10 space-y-4 rounded my-8">
          <div className="flex justify-between items-start">
            <div className="w-[55%]  flex flex-col gap-5">
              <InputBase value={codigoBT} disabled label="Codigo BT" className="w-[250px]" />
              <InputBase value={cliente} disabled label="Cliente" className="" />
            </div>
            <div className="w-">
              <InputBase value={cliente} disabled label="N° Referencia" className="w-full" />
            </div>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="border border-gray-300 px-5 py-10 space-y-4 rounded ">
          <div className='flex flex-col gap-5 pb-5'>
            <InputBase value={fecha} disabled label="Fecha:" className="w-[250px]" />
            <InputBase value={estado} disabled label="Estado:" className="" />
          </div>

          {/* Tabla correcta: Título / Observaciones */}
          <TableQualificationNotes />
        </div>

        <div className="flex justify-center">
          <ButtonBase title="Cerrar" color="red" onClick={onClose} />
        </div>
      </div>
    </ModalBase>
  );
};

/** ======= Tabla: Título / Observaciones (5 filas) ======= */
export function TableQualificationNotes() {
  const data = useMemo<NotaRow[]>(
    () => [
      { id: 'n1', titulo: 'Recepción de documentos', observaciones: 'Pendiente de validar DNI' },
      { id: 'n2', titulo: '', observaciones: '' },
      { id: 'n3', titulo: '', observaciones: '' },
      { id: 'n4', titulo: '', observaciones: '' },
      { id: 'n5', titulo: '', observaciones: '' },
    ],
    []
  );

  const columns: AnyColumnDef<NotaRow>[] = useMemo(
    () => [
      { accessorKey: 'titulo', header: 'Título' },
      { accessorKey: 'observaciones', header: 'Observaciones' },
    ],
    []
  );

  return (
    <DataTable<NotaRow>
      data={data}
      columns={columns}
      striped
      dense={false}
      stickyHeader
      caption=""
    />
  );
}
