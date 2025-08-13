import { useState } from 'react';
import { ButtonIcon, InputBase, Title } from '@/components/ui';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';
import { TableSupervisingAttorneys } from '@/modules/judicial-record/components/tables/tableSupervisingAttorneys/TableSupervisingAttorneys';
import { RHFInput } from '@/components/forms/rhfInput/RHFInput';
import { InputNoEditable } from '@/components/ui/inputBase/InputNoEditable';

const detallePase = [
  { label: 'Cuenta BT: ', content: '985426' },
  { label: 'Nombre del Cliente ', content: 'SCOMBRO' },
  { label: 'Plaza:  ', content: 'Lima' },
  { label: 'Número de Referencia ', content: '123456' },
  { label: 'Fecha de Inicio de Pase a Judicial: ', content: '985426' },
  { label: 'Funcionarios de negocios: ', content: 'SCOMBRO' },
  { label: 'Abogado Supervisor: ', content: 'Lima' },
  { label: 'Estudio Externo: ', content: '123456' },
  { label: 'Expediente Interno: ', content: '123456' },
];

const tituloValores = [
  { label: 'Recuperable: ', content: 'No' },
  { label: 'Póliza de Seguro: ', content: 'Sí' },
  { label: 'FECHA DE ENVÍO A CARTERA (CE): ', content: 'Lima' },
  { label: 'FECHA DE RECEPCIÓN DE CARTERA: ', content: '123456' },
  { label: 'FECHA DE ENVÍO DE CARTERA A JUDICIAL (CA) ', content: '985426' },
  { label: 'FECHA DE RECEPCIÓN DE JUDICIAL (JU): ', content: 'SCOMBRO' },
  { label: 'FECHA DE ENVÍO DE JUDICIAL A CALIFICACIÓN: ', content: 'Lima' },
  { label: 'FECHA DE GENERACIÓN DE EXPEDIENTE INTERNO: ', content: '123456' },
  { label: 'FECHA DE ASIGNACIÓN DE ESTUDIO EXTERNO: ', content: '123456' },
];

const PageDetailReportTransferJudicial = () => {
  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="DETALLE DEL PASE A JUDICIAL CON REFERENCIA" />
        <div className="grid grid-cols-2 border p-6 rounded-lg mt-9 gap-6">
          {detallePase.map((item, i) => (
            <InputNoEditable key={i} label={item.label} content={item.content} fullWidth={false} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="TÍTULO VALORES" />
        <div className="border p-6 rounded-lg mt-9">
          <p className="mb-6 font-bold">No se enviaron Títulos Valores</p>
          <div className="grid grid-cols-2 gap-6">
            {tituloValores.map((item, i) => (
              <InputNoEditable
                key={i}
                label={item.label}
                content={item.content}
                fullWidth={false}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="GARANTÍAS" />
        <p className="cursor-pointer text-blue-600 underline">Detalle</p>
      </div>
    </div>
  );
};

export const Component = PageDetailReportTransferJudicial;
