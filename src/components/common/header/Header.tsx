import { BackButton, Typography } from '@/components/ui';
import { NavItem } from '../navbar/types';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../navbar/NavBar';
import { HomeButton } from '@/components/ui/homeButton/HomeButton';

const menuData: NavItem[] = [
  {
    title: 'Ficha Judicial',
    subItems: [
      { label: 'Plaza / Tipo', path: '/ficha-judicial/plaza-tipo' },
      { label: 'Supervisor', path: '/ficha/supervisor' },
      {
        label: 'Estudio Externo',
        subItems: [
          { label: 'Estudio Externo', path: '/ficha-judicial/estudio-externo' },
          { label: 'Recepción Archivos', path: '/ficha-judicial/recepcion' },
        ],
      },
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
