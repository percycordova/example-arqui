import { useState } from 'react';
import { ButtonIcon, InputBase, SelectBase, Title } from '@/components/ui';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';
import { TableSupervisors } from '../../components/tables/tableSupervisors/TableSupervisors';

const tipoOptions = [
  { label: 'Todos', value: '' },
  { label: 'Plantillas', value: 'PLANTILLA' },
  { label: 'Cartas', value: 'CARTA' },
  { label: 'Contratos', value: 'CONTRATO' },
  { label: 'Memorandos', value: 'MEMORANDO' },
  { label: 'Oficios', value: 'OFICIO' },
];
const PageSupervisor = () => {
  const [exchangeRate, setExchangeRate] = useState('3.59');

  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="RESUMEN POR SUPERVISOR" />

        {/* Top Controls */}
        <div className="my-8 flex items-end justify-between gap-4">
          <div className="flex gap-2 justify-center items-center  ">
            <div className="flex items-center gap-3 justify-center mt-10">
              <span className="text-primary font-bold">Materia:</span>
              <SelectBase options={tipoOptions} className="" />
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <ButtonIcon
              title="Exportar Excel"
              icon={<DocumentArrowDownIcon className="w-5 h-5" />}
              iconPosition="left"
              className="bg-green-600 hover:bg-green-700 text-white"
            />
            <ButtonIcon
              title="Imprimir"
              color="blue"
              icon={<PrinterIcon className="w-5 h-5" />}
              iconPosition="left"
            />
          </div>
        </div>

        {/* Table */}
        <TableSupervisors />
      </div>
    </div>
  );
};

export const Component = PageSupervisor;
