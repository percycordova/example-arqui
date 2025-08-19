'use client';

import { useState } from 'react';
import { ButtonBase, InputBase, SelectBase } from '@/components/ui';
import { TableLawFirm } from '../tables/tableLawFirm/TableLawFirm';
import { ModalProcessReassignment } from '../modals/modalTest/ModalTest';
import { useModal } from '@/hooks/useModal';

export function TabAssignment() {
  const [codigoBT, setCodigoBT] = useState('');
  const {closeModal,isOpen,openModal} = useModal()

  const grabar = () => {
    alert('Grabado (demo)');
  };

  const limpiar = () => {
    setCodigoBT('');
  };

  return (
    <div className="p-4 space-y-6">
      {/* Cabecera */}
      <div className="border border-gray-300 rounded p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputBase
            label="Código BT:"
            value={codigoBT}
            onChange={e => setCodigoBT(e.target.value)}
          />
          <InputBase label="Número de Referencia:" value={codigoBT} />
          <InputBase label="Cliente:" value={codigoBT} />
        </div>
      </div>
      <div className="border border-gray-300 rounded p-4 flex items-center gap-8 mb-12">
        <p>Estudio de abogados: </p>
        <SelectBase
          options={[]}
          color="gray"
          value=""
          onChange={() => {}}
          defaultMessage="-- Seeccione estudio de abogados --"
          lang="es"
        />
      </div>
     <ButtonBase title='Buscar' onClick={openModal}/>
      {/* Tabla de estados (DataTable) */}
      <div className="space-y-2">
        <TableLawFirm />
        <div className="text-right">
          <button className="text-sm text-blue-600 hover:underline">Borrar Estados</button>
        </div>
      </div>
      <ModalProcessReassignment  isOpen={isOpen} onClose={closeModal}/>
    </div>
  );
}
