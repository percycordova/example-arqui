import { useState } from 'react';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';
import { InputBase, Title } from '@/components/ui';
import { TableTypePlace } from '../../components/tables/tableTypePlace/TableTypePlace';

const BranchTypePage = () => {
  const [exchangeRate, setExchangeRate] = useState('3.59');

  return (
    <div className="min-h-screen bg-white">
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
            <ButtonBase title="Export Excel" onClick={() => console.log('Export to Excel')} />
            <ButtonBase title="Print" onClick={() => console.log('Print')} />
          </div>
        </div>

        {/* Table */}
        <TableTypePlace />
      </div>
    </div>
  );
};

export const Component = BranchTypePage;
