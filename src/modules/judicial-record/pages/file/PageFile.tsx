'use client';

import { useState } from 'react';
import { DatosIdentificativos } from '../../components/datosIdentificativos/DatosIdentificativos';
import { TablaSituacionDeuda } from '../../components/datosIdentificativos/TablaSituacionDeuda';
import { TablaGarantiasProvisiones } from '../../components/datosIdentificativos/TablaGarantiasProvisiones';
import { Title } from '@/components/ui';

type TabKey = 'cliente' | 'judicial' | 'concursal';

const JudicialRecordTabs = () => {
  const [active, setActive] = useState<TabKey>('cliente');

  const TabBtn = ({ id, children }: { id: TabKey; children: React.ReactNode }) => {
    const isActive = active === id;
    return (
      <button
        onClick={() => setActive(id)}
        className={[
          'px-3 py-1.5 text-sm border border-b-0 rounded-t',
          isActive ? 'bg-gray-200 font-semibold' : 'bg-gray-100 hover:bg-gray-50',
        ].join(' ')}
      > 
        {children}
      </button>
    );
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex gap-2">
        <TabBtn id="cliente">FICHA DEL CLIENTE</TabBtn>
        <TabBtn id="judicial">FICHA JUDICIAL</TabBtn>
        <TabBtn id="concursal">FICHA CONCURSAL</TabBtn>
      </div>

      {/* Contenedor con borde (como la maqueta) */}
      <div className="border rounded-b rounded-tr p-4 -mt-[1px]">
        {active === 'cliente' && (
          <div className="space-y-8">
            <HeaderMini />
            <DatosIdentificativos />
            <TablaSituacionDeuda />
            <TablaGarantiasProvisiones />
          </div>
        )}

        {active === 'judicial' && (
          <div className="space-y-8">
            <HeaderMini />
            {/* Puedes reusar los mismos o colocar otros específicos */}
            <DatosIdentificativos />
            <TablaSituacionDeuda />
          </div>
        )}

        {active === 'concursal' && (
          <div className="space-y-8">
            <HeaderMini />
            <TablaGarantiasProvisiones />
          </div>
        )}
      </div>
    </div>
  );
};

function HeaderMini() {
  return (
    <div className="grid grid-cols-12 gap-4 border p-3 rounded">
      <Field label="Código BT:" />
      <Field label="Tipo:" />
      <Field label="Estatus:" />
      <Field label="Deudor:" />
      <Field label="Plaza:" />
      <Field label="T.C.:" />
    </div>
  );
}

function Field({ label }: { label: string }) {
  return (
    <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
     
      <span className="text-sm font-semibold">{label}</span>
      {/* Placeholder gris como en la imagen */}
      <div className="h-7 flex-1 rounded border bg-gray-200/70" />
    </div>
  );
}

export const Component = JudicialRecordTabs;
