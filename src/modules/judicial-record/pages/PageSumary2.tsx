'use client';
import * as yup from 'yup';
import { useState } from 'react';
import { Typography } from '@/components/ui/typography/Typography';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';
import { GenericTable } from '@/components/ui/genericTable/GenericTable';
import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper';
import { RHFInput } from '@/components/forms/rhfInput/RHFInput';

type ResumenValues = {
  deudor: string;
  cuentaBT: string;
  deudaTotal: string;
  montoDemandado: string;
  montoNoDemandado: string;
  garantias: string;
  nroJuicios: string;
};

const schema = yup.object({
  deudor: yup.string(),
  cuentaBT: yup.string(),
  deudaTotal: yup.string(),
  montoDemandado: yup.string(),
  montoNoDemandado: yup.string(),
  garantias: yup.string(),
  nroJuicios: yup.string(),
});

const defaultResumenValues: ResumenValues = {
  deudor: '',
  cuentaBT: '',
  deudaTotal: '',
  montoDemandado: '',
  montoNoDemandado: '',
  garantias: '',
  nroJuicios: '',
};

interface Expediente {
  id: number;
  nroExpInterno: string;
  montoDemandado: number;
  nroProceso: string;
  montoProceso: number;
  tipoProceso: string;
  estadoProceso: string;
  efectoSusp: string;
}

const mockExpedientes: Expediente[] = [
  // agrega data real; dejo 3 rows para ver el rayado
  {
    id: 1,
    nroExpInterno: 'INT-0001',
    montoDemandado: 12000,
    nroProceso: 'P-100',
    montoProceso: 9500,
    tipoProceso: 'Ordinario',
    estadoProceso: 'En trámite',
    efectoSusp: 'No',
  },
  {
    id: 2,
    nroExpInterno: 'INT-0002',
    montoDemandado: 5400,
    nroProceso: 'P-101',
    montoProceso: 5400,
    tipoProceso: 'Sumarísimo',
    estadoProceso: 'Sentenciado',
    efectoSusp: 'Sí',
  },
  {
    id: 3,
    nroExpInterno: 'INT-0003',
    montoDemandado: 8000,
    nroProceso: 'P-102',
    montoProceso: 8000,
    tipoProceso: 'Ejecución',
    estadoProceso: 'Archivado',
    efectoSusp: 'No',
  },
];

const BoxLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={`text-sm font-semibold text-red-600 ${className || ''}`}>{children}</div>;

export const FichaResumen = () => {
  const [expedientes] = useState<Expediente[]>(mockExpedientes);

  return (
    <div className="max-w-7xl mx-auto my-10">
      {/* Título */}
      <Typography className="text-primary text-center mb-6" as="h2" variant="subtitle">
        FICHA RESUMEN
      </Typography>

      {/* Botones superiores */}
      <div className="flex justify-end gap-3 mb-3">
        <ButtonBase title="Ayuda" onClick={() => console.log('Ayuda')} />
        <ButtonBase title="Exp. Excel" onClick={() => console.log('Exportar Excel')} />
        <ButtonBase title="Imprimir" onClick={() => window.print()} />
      </div>

      {/* Tabs fake */}
      <div className="flex gap-2 mb-2">
        <div className="text-[10px] border px-2 py-1 rounded bg-white">FICHA DEL CLIENTE</div>
        <div className="text-[10px] border px-2 py-1 rounded bg-white">FICHA JUDICIAL</div>
        <div className="text-[10px] border px-2 py-1 rounded bg-white">FICHA CONCURSAL</div>
      </div>

      {/* Panel principal */}
      <div className="border rounded-xl p-4">
        {/* Bloque: Deudor / Cuenta BT + métricas (readonly) */}
        <FormProviderWrapper<ResumenValues>
          schema={schema}
          defaultValues={defaultResumenValues}
          onSubmit={() => {}}
        >
          {() => (
            <>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-2 mb-3">
                <BoxLabel>DEUDOR:</BoxLabel>
                <RHFInput name="deudor" label="" disabled className="bg-gray-100" />
                <BoxLabel>CUENTA BT:</BoxLabel>
                <RHFInput name="cuentaBT" label="" disabled className="bg-gray-100" />
              </div>

              <div className="border rounded-md p-3">
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-2">
                  <div className="text-sm font-medium">DEUDA TOTAL (US$):</div>
                  <RHFInput name="deudaTotal" label="" disabled className="bg-gray-100" />
                  <div className="text-sm font-medium">MONTO DEMANDADO (US$):</div>
                  <RHFInput name="montoDemandado" label="" disabled className="bg-gray-100" />
                  <div className="text-sm font-medium">MONTO NO DEMANDADO (US$):</div>
                  <RHFInput name="montoNoDemandado" label="" disabled className="bg-gray-100" />
                  <div className="text-sm font-medium">GARANTÍAS:</div>
                  <RHFInput name="garantias" label="" disabled className="bg-gray-100" />
                  <div className="text-sm font-medium">NRO. JUICIOS O EXP. JUD.:</div>
                  <RHFInput name="nroJuicios" label="" disabled className="bg-gray-100" />
                </div>
              </div>
            </>
          )}
        </FormProviderWrapper>
      </div>

      {/* EXPEDIENTES INTERNOS */}
      <div className="border rounded-xl p-4 mt-6">
        <Typography as="h3" variant="subtitle" className="font-semibold text-red-600 mb-2">
          EXPEDIENTES INTERNOS
        </Typography>

        <div className="border rounded-lg overflow-hidden">
          <div className="text-center text-xs font-semibold py-1 border-b">RECUPERACIONES</div>

          <GenericTable<Expediente>
            data={expedientes}
            renderHeader={() => (
              <div className="grid grid-cols-12 bg-gray-100 rounded-t-lg text-gray-700 text-center">
                <div className="col-span-1 px-3 py-2 font-semibold border-r border-gray-300">
                  Seleccionar
                </div>
                <div className="col-span-2 px-3 py-2 font-semibold border-r border-gray-300">
                  Nro. Exp. Interno
                </div>
                <div className="col-span-2 px-3 py-2 font-semibold border-r border-gray-300">
                  Monto Demandado (US$)
                </div>
                <div className="col-span-1 px-3 py-2 font-semibold border-r border-gray-300">
                  # Proceso
                </div>
                <div className="col-span-1 px-3 py-2 font-semibold border-r border-gray-300">
                  Monto Proceso
                </div>
                <div className="col-span-2 px-3 py-2 font-semibold border-r border-gray-300">
                  Tipo de Proceso
                </div>
                <div className="col-span-1 px-3 py-2 font-semibold border-r border-gray-300">
                  Estado Proceso
                </div>
                <div className="col-span-1 px-3 py-2 font-semibold border-r border-gray-300">
                  Efecto Susp.
                </div>
                <div className="col-span-1 px-3 py-2 font-semibold">Ver Ficha</div>
              </div>
            )}
            renderRow={item => (
              <div
                key={item.id}
                className="grid grid-cols-12 border-b border-gray-300 hover:bg-gray-50 transition-colors text-center"
              >
                <div className="col-span-1 px-3 py-2 border-r border-gray-300">
                  <input type="checkbox" onChange={() => console.log('select', item.id)} />
                </div>
                <div className="col-span-2 px-3 py-2 border-r border-gray-300 font-medium text-gray-700">
                  {item.nroExpInterno}
                </div>
                <div className="col-span-2 px-3 py-2 border-r border-gray-300">
                  {item.montoDemandado.toLocaleString()}
                </div>
                <div className="col-span-1 px-3 py-2 border-r border-gray-300">
                  {item.nroProceso}
                </div>
                <div className="col-span-1 px-3 py-2 border-r border-gray-300">
                  {item.montoProceso.toLocaleString()}
                </div>
                <div className="col-span-2 px-3 py-2 border-r border-gray-300">
                  {item.tipoProceso}
                </div>
                <div className="col-span-1 px-3 py-2 border-r border-gray-300">
                  {item.estadoProceso}
                </div>
                <div className="col-span-1 px-3 py-2 border-r border-gray-300">
                  {item.efectoSusp}
                </div>
                <div className="col-span-1 px-3 py-2 flex items-center justify-center">
                  <ButtonBase
                    title="Ver Ficha"
                    color="blue"
                    onClick={() => console.log('Ir a ficha ->', item.id)}
                    className='p-1 w-[100px] '
                  />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const Component = FichaResumen;
