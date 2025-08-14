import { useState } from 'react';
import { ButtonIcon, InputBase, SelectBase, Title } from '@/components/ui';
import { MagnifyingGlassIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { TableReasignmentSupervising } from '@/modules/judicial-record/components/tables/tableReasignmentSupervising/TableReasignmentSupervising';
const options = [
  { label: 'Opción 1', value: 'opcion1' },
  { label: 'Opción 2', value: 'opcion2' },
  { label: 'Opción 3', value: 'opcion3' },
];

const PageSearchSupervisingAttorneys = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const [showTable, setShowTable] = useState(false);

  const handleSearchClick = () => {
    setShowTable(true);
  };

  const handleClearClick = () => {
    setShowTable(false);
  };

  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="REASIGNACIÓN DE PROCESOS" />
        <div className="flex gap-6 my-6">
          <SelectBase
            options={options}
            color="gray"
            value={selectedValue}
            onChange={handleSelectChange}
            defaultMessage="-- Seleccione la materia --"
          />
          <SelectBase
            options={options}
            color="gray"
            value={selectedValue}
            onChange={handleSelectChange}
            defaultMessage="-- Seleccione un Abogado Interno --"
          />
          <ButtonIcon
            title="Buscar"
            color="red"
            icon={<MagnifyingGlassIcon />}
            onClick={handleSearchClick}
          />
        </div>

        {showTable && (
          <div className="my-8">
            <div className='flex gap-2 items-center'>
              <p className="font-bold mb-6 ml-1">Abogado Interno: </p>
              <p className=" mb-6 ml-1">CAROLYN ORTEGA RAMIREZ </p>
            </div>

            <TableReasignmentSupervising />
          </div>
        )}
      </div>
    </div>
  );
};

export const Component = PageSearchSupervisingAttorneys;
