
import { TabClassification } from '../../components/tabsProcessQualification/TabClassification';
import { Title } from '@/components/ui';
import { Tabs } from '@/components/common';
import { Tab } from '@/components/common/tabs/Tabs';

const PageClientInternal = () => {
  const data: Tab[] = [
    {
      index: 1,
      label: 'Calificación',
      component: <TabClassification />,
    },
    {
      index: 2,
      label: 'Asignación de Procesos',
      component: <TabClassification />,
    },
  ];
  return (
    <div>
      <Title text="CALIFICACIÓN Y ASIGNACIÓN DE PROCESOS" />
      <div className='mt-8'>
        <Tabs tabs={data} />
      </div>
    </div>
  );
};

export const Component = PageClientInternal;
