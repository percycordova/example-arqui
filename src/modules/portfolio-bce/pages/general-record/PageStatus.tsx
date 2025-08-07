'use client';

import { ButtonBase, GenericTable, Typography } from '@/components/ui';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Estatus {
  id: number;
  codigo: string;
  descripcion: string;
}

const data: Estatus[] = [
  { id: 1, codigo: '1', descripcion: 'Prueba 1' },
  { id: 2, codigo: '2', descripcion: 'Producto de ejemplo' },
  { id: 3, codigo: '3', descripcion: 'Servicio premium' },
  { id: 4, codigo: '4', descripcion: 'Configuración básica' },
];

const EstatusTable = () => {
  const handleEdit = (item: Estatus) => {
    console.log('Editar', item);
  };

  const handleDelete = (item: Estatus) => {
    console.log('Eliminar', item);
  };

  return (
    <GenericTable<Estatus>
      data={data}
      renderHeader={() => (
        <div className="grid grid-cols-12 bg-gray-100 rounded-t-lg">
          <div className="col-span-2 px-4 py-3 font-semibold text-center text-gray-700 border-r border-r-gray-300">
            Código
          </div>
          <div className="col-span-7 px-4 py-3 font-semibold text-center text-gray-700 border-r border-r-gray-300">
            Descripción
          </div>
          <div className="col-span-3 px-4 py-3 font-semibold text-center text-gray-700">
            Acciones
          </div>
        </div>
      )}
      renderRow={item => (
        <div
          key={item.id}
          className="grid grid-cols-12 border-b border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <div className="col-span-2 px-4 py-2 text-center text-gray-700 font-medium border-r border-gray-300">
            {item.codigo}
          </div>
          <div className="col-span-7 px-4 py-2 text-center border-r border-gray-300">
            {item.descripcion}
          </div>
          <div className="col-span-3 px-4 py-2 flex justify-center items-center gap-4">
            <button
              onClick={() => handleEdit(item)}
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              title="Editar"
            >
              <PencilSquareIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleDelete(item)}
              className="text-red-600 hover:text-red-800 cursor-pointer"
              title="Eliminar"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    />
  );
};

const PageStatus = () => {
  return (
    <div className="mt-10">
      <Typography className="text-primary text-center mb-8" as="h2" variant="subtitle">
        FICHA GENERAL - ESTATUS
      </Typography>
      <div className="max-w-5xl mx-auto">
        <EstatusTable />

        <div className="flex justify-end mt-4">
          <ButtonBase title="Agregar" />
        </div>
      </div>
    </div>
  );
};

export const Component = PageStatus;
