// src/modules/cartera/pages/EstadoCarteraPage.tsx
import React, { useMemo, useState } from 'react';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';
import { GenericTable } from '@/components/ui/genericTable/GenericTable';
import { cn } from '@/utils/cn';
import { InputBase } from '@/components/ui';

type CarteraRow = {
  id: number;
  plaza: string;
  noClientes: number;
  propia: number;
  sciTit1: number;
  tit2: number;
  sciTit3: number;
  fideicomiso: number;
  castigoCapital: number;
  sciFideicomiso: number;
  total: number;
  garantia: number;
  provision: number;
};

const mock: CarteraRow[] = [
  {
    id: 1,
    plaza: 'LIMA',
    noClientes: 120,
    propia: 150_000,
    sciTit1: 40_000,
    tit2: 25_000,
    sciTit3: 12_000,
    fideicomiso: 18_000,
    castigoCapital: 5_500,
    sciFideicomiso: 7_800,
    total: 258_300,
    garantia: 90_000,
    provision: 12_300,
  },
  {
    id: 2,
    plaza: 'AREQUIPA',
    noClientes: 60,
    propia: 75_000,
    sciTit1: 10_000,
    tit2: 9_500,
    sciTit3: 4_300,
    fideicomiso: 8_200,
    castigoCapital: 3_100,
    sciFideicomiso: 4_000,
    total: 114_100,
    garantia: 30_000,
    provision: 6_800,
  },
];

const currency = (n: number) =>
  n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const PageTypePlace = () => {
  const [tc, setTc] = useState('3.59');

  const expedientes = useMemo(() => mock, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Título */}
        <h1 className="text-center text-lg font-semibold text-gray-800">PLAZA / TIPO</h1>

        {/* Controles superiores */}
        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="w-56">
            <InputBase
              label="T.C S/."
              value={tc}
              onChange={e => setTc(e.target.value)}
              placeholder="0.00"
              color="gray"
            />
          </div>

          <div className="flex items-center gap-2">
            <ButtonBase title="Exp. Excel" onClick={() => console.log('Exportar Excel')} />
            <ButtonBase title="Imprimir" onClick={() => console.log('Imprimir')} />
          </div>
        </div>

        {/* Contenedor tabla */}
        <div className="mt-6 rounded-lg border border-gray-300 overflow-hidden">
          {/* Encabezado “Estado de Cartera” */}
          <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 text-center text-sm font-semibold text-gray-700">
            Estado de Cartera
          </div>

          {/* Tabla */}
          <GenericTable<CarteraRow>
            data={expedientes}
            renderHeader={() => (
              <div className="grid grid-cols-[140px_110px_120px_140px_120px_140px_120px_130px_150px_120px_120px_120px] bg-gray-50 text-gray-700 text-xs">
                {[
                  'Plaza',
                  'No Clientes',
                  'Propia',
                  'SCI Titulizada 1',
                  'Titulizada 2',
                  'SCI Titulizada 3',
                  'Fideicomiso',
                  'Castigo Capital',
                  'SCI Fideicomiso',
                  'Total',
                  'Garantía',
                  'Provisión',
                ].map((h, i) => (
                  <div
                    key={h}
                    className={cn(
                      'px-3 py-2 font-semibold border-r border-gray-300 text-center',
                      i === 11 && 'border-r-0'
                    )}
                  >
                    {h}
                  </div>
                ))}
              </div>
            )}
            renderRow={item => (
              <div
                key={item.id}
                className="grid grid-cols-[140px_110px_120px_140px_120px_140px_120px_130px_150px_120px_120px_120px] text-xs border-t border-gray-200 hover:bg-gray-50"
              >
                <div className="px-3 py-2 border-r border-gray-200 text-center">{item.plaza}</div>
                <div className="px-3 py-2 border-r border-gray-200 text-center">
                  {item.noClientes}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.propia)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.sciTit1)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.tit2)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.sciTit3)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.fideicomiso)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.castigoCapital)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.sciFideicomiso)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.total)}
                </div>
                <div className="px-3 py-2 border-r border-gray-200 text-right">
                  {currency(item.garantia)}
                </div>
                <div className="px-3 py-2 text-right">{currency(item.provision)}</div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const Component = PageTypePlace;
