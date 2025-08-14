import { Title } from '@/components/ui';
import { ActionsButton } from '@/modules/management-support/components/actionsButton/ActionsButton';
import { TableEntryValues } from '@/modules/management-support/components/tables/tableEntryValues/TableEntryValues';
import { TableExecute } from '@/modules/management-support/components/tables/tableExecuteTemplateMaintenance/TableExcute';

const PageExecuteTemplateMaintenance = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 mb-20">
      <Title text="EJECUCIÓN DE PLANILLA" />

      <div className="my-10">
        <TableExecute />
      </div>
      <Title text="INGRESO DE VALORES FILTROS" />
      <div className="my-10">
        <TableEntryValues />
      </div>
      <ActionsButton />
    </div>
  );
};

export const Component = PageExecuteTemplateMaintenance;
