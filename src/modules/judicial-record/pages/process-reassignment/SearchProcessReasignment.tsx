import { useState } from 'react';
import { ButtonIcon, InputBase, Title } from '@/components/ui';
import { TableTypePlace } from '../../components/tables/tableTypePlace/TableTypePlace';
import {
  DocumentArrowDownIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  PrinterIcon,
} from '@heroicons/react/24/outline';
import { TableSearchClient } from '../../components/tables/tableSearchClient/TableSearchClient';

const SearchProcessReasignment = () => {
  const [exchangeName, setExchangeName] = useState('');
  const [exchangeCode, setExchangeCode] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleSearchClick = () => {
    setShowTable(true); 
  };

  const handleClearClick = () => {
    setExchangeName('');
    setExchangeCode('');
    setShowTable(false);
  };

  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="REASIGNACIÓN DE PROCESOS" />

        <div className="my-8 flex items-end justify-between gap-4">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-primary font-bold">Nombre: </span>
            <InputBase
              type="text"
              label=""
              value={exchangeName}
              onChange={e => setExchangeName(e.target.value)}
              placeholder="SCOMBRO"
              color="gray"
            />
          </div>

          <div className="flex items-center gap-2">
            <ButtonIcon
              title="Buscar"
              icon={<MagnifyingGlassIcon className="w-5 h-5" />}
              iconPosition="left"
              onClick={handleSearchClick}
              className="bg-green-600 hover:bg-green-700 text-white"
            />
            <ButtonIcon
              title="Limpiar"
              color="blue"
              icon={<PaintBrushIcon className="w-5 h-5" />}
              iconPosition="left"
              onClick={handleClearClick}
            />
          </div>
        </div>

        <div className="my-8 flex items-end justify-between gap-4">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-primary font-bold mr-2">Código:</span>
            <InputBase
              type="text"
              label=""
              value={exchangeCode}
              onChange={e => setExchangeCode(e.target.value)}
              placeholder="S32"
              color="gray"
            />
          </div>
        </div>

        {showTable && (
          <div className="my-8">
            <TableSearchClient /> 
          </div>
        )}
      </div>
    </div>
  );
};

export const Component = SearchProcessReasignment;
