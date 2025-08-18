import { ButtonBase, ButtonIcon, DataTable } from '@/components/ui';
import { useModal } from '@/hooks/useModal';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import { ModalQualificationDetail } from '../../modals/modalQualificationDetail/ModalQualificationDetail';

type EstadoRow = {
  id: string;
  detalle: string;
  fecha: string; // ISO
  estado: string;
  observaciones: string;
  borrar: boolean;
};

export function TableSearchQualification() {
  const { closeModal, isOpen, openModal } = useModal();
  const estadosSeed = useMemo<EstadoRow[]>(
    () => [
      {
        id: 'e1',
        detalle: 'Detalle',
        fecha: '2024-06-01',
        estado: 'Pendiente',
        observaciones: '',
        borrar: false,
      },
      { id: 'e2', detalle: '', fecha: '', estado: '', observaciones: '', borrar: false },
      { id: 'e3', detalle: '', fecha: '', estado: '', observaciones: '', borrar: false },
    ],
    []
  );

  const columns: AnyColumnDef<EstadoRow>[] = useMemo(
    () => [
      {
        accessorKey: 'detalle',
        header: 'Detalle',
        cell: ({ getValue }) => {
          const v = getValue<string>();
          return (
            <ButtonIcon
              title="Ir al detalle"
              color="blue"
              icon={<MagnifyingGlassIcon className="w-4 h-4" />}
              size="sm"
              onClick={openModal}
            />
          );
        },
      },
      {
        accessorKey: 'fecha',
        header: 'Fecha',
        cell: ({ getValue }) => {
          const v = getValue<string>();
          return (
            <span className="text-sm">{v ? new Date(v).toLocaleDateString('es-PE') : ''}</span>
          );
        },
      },
      { accessorKey: 'estado', header: 'Estado' },
      { accessorKey: 'observaciones', header: 'Observaciones' },
      
    ],
    []
  );

  return (
    <>
      <DataTable<EstadoRow>
        data={estadosSeed}
        columns={columns}
        striped
        dense={false}
        stickyHeader
        caption=""
      />
      <ModalQualificationDetail  isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
