'use client';

import { SelectBase, Title } from '@/components/ui';
import { useState } from 'react';

const opcionesTipo = [
  { label: 'Personales', value: 'personales' },
  { label: 'Operativos', value: 'operativos' },
  { label: 'Comerciales', value: 'comerciales' },
  { label: 'Legales', value: 'legales' },
];

const opcionesCategoria = [
  { label: 'Generales', value: 'generales' },
  { label: 'Contratos', value: 'contratos' },
  { label: 'Cartas', value: 'cartas' },
  { label: 'Memorandos', value: 'memorandos' },
];

const DEFAULTS = {
  nombre: 'Plantilla_2',
  tipo: 'personales',
  categoria: 'generales',
};

const PageEditTemplateMaintenance = () => {
  const [nombre, setNombre] = useState(DEFAULTS.nombre);
  const [tipo, setTipo] = useState(DEFAULTS.tipo);
  const [categoria, setCategoria] = useState(DEFAULTS.categoria);

  return (
    <section className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2 mt-10">
        <Title text="Nombre de la Plantilla" />
        <textarea
          rows={3}
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="w-full rounded border border-gray-400 bg-white p-2 shadow-sm"
          placeholder="Escribe el nombre..."
        />
      </div>

      {/* Tipo y Categoría */}
      <div className="grid grid-cols-1 items-start justify-items-center gap-10 sm:grid-cols-2">
        {/* Tipo */}
        <div className="w-full max-w-xs space-y-2 text-center">
          <div className="text-lg font-semibold text-red-700">Tipo</div>
          <SelectBase
            options={opcionesTipo}
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            color="gray"
            className="w-full"
          />
        </div>

        {/* Categoría */}
        <div className="w-full max-w-xs space-y-2 text-center">
          <div className="text-lg font-semibold text-red-700">Categoría</div>
          <SelectBase
            options={opcionesCategoria}
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            color="gray"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export const Component = PageEditTemplateMaintenance;
