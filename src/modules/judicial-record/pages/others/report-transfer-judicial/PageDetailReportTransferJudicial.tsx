import { useState } from 'react';
import { ModalBase, Title } from '@/components/ui';
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

const detalleGarantiaCliente = [
  { label: 'Nro de Cuenta BT: ', content: '123456' },
  { label: 'Nro de Cuenta Cargo: ', content: '123456' },
  { label: 'Tipo de Cartera: ', content: '123456' },
  { label: 'Dato 0: ', content: '123456' },
  { label: 'RUC/DNI: ', content: '71404761' },
];

const detalleGarantiaInmueble = [
  { label: 'Dato 1: ', content: '123456' },
  { label: 'Dato 2: ', content: '123456' },
  { label: 'Dato 3: ', content: '123456' },
  { label: 'Dato 4: ', content: '123456' },
  { label: 'Dato 5:', content: '71404761' },
];

const PageDetailReportTransferJudicial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
        <p className="cursor-pointer text-blue-600 underline" onClick={openModal}>
          Detalle
        </p>
      </div>

      <ModalBase
        isOpen={isModalOpen}
        onClose={closeModal}
        showXButton={true}
        className="bg-white p-10 rounded-lg"
      >
        <Title text="DATOS DEL CLIENTE" />
        <div className="grid grid-cols-2 gap-6 my-6">
          {detalleGarantiaCliente.map((item, i) => (
            <InputNoEditable key={i} label={item.label} content={item.content} fullWidth={false} />
          ))}
        </div>

        <Title text="DATOS DE LOS INMUEBLES" />
        <div className="grid grid-cols-2 gap-6 mt-6">
          {detalleGarantiaInmueble.map((item, i) => (
            <InputNoEditable key={i} label={item.label} content={item.content} fullWidth={false} />
          ))}
        </div>

        
      </ModalBase>
    </div>
  );
};

export const Component = PageDetailReportTransferJudicial;
