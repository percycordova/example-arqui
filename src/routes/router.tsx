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

      /* Rutas para la cartera judicial*/

      /* Plaza/Tipo */
      {
        path: '/cartera-judicial/plaza-tipo',
        lazy: () => import('@/modules/judicial-record/pages/type-place/PageTypePlace'),
      },
      {
        path: '/cartera-judicial/plaza-tipo:plaza',
        lazy: () =>
          import('@/modules/judicial-record/pages/type-place/internal/PageInternalTypePlace'),
      },

      /* Supervisor */
      /* Estudio Externo - Estudio Externo */
      
      /* Estudio Externo - Recepción de Archivos */
      {
        path: '/cartera-judicial/recepcion-archivos',
        lazy: () => import('@/modules/judicial-record/pages/external-study/file-reception/PageFileReception'),
      },

      /* Clientes */
      /* Calificación y Asignación de Procesos */

      /* Reasignación de Procesos */
      {
        path: '/cartera-judicial/reasignacion-procesos',
        lazy: () => import('@/modules/judicial-record/pages/process-reassignment/SearchProcessReasignment'),
      },

      {
        path: '/cartera-judicial/reasignacion-procesos/reasignar-cliente',
        lazy: () => import('@/modules/judicial-record/pages/process-reassignment/ReasignmentClient'),
      },

      /* Otros - Reporte de Pase a Judicial */
      {
        path: '/cartera-judicial/otros/reporte-pase-judicial',
        lazy: () => import('@/modules/judicial-record/pages/others/report-transfer-judicial/PageReportTransferJudicial'),
      },
      
      {
        path: '/cartera-judicial/otros/reporte-pase-judicial/detalle',
        lazy: () => import('@/modules/judicial-record/pages/others/report-transfer-judicial/PageDetailReportTransferJudicial'),
      },

      /* Otros - Reasignación de Abogados Supervisores */
      {
        path: '/cartera-judicial/otros/reasignacion-abogados-supervisores',
        lazy: () => import('@/modules/judicial-record/pages/others/reassignment-supervising-attorneys/PageSearchSupervisingAttorneys')
      }



      
    ],
  },
]);
