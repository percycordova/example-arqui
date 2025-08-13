import { useState } from 'react';
import { ButtonIcon, InputBase, Title } from '@/components/ui';
import { DocumentArrowDownIcon, PaintBrushIcon, PrinterIcon, TrashIcon } from '@heroicons/react/24/outline';
import { TableSupervisingAttorneys } from '@/modules/judicial-record/components/tables/tableSupervisingAttorneys/TableSupervisingAttorneys';

const PageReportTransferJudicial = () => {
  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="PASE A JUDICIAL" />
        <div className="my-8 flex items-end justify-end gap-4">
          <div className="flex items-center gap-2">
            <ButtonIcon title="Exp. Excel" color="green" icon={<DocumentArrowDownIcon />} />
            <ButtonIcon title="Imprimir" color="red" icon={<PrinterIcon />} />
          </div>
        </div>
        <div className="my-8">
          <TableSupervisingAttorneys />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="font-bold">Total de pases iniciados: </p>
            <p className="text-gray-700">6070</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Total de expedientes internos: </p>
            <p className="text-gray-700">5692</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Fecha de envío de expedientes </p>
            <p className="text-gray-700">12/08/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Component = PageReportTransferJudicial;
