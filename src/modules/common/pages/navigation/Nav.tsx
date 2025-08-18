import { TabFolder } from "@/components/ui/tabFolder/tabFolder";

const Nav = () => {
  return (
    <TabFolder tabs={['Ficha del Cliente', 'Ficha Judicial', 'Ficha Concursal']}>
      
      <div>Contenido de la pestaña Detalles</div>
      <div>Contenido de la pestaña Configuración</div>
    </TabFolder>
  );
};


export const Component = Nav;
