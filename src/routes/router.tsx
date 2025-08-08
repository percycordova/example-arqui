import AppLayout from '@/layouts/AppLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      /* Rutas generales */
      { path: '/', lazy: () => import('@/pages/home/HomePage') },
      {
        path: '*',
        lazy: () => import('@/pages/notFound/NotFoundPage'),
      },
      /* Rutas para el módulo BCE */
      {
        path: '/bce/parametros',
        lazy: () => import('@/modules/portfolio-bce/pages/home/BCEHomePage'),
      },
      /* Rutas para el módulo BCE/FICHA-GENERAL */
      {
        path: '/bce/ficha-general/estatus',
        lazy: () => import('@/modules/portfolio-bce/pages/general-record/PageStatus'),
      },
      {
        path: '/bce/ficha-general/tipo-documento',
        lazy: () => import('@/modules/portfolio-bce/pages/general-record/PageDocType'),
      },
      /* Rutas para el módulo FICHA RESUMEN */
      {
        path: '/ficha/otros',
        lazy: () => import('@/modules/judicial-record/pages/PageSummary'),
      },
      {
        path: '/ficha/otros/2',
        lazy: () => import('@/modules/judicial-record/pages/PageSumary2'),
      },
    ],
  },
]);
