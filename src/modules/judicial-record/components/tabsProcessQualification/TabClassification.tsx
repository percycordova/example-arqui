'use client';

import { useMemo, useState } from 'react';
import { DataTable, InputBase } from '@/components/ui';
import { TableSearchQualification } from '../tables/tableSearchQualification/TableSearchQualification';
import { TableGenerationInternalFiles } from '../tables/tableGenerationInternalFiles/TableGenerationInternalFiles';


export function TabClassification() {
  const [codigoBT, setCodigoBT] = useState('');

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

      {/* Tabla de estados (DataTable) */}
      <div className="space-y-2">
        <TableSearchQualification />
        <div className="text-right">
          <button className="text-sm text-blue-600 hover:underline">Borrar Estados</button>
        </div>
      </div>

      {/* Generación de expedientes internos (DataTable) */}
      <section className="space-y-3">
        <h3 className="text-red-700 font-bold tracking-wide">GENERACIÓN DE EXPEDIENTES INTERNOS</h3>

        <TableGenerationInternalFiles />

        <div className="flex items-center justify-between">
          <button className="ml-auto rounded bg-red-600 text-white px-4 py-2 hover:bg-red-700">
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

/* ------ Tabla 2: Expedientes Internos (DataTable) ------ */
