import { ButtonIcon, DataTable } from '@/components/ui';
import { useModal } from '@/hooks/useModal';
import { AnyColumnDef } from '@/types/AnyColumnDef';
import { MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useMemo, useState } from 'react';
import { ModalQualificationDetail } from '../../modals/modalQualificationDetail/ModalQualificationDetail';

type Row = {
  id: string;
  nroExpedienteInterno: string;
  importeTotal: number; // US$
  estudioAbogados: string;
};

export function TableLawFirm() {
  const { closeModal, isOpen, openModal } = useModal();

  const seed: Row[] = useMemo(
    () => [
      {
        id: 'r1',
        nroExpedienteInterno: 'EXP-2024-0001',
        importeTotal: 1234.56,
        estudioAbogados: 'Pérez & Asociados',
      },
      {
        id: 'r2',
        nroExpedienteInterno: 'EXP-2024-0002',
        importeTotal: 980.0,
        estudioAbogados: 'Legal Partners SAC',
      },
      {
        id: 'r3',
        nroExpedienteInterno: 'EXP-2024-0003',
        importeTotal: 250.75,
        estudioAbogados: 'Bufete Central',
      },
    ],
    []
  );

  const [rows, setRows] = useState<Row[]>(seed);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const allChecked = rows.length > 0 && selected.size === rows.length;
  const someChecked = selected.size > 0 && selected.size < rows.length;

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? new Set(rows.map(r => r.id)) : new Set());
  };

  const toggleRow = (id: string, checked: boolean) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const deleteRow = (id: string) => {
    setRows(prev => prev.filter(r => r.id !== id));
    setSelected(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const columns: AnyColumnDef<Row>[] = useMemo(
    () => [
      // 1) Columna de selección (checkbox)
      {
        id: 'select',
        header: () => (
          <input
            type="checkbox"
            aria-label="Seleccionar todos"
            checked={allChecked}
            ref={el => {
              if (el) el.indeterminate = someChecked;
            }}
            onChange={e => toggleAll(e.target.checked)}
          />
        ),
        cell: ({ row }) => {
          const r = row.original as Row;
          const checked = selected.has(r.id);
          return (
            <input
              type="checkbox"
              aria-label={`Seleccionar ${r.nroExpedienteInterno}`}
              checked={checked}
              onChange={e => toggleRow(r.id, e.target.checked)}
            />
          );
        },
        size: 40,
        enableSorting: false,
      },

      // 2) Detalle (botón con lupa que abre modal)
      {
        id: 'detalle',
        header: 'Detalle',
        cell: ({ row }) => (
          <ButtonIcon
            title="Ir al detalle"
            color="blue"
            size="sm"
            onClick={openModal}
            icon={<MagnifyingGlassIcon className="w-4 h-4" />}
          />
        ),
        enableSorting: false,
      },

      // 3) Nro Expediente Interno
      {
        accessorKey: 'nroExpedienteInterno',
        header: 'Nro Expediente Interno',
        cell: ({ getValue }) => <span className="text-sm">{getValue<string>()}</span>,
      },

      // 4) Importe Total (US$)
      {
        accessorKey: 'importeTotal',
        header: 'Importe Total (US$)',
        cell: ({ getValue }) => {
          const v = getValue<number>();
          return (
            <span className="text-sm">
              {v.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          );
        },
      },

      // 5) Estudio de Abogados
      {
        accessorKey: 'estudioAbogados',
        header: 'Estudio de Abogados',
        cell: ({ getValue }) => <span className="text-sm">{getValue<string>()}</span>,
      },

      // 6) Acción (Eliminar)
      {
        id: 'accion',
        header: 'Acción',
        cell: ({ row }) => {
          const r = row.original as Row;
          return (
            <ButtonIcon
              title=""
              color="red"
              size="sm"
              onClick={() => deleteRow(r.id)}
              icon={<TrashIcon className="w-4 h-4" />}
            />
          );
        },
        enableSorting: false,
      },
    ],
    [allChecked, someChecked, selected]
  );

  return (
    <>
      <DataTable<Row> data={rows} columns={columns} striped dense={false} stickyHeader caption="" />
      <ModalQualificationDetail isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
