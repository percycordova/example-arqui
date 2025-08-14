import { SelectBase, Title } from '@/components/ui';
import { ActionsButton } from '@/modules/management-support/components/actionsButton/ActionsButton';
import { TableShowTemplateMaintenance } from '@/modules/management-support/components/tables/tableShowTemplateMaintenance/TableShowTemplateMaintenance';

const tipoOptions = [
  { label: 'Todos', value: '' },
  { label: 'Plantillas', value: 'PLANTILLA' },
  { label: 'Cartas', value: 'CARTA' },
  { label: 'Contratos', value: 'CONTRATO' },
  { label: 'Memorandos', value: 'MEMORANDO' },
  { label: 'Oficios', value: 'OFICIO' },
];

const PageShowTemplateMaintenance = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 mb-20">
      <Title text="MANTENIMIENTO DE PLANTILLAS - MOSTRAR" />
      <div className="flex items-center gap-3 justify-center mt-10">
        <span className="text-[#333]">Tipo:</span>
        <SelectBase options={tipoOptions} className="w-xl" />
      </div>
      <div className="mt-10">
        <TableShowTemplateMaintenance />
      </div>
      <ActionsButton />
    </div>
  );
};

export const Component = PageShowTemplateMaintenance;
