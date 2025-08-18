import { ButtonIcon, DataTable } from '@/components/ui';
import { useModal } from '@/hooks/useModal';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { useMemo } from 'react';
import { ModalInternalDetail } from '../../modals/modalInternalDetail/ModalInternalDetail';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type ExpedienteRow = {
  id: string;
  detalle: string;
  nroOperacion: string;
  tipoCartera: string;
  tipoOperacion: string;
  moneda: string;
  importe: number;
  expedienteInterno: string;
  seleccionado: boolean;
  isTotalRow?: boolean;
};

// dummy data

export function TableGenerationInternalFiles({
  rows,
  onToggleRow,
  onToggleAll,
}: {
  rows?: ExpedienteRow[];
  onToggleRow?: (id: string, checked: boolean) => void;
  onToggleAll?: (checked: boolean) => void;
}) {
  const expedientesSeed = useMemo<ExpedienteRow[]>(
    () => [
      {
        id: 'x1',
        detalle: '',
        nroOperacion: '',
        tipoCartera: '',
        tipoOperacion: '',
        moneda: 'PEN',
        importe: 0,
        expedienteInterno: '',
        seleccionado: false,
      },
      {
        id: 'x2',
        detalle: '',
        nroOperacion: '',
        tipoCartera: '',
        tipoOperacion: '',
        moneda: 'PEN',
        importe: 0,
        expedienteInterno: '',
        seleccionado: false,
      },
      {
        id: 'x3',
        detalle: '',
        nroOperacion: '',
        tipoCartera: '',
        tipoOperacion: '',
        moneda: 'PEN',
        importe: 0,
        expedienteInterno: '',
        seleccionado: false,
      },
    ],
    []
  );
  const { closeModal, isOpen, openModal } = useModal();
  const nf = useMemo(
    () => new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    []
  );

  const columns: AnyColumnDef<ExpedienteRow>[] = useMemo(
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
      { accessorKey: 'nroOperacion', header: 'Nro Operación' },
      { accessorKey: 'tipoCartera', header: 'Tipo de Cartera' },
      { accessorKey: 'tipoOperacion', header: 'Tipo de Operación' },
      { accessorKey: 'moneda', header: 'Moneda' },
      {
        accessorKey: 'importe',
        header: 'Importe',
        meta: { align: 'right' },
        cell: ({ row, getValue }) => (
          <span className={`tabular-nums ${row.original.isTotalRow ? 'font-semibold' : ''}`}>
            {nf.format(getValue<number>() || 0)}
          </span>
        ),
      },
      { accessorKey: 'expedienteInterno', header: 'Número de Expediente Interno' },
      {
        id: 'accion',
        header: 'Acción',
        meta: { align: 'center' },
        cell: ({ row }) =>
          row.original.isTotalRow ? null : (
            <input
              type="checkbox"
              checked={row.original.seleccionado}
              // onChange={e => onToggleRow(row.original.id, e.target.checked)}
            />
          ),
      },
    ],
    []
  );

  return (
    <>
      <DataTable<ExpedienteRow>
        data={expedientesSeed}
        columns={columns}
        striped
        dense={false}
        stickyHeader
        caption=""
      />
      <ModalInternalDetail isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
