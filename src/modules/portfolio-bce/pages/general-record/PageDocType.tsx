'use client';

import * as yup from 'yup';
import { useState } from 'react';
import { ButtonBase, GenericTable, Typography } from '@/components/ui';
import { useModal } from '@/hooks/useModal';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ModalBase } from '@/components/ui/modalBase/ModalBase';
import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper';
import { RHFInput } from '@/components/forms/rhfInput/RHFInput';
import { RHFButton } from '@/components/forms/rhfButton/RHFButton';
import { ConfirmModal } from '@/components/common';

interface Estatus {
  id: number;
  codigo: string;
  descripcion: string;
}

const schema = yup.object({
  descripcion: yup.string().required('La descripción es obligatoria'),
  codigo: yup.string().when('$isEdit', {
    is: true,
    then: schema => schema.required('El código es obligatorio'),
    otherwise: schema => schema.notRequired(),
  }),
});

type FormValues = yup.InferType<typeof schema>;

const initialData: Estatus[] = [
  { id: 1, codigo: '1', descripcion: 'Prueba 1' },
  { id: 2, codigo: '2', descripcion: 'Producto de ejemplo' },
  { id: 3, codigo: '3', descripcion: 'Servicio premium' },
  { id: 4, codigo: '4', descripcion: 'Configuración básica' },
];

export const PageDocType = () => {
  const { closeModal, isOpen, openModal } = useModal();

  const [estatusList, setEstatusList] = useState<Estatus[]>(initialData);
  const [editItem, setEditItem] = useState<Estatus | null>(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<Estatus | null>(null);

  const handleSubmit = (data: FormValues) => {
    if (editItem) {
      // Editar
      setEstatusList(prev =>
        prev.map(item =>
          item.id === editItem.id
            ? { ...item, descripcion: data.descripcion, codigo: data.codigo! }
            : item
        )
      );
    } else {
      // Agregar
      const newId = Math.max(...estatusList.map(e => e.id), 0) + 1;
      const newCodigo = String(newId);
      setEstatusList(prev => [
        ...prev,
        { id: newId, codigo: newCodigo, descripcion: data.descripcion },
      ]);
    }

    closeModal();
    setEditItem(null);
  };

  const handleEdit = (item: Estatus) => {
    setEditItem(item);
    openModal();
  };

  const handleDelete = (item: Estatus) => {
    setItemToDelete(item);
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setEstatusList(prev => prev.filter(e => e.id !== itemToDelete.id));
      setItemToDelete(null);
      setShowConfirmDelete(false);
    }
  };

  const cancelDelete = () => {
    setItemToDelete(null);
    setShowConfirmDelete(false);
  };

  const defaultValues: FormValues = {
    descripcion: editItem?.descripcion ?? '',
    codigo: editItem?.codigo ?? '',
  };

  return (
    <div className="mt-10">
      <Typography className="text-primary text-center mb-8" as="h2" variant="subtitle">
        FICHA GENERAL - TIPO DOCUMENTO
      </Typography>

      <div className="max-w-5xl mx-auto">
        <GenericTable<Estatus>
          data={estatusList}
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

        <div className="flex justify-end mt-4">
          <ButtonBase
            title="Agregar"
            onClick={() => {
              setEditItem(null);
              openModal();
            }}
          />
        </div>
      </div>

      {/* Modal Agregar / Editar */}
      <ModalBase isOpen={isOpen} onClose={closeModal}>
        <FormProviderWrapper<FormValues>
          key={editItem?.id || 'new'}
          schema={schema}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="flex flex-col gap-4 items-center p-4 ">
              <Typography variant="subtitle">
                {editItem ? 'Editar Estatus' : 'Agregar Estatus'}
              </Typography>

              {/* Mostrar campo CÓDIGO solo al editar */}
              {editItem && <RHFInput name="codigo" label="Código" className="w-xl" />}

              <RHFInput name="descripcion" label="Descripción" className="w-xl" />

              <div className="text-center">
                <RHFButton title="Guardar" color="blue" />
              </div>
            </div>
          )}
        </FormProviderWrapper>
      </ModalBase>

      {/* Modal Confirmación de eliminación */}
      <ConfirmModal
        isOpen={showConfirmDelete}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="¿Estás seguro?"
        description={`¿Deseas eliminar el estatus "${itemToDelete?.descripcion}"?`}
        icon={<TrashIcon className="w-8 h-8" />}
      />
    </div>
  );
};

export const Component = PageDocType;
