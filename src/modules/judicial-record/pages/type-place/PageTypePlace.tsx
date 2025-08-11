import { useState } from 'react';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';
import { ButtonIcon, InputBase, Title } from '@/components/ui';
import { TableTypePlace } from '../../components/tables/tableTypePlace/TableTypePlace';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';

const BranchTypePage = () => {
  const [exchangeRate, setExchangeRate] = useState('3.59');

  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="PLAZA / TIPO" />

        {/* Top Controls */}
        <div className="my-8 flex items-end justify-between gap-4">
          <div className="flex gap-2 justify-center items-center  ">
            <span className="text-primary font-bold">T.C S/.</span>
            <InputBase
              type="number"
              label=""
              value={exchangeRate}
              onChange={e => setExchangeRate(e.target.value)}
              placeholder="0.00"
              color="gray"
              disabled
            />
          </div>

          <div className="flex items-center gap-2 ">
            <ButtonIcon
              title="Exportar Excel"
              icon={<DocumentArrowDownIcon className="w-5 h-5" />}
              iconPosition="left"
              className='bg-green-600 hover:bg-green-700 text-white'
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
        <TableTypePlace />
      </div>
    </div>
  );
};

export const Component = BranchTypePage;
