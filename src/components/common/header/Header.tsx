import { BackButton, Typography } from '@/components/ui';
import { NavItem } from '../navbar/types';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../navbar/NavBar';
import { HomeButton } from '@/components/ui/homeButton/HomeButton';

const menuData: NavItem[] = [
  {
    title: 'Cartera en Judicial',
    subItems: [
      { label: 'Plaza / Tipo', path: '/cartera-judicial/plaza-tipo' },
      { label: 'Supervisor', path: '/cartera-judicial/supervisor' },
      {
        label: 'Estudio Externo',
        subItems: [
          { label: 'Estudio Externo', path: '/cartera-judicial/estudio-externo/estudio-externo' },
          { label: 'Recepción Archivos', path: '/cartera-judicial/estudio-externo/recepcion-archivos' },
        ],
      },
      { label: 'Clientes', path: '/cartera-judicial/clientes' },
      { label: 'Calificación y Asignación de Procesos', path: '/cartera-judicial/asignacion-procesos' },
      { label: 'Reasignación de Procesos', path: '/cartera-judicial/reasignacion-procesos' },
      {
        label: 'Otros',
        subItems: [
          {
            label: 'Reporte de Pase a Judicial',
            path: '/cartera-judicial/otros/reporte-pase-judicial',
          },
          {
            label: 'Reasignación de Abogados Supervisores',
            path: '/cartera-judicial/otros/reasignacion-abogados-supervisores',
          },
        ],
      },
    ],
  },
  {
    title: 'Soporte de Gestión',
    subItems: [{ label: 'Generador de Reportes', path: '/soporte-gestion/generador-reportes' }],
  },
];

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-primary shadow sticky top-0 z-50">
        <div className="flex items-center justify-between  text-white  max-w-7xl mx-auto">
          <Typography
            variant="title"
            as="h1"
            className="text-white cursor-pointer"
            onClick={() => navigate('/')}
          >
            SCOTIABANK
          </Typography>
          <Navbar items={menuData} />
        </div>
      </nav>
      <div className="flex items-center justify-between mt-4 max-w-7xl mx-auto ">
        <BackButton />
        <HomeButton />
      </div>
    </>
  );
};
