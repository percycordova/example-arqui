'use client';

import { useMemo, useState } from 'react';
import { ModalBase } from '@/components/ui/modalBase/ModalBase';
import { Title, InputBase, ButtonBase, DataTable } from '@/components/ui';
import { AnyColumnDef } from '@/types/AnyColumnDef';

type Row = {
  id: string;
  cliente: string;
  cuentaIntegradora: string;
  totalDeuda: number; // US$ o equiv
};

interface ModalProcessReassignmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalProcessReassignment = ({ isOpen, onClose }: ModalProcessReassignmentProps) => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');

  // Seed de datos (mock)
  const allData = useMemo<Row[]>(
    () => [
      {
        id: '1',
        cliente: 'SCOMBRO PERU S.A.C.',
        cuentaIntegradora: '38927901',
        totalDeuda: -300.211,
      },
      {
        id: '2',
        cliente: 'SCOMBRO PERU S.A.C.',
        cuentaIntegradora: '38927901',
        totalDeuda: -300.211,
      },
      {
        id: '3',
        cliente: 'SCOMBRO PERU S.A.C.',
        cuentaIntegradora: '38927901',
        totalDeuda: -300.211,
      },
    ],
    []
  );

  const data = useMemo(() => {
    const byNombre =
      nombre.trim().length === 0
        ? allData
        : allData.filter(r => r.cliente.toLowerCase().includes(nombre.toLowerCase()));
    return byNombre;
  }, [allData, nombre, codigo]);

  const columns = useMemo<AnyColumnDef<Row>[]>(
    () => [
      { accessorKey: 'cliente', header: 'Cliente' },
      { accessorKey: 'cuentaIntegradora', header: 'Cuenta Integradora' },
      {
        accessorKey: 'totalDeuda',
        header: 'Total Deuda (US$ o equiv)',
        cell: ({ row }) =>
          Intl.NumberFormat('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(
            row.original.totalDeuda
          ),
      },
    ],
    []
  );

  const handleBuscar = () => {
    // Aquí iría tu lógica de búsqueda real
  };

  const handleLimpiar = () => {
    setNombre('');
    setCodigo('');
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-5xl"
      disableBackdropClick={false}
      showXButton
    >
      <div className="px-6 py-8 space-y-6">
        <Title text="REASIGNACIÓN DE PROCESOS" />

        {/* Filtros */}
        <div className="mt-6 space-y-4">
          <InputBase
            label="Nombre:"
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
            className="w-full"
          />
          <InputBase
            label="Código:"
            value={codigo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCodigo(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-3">
            <ButtonBase title="Buscar" color="primary" onClick={handleBuscar} />
            <ButtonBase title="Limpiar" color="red" onClick={handleLimpiar} />
          </div>
        </div>

        {/* Tabla */}
        <div className="mt-12">
          <DataTable<Row>
            data={data}
            columns={columns}
            striped
            stickyHeader
            dense={false}
            caption=""
          />
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <ButtonBase title="Cerrar" color="red" onClick={onClose} />
        </div>
      </div>
    </ModalBase>
  );
};
