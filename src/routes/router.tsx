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

      /*  */
      {
        path:'/cartera-judicial/clientes',
        lazy: () => import('@/modules/common/pages/navigation/Nav'),
      },

      /* Rutas para la cartera judicial*/

      /* Plaza/Tipo */
      {
        path: '/cartera-judicial/plaza-tipo',
        lazy: () => import('@/modules/judicial-record/pages/type-place/PageTypePlace'),
      },
      {
        path: '/cartera-judicial/plaza-tipo/:plaza',
        lazy: () =>
          import('@/modules/judicial-record/pages/type-place/internal/PageInternalTypePlace'),
      },

      /* Supervisor */
      {
        path: '/cartera-judicial/supervisor',
        lazy: () => import('@/modules/judicial-record/pages/supervisor/PageSupervisor'),
      },
      {
        path: '/cartera-judicial/supervisor/:name',
        lazy: () =>
          import('@/modules/judicial-record/pages/supervisor/interna/PageSupervisorInternal'),
      },

      /* Estudio Externo - Estudio Externo */
      {
        path: '/cartera-judicial/external-study/external-study'

      },

      /* Estudio Externo - Recepción de Archivos */
      {
        path: '/cartera-judicial/estudio-externo/recepcion-archivos',
        lazy: () => import('@/modules/judicial-record/pages/external-study/file-reception/PageFileReception'),
      },

      /* Clientes */

      /* Calificación y Asignación de Procesos */

      {
        path: '/cartera-judicial/asignacion-procesos',
        lazy: () =>
          import('@/modules/judicial-record/pages/process-qualification/PageProcessQualification'),
      },
      {
        path: '/cartera-judicial/asignacion-procesos/clientes/:name',
        lazy: () =>
          import('@/modules/judicial-record/pages/process-qualification/PageClientInternal'),
      },

      /* Reasignación de Procesos */
      {
        path: '/cartera-judicial/reasignacion-procesos',
        lazy: () =>
          import('@/modules/judicial-record/pages/process-reassignment/SearchProcessReasignment'),
      },

      {
        path: '/cartera-judicial/reasignacion-procesos/reasignar-cliente',
        lazy: () =>
          import('@/modules/judicial-record/pages/process-reassignment/ReasignmentClient'),
      },

      /* Otros - Reporte de Pase a Judicial */
      {
        path: '/cartera-judicial/otros/reporte-pase-judicial',
        lazy: () =>
          import(
            '@/modules/judicial-record/pages/others/report-transfer-judicial/PageReportTransferJudicial'
          ),
      },

      {
        path: '/cartera-judicial/otros/reporte-pase-judicial/detalle',
        lazy: () => import('@/modules/judicial-record/pages/others/report-transfer-judicial/PageDetailReportTransferJudicial'),
      },

      /* Otros - Reasignación de Abogados Supervisores */
      {
        path: '/cartera-judicial/otros/reasignacion-abogados-supervisores',
        lazy: () => import('@/modules/judicial-record/pages/others/reassignment-supervising-attorneys/PageSearchSupervisingAttorneys')
      },

      /*----------------------------------------Módulo soporte gestión-------------------------------------*/
      {
        path: '/soporte-gestion/generador-reportes',
        lazy: () =>
          import('@/modules/management-support/pages/templateMaintenance/PageTemplateMaintenance'),
      },
      {
        path: '/soporte-gestion/generador-reportes/mostrar',
        lazy: () =>
          import('@/modules/management-support/pages/templateMaintenanceActions/show/PageShow'),
      },
      {
        path: '/soporte-gestion/generador-reportes/ejecutar',
        lazy: () =>
          import(
            '@/modules/management-support/pages/templateMaintenanceActions/execute/PageExecute'
          ),
      },
      {
        path: '/soporte-gestion/generador-reportes/editar',
        lazy: () =>
          import('@/modules/management-support/pages/templateMaintenanceActions/edit/PageEdit'),
      },

      /*----------------------------------------Ficha-------------------------------------*/
      {
        path: '/ficha',
        lazy: () => import('@/modules/judicial-record/pages/file/PageFile'),
      },
    ],
  },
]);
