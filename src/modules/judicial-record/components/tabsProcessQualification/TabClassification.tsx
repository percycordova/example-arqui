'use client';

import { useMemo, useState } from 'react';
import { DataTable, InputBase } from '@/components/ui';
import type { AnyColumnDef } from '@/types/AnyColumnDef';

/* ============================ */
/* ======== PAGE VIEW ========= */
/* ============================ */
export function TabClassification() {
  const [codigoBT, setCodigoBT] = useState('');
  const [nroRef, setNroRef] = useState('');
  const [cliente, setCliente] = useState('');

  // dummy data
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

  const [estados, setEstados] = useState(estadosSeed);
  const [expedientes, setExpedientes] = useState(expedientesSeed);

  const borrarEstadosSeleccionados = () => setEstados(prev => prev.filter(r => !r.borrar));
  const eliminarExpedientesSeleccionados = () =>
    setExpedientes(prev => prev.filter(r => !r.seleccionado));

  const grabar = () => {
    console.log('Grabar', { codigoBT, nroRef, cliente, estados, expedientes });
    alert('Grabado (demo)');
  };

  const limpiar = () => {
    setCodigoBT('');
    setNroRef('');
    setCliente('');
    setEstados(estadosSeed);
    setExpedientes(expedientesSeed);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Cabecera */}
      <div className="border rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputBase
            label="Código BT:"
            value={codigoBT}
            onChange={e => setCodigoBT(e.target.value)}
          />
          <InputBase
            label="Número de Referencia:"
            value={codigoBT}
            onChange={e => setNroRef(e.target.value)}
          />
          <InputBase label="Cliente:" value={codigoBT} onChange={e => setCliente(e.target.value)} />
        </div>
      </div>

      {/* Tabla de estados (DataTable) */}
      <div className="space-y-2">
        <TablaEstadosProcesosDT
          rows={estados}
          onToggle={(id, checked) =>
            setEstados(prev => prev.map(r => (r.id === id ? { ...r, borrar: checked } : r)))
          }
        />
        <div className="text-right">
          <button
            onClick={borrarEstadosSeleccionados}
            className="text-sm text-blue-600 hover:underline"
          >
            Borrar Estados
          </button>
        </div>
      </div>

      {/* Generación de expedientes internos (DataTable) */}
      <section className="space-y-3">
        <h3 className="text-red-700 font-bold tracking-wide">GENERACIÓN DE EXPEDIENTES INTERNOS</h3>

        <TablaExpedientesInternosDT
          rows={expedientes}
          onToggleAll={checked =>
            setExpedientes(prev => prev.map(r => ({ ...r, seleccionado: checked })))
          }
          onToggleRow={(id, checked) =>
            setExpedientes(prev =>
              prev.map(r => (r.id === id ? { ...r, seleccionado: checked } : r))
            )
          }
        />

        <div className="flex items-center justify-between">
          <button
            onClick={eliminarExpedientesSeleccionados}
            className="ml-auto rounded bg-red-600 text-white px-4 py-2 hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={grabar}
            className="rounded bg-red-600 text-white px-6 py-2 hover:bg-red-700"
          >
            Grabar
          </button>
          <button
            onClick={limpiar}
            className="rounded bg-red-600 text-white px-6 py-2 hover:bg-red-700"
          >
            Limpiar
          </button>
        </div>
      </section>
    </div>
  );
}

/* ============================ */
/* ======= SUBCOMPONENTS ====== */
/* ============================ */

function LabeledInput({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-medium min-w-[130px]">{label}</span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

/* ---------- Tabla 1: Estados (DataTable) ---------- */

type EstadoRow = {
  id: string;
  detalle: string;
  fecha: string; // ISO
  estado: string;
  observaciones: string;
  borrar: boolean;
};

function TablaEstadosProcesosDT({
  rows,
  onToggle,
}: {
  rows: EstadoRow[];
  onToggle: (id: string, checked: boolean) => void;
}) {
  const columns: AnyColumnDef<EstadoRow>[] = useMemo(
    () => [
      { accessorKey: 'detalle', header: 'Detalle' },
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
      {
        accessorKey: 'borrar',
        header: 'Borrar',
        meta: { align: 'center' },
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.original.borrar}
            onChange={e => onToggle(row.original.id, e.target.checked)}
          />
        ),
      },
    ],
    [onToggle]
  );

  return (
    <DataTable<EstadoRow>
      data={rows}
      columns={columns}
      striped
      dense={false}
      stickyHeader
      caption=""
    />
  );
}

/* ------ Tabla 2: Expedientes Internos (DataTable) ------ */

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

function TablaExpedientesInternosDT({
  rows,
  onToggleRow,
  onToggleAll,
}: {
  rows: ExpedienteRow[];
  onToggleRow: (id: string, checked: boolean) => void;
  onToggleAll: (checked: boolean) => void;
}) {
  const nf = useMemo(
    () => new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    []
  );

  const total = useMemo(() => rows.reduce((acc, r) => acc + (r.importe || 0), 0), [rows]);

  // agregamos fila TOTAL como última
  const dataWithTotal: ExpedienteRow[] = useMemo(
    () => [
      ...rows,
      {
        id: '__total__',
        detalle: 'TOTAL',
        nroOperacion: '',
        tipoCartera: '',
        tipoOperacion: '',
        moneda: '',
        importe: total,
        expedienteInterno: '',
        seleccionado: false,
        isTotalRow: true,
      },
    ],
    [rows, total]
  );

  const allChecked = rows.length > 0 && rows.every(r => r.seleccionado);

  const columns: AnyColumnDef<ExpedienteRow>[] = useMemo(
    () => [
      {
        accessorKey: 'detalle',
        header: () => (
          <div className="flex items-center justify-between">
            <span>Detalle</span>
            <label className="text-xs flex items-center gap-1 pr-1">
              <input
                type="checkbox"
                checked={allChecked} // ✅ sin corchetes
                onChange={e => onToggleAll(e.target.checked)}
              />
              Todos
            </label>
          </div>
        ),
        cell: ({ row, getValue }) => (
          <span className={row.original.isTotalRow ? 'font-semibold' : ''}>
            {getValue<string>()}
          </span>
        ),
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
              onChange={e => onToggleRow(row.original.id, e.target.checked)}
            />
          ),
      },
    ],
    [allChecked, onToggleAll, onToggleRow, nf]
  );

  return (
    <DataTable<ExpedienteRow>
      data={dataWithTotal}
      columns={columns}
      striped
      dense={false}
      stickyHeader
      caption=""
    />
  );
}
