import { TabFolder } from "@/components/ui/tabFolder/tabFolder";


const ResumeClient = () => {
  return (
    <TabFolder tabs={['Ficha del Cliente', 'Ficha Judicial', 'Ficha Concursal']}>
      <div>Contenido de la pestaña General</div>
      <div>Contenido de la pestaña Detalles</div>
      <div>Contenido de la pestaña Configuración</div>
    </TabFolder>
  );
};


export const Component = ResumeClient;
