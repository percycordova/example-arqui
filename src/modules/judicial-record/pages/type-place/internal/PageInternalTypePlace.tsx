import { Title } from '@/components/ui';
import { TableLegalCases } from '@/modules/judicial-record/components/tables/tableLegalBases/TableLegalCases';
import { useParams } from 'react-router-dom';

const PageInternalTypePlace = () => {
  const { plaza } = useParams<{ plaza: string }>();
  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl mt-8 ">
        <Title text={`PLAZA: ${plaza?.toUpperCase()}`} />

        {/* Table */}
        <div className="mt-8">
          <TableLegalCases />
        </div>
      </div>
    </div>
  );
};

export const Component = PageInternalTypePlace;
