import { ButtonIcon, Title } from '@/components/ui';
import { DocumentArrowDownIcon, PrinterIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { TableSupervisorInternal } from '@/modules/judicial-record/components/tables/tableSupervisorInternal/TableSupervisorInternal';

function unslugifyToUpper(slug: string) {
  // viene como "carolyn-ortega-ramirez" o con %20
  const plain = decodeURIComponent(slug).replace(/[-_]+/g, ' ').trim();
  return plain.toUpperCase();
}
const PageSupervisorInternal = () => {
  const { name = '' } = useParams(); // /cartera-judicial/supervisor/:name
  const title = `SUPERVISOR: ${unslugifyToUpper(name)}`;

  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text={title} />

        {/* Top Controls */}
        <div className="my-8 flex items-end justify-end gap-4">
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
        <TableSupervisorInternal />
      </div>
    </div>
  );
};

export const Component = PageSupervisorInternal;
