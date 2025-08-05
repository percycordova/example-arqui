import { Typography } from '@/components/ui';
import { Navbar } from '../navbar/NavBar';
import { NavItem } from '../navbar/types';

const menuData: NavItem[] = [
  {
    title: 'Cartera en BCE',
    subItems: [{ label: 'Parámetros Generales', path: '/bce/parametros' }],
  },
  {
    title: 'Ficha Judicial',
    subItems: [
      { label: 'Plaza / Tipo', path: '/ficha/plaza' },
      { label: 'Supervisor', path: '/ficha/supervisor' },
      { label: 'Estudio Externo', path: '/ficha/estudio' },
      { label: 'Clientes', path: '/ficha/clientes' },
      { label: 'Calificación y Asignación de Procesos', path: '/ficha/calificacion' },
      { label: 'Reasignación de Procesos', path: '/ficha/reasignacion' },
      { label: 'Otros', path: '/ficha/otros' },
    ],
  },
  {
    title: 'Ficha Concursal',
    subItems: [{ label: 'Generador de Reportes', path: '/concursal/reportes' }],
  },
];
export const Header = () => {
  return (
    <header className="bg-primary shadow">
      <div className="flex items-center justify-between  text-white  max-w-7xl mx-auto">
        <Typography variant="title" as="h1" className="text-white cursor-pointer">
          SCOTIABANK
        </Typography>
        <Navbar items={menuData} />
      </div>
    </header>
  );
};
