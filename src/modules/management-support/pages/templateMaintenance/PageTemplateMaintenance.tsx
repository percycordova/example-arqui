import { SelectBase, Title } from '@/components/ui';
import { TableTemplateMaintenance } from '../../components/tables/tableTemplateMaintenance/TableTemplateMaintenance';
import { ActionsButton } from '../../components/actionsButton/ActionsButton';
import { useNavigate } from 'react-router-dom';

const tipoOptions = [
  { label: 'Todos', value: '' },
  { label: 'Plantillas', value: 'PLANTILLA' },
  { label: 'Cartas', value: 'CARTA' },
  { label: 'Contratos', value: 'CONTRATO' },
  { label: 'Memorandos', value: 'MEMORANDO' },
  { label: 'Oficios', value: 'OFICIO' },
];

const PageTemplateMaintenance = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 mb-20">
      <Title text="MANTENIMIENTO DE PLANTILLAS" />
      <div className="flex items-center gap-3 justify-center mt-10">
        <span className="text-[#333]">Tipo:</span>
        <SelectBase options={tipoOptions} className="w-xl" />
      </div>
      <div className="mt-10">
        <TableTemplateMaintenance />
      </div>
      <ActionsButton
        handleShow={() => navigate('/soporte-gestion/generador-reportes/mostrar')}
        handleExecute={() => navigate('/soporte-gestion/generador-reportes/ejecutar')}
        handleEdit={() => navigate('/soporte-gestion/generador-reportes/editar')}
      />
    </div>
  );
};

export const Component = PageTemplateMaintenance;
