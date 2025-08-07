import { Link } from 'react-router-dom';
import { IMainMenu } from '../../types/mainMenu';
const menu: IMainMenu[] = [
  {
    title: 'FICHA GENERAL',
    items: [
      { label: 'Estatus', url: '/bce/ficha-general/estatus' },
      { label: 'Tipo de Documento', url: '/bce/ficha-general/tipo-documento' },
      { label: 'Tasa de Corte / Tipo de Cambio', url: '/bce/ficha-general/tasa-corte-cambio' },
      {
        label: 'Código y Descripción de línea',
        url: '/bce/ficha-general/codigo-descripcion-linea',
      },
    ],
  },
  {
    title: 'FICHA JUDICIAL',
    items: [
      { label: 'Tipo de Proceso', url: '/bce/ficha-judicial/tipo-proceso' },
      { label: 'Estatus', url: '/bce/ficha-judicial/estatus' },
      { label: 'Etapa de Juicio', url: '/bce/ficha-judicial/etapa-juicio' },
      { label: 'Instancia de Juicio', url: '/bce/ficha-judicial/instancia-juicio' },
      { label: 'Tipo de Embargo', url: '/bce/ficha-judicial/tipo-embargo' },
      { label: 'Abogados Supervisores', url: '/bce/ficha-judicial/abogados-supervisores' },
    ],
  },
  {
    title: 'FICHA CONCURSAL',
    items: [
      { label: 'Proceso Concursal', url: '/bce/ficha-concursal/proceso-concursal' },
      { label: 'Abogados Supervisores', url: '/bce/ficha-concursal/abogados-supervisores' },
    ],
  },
  {
    title: 'ADMINISTRACIÓN DE RECUPERACIÓN POR TERCEROS',
    items: [{ label: 'Entidades Recuperadoras', url: '/bce/recuperacion/entidades' }],
  },
  {
    title: 'PASE A JUDICIAL',
    items: [
      { label: 'Datos de los Emails', url: '/bce/pase-a-judicial/emails', highlighted: true },
      { label: 'Workflow', url: '/bce/pase-a-judicial/workflow' },
      { label: 'Reemplazo Masivo', url: '/bce/pase-a-judicial/reemplazo' },
      { label: 'Asignación Masiva', url: '/bce/pase-a-judicial/asignacion' },
      { label: 'Eliminación Masiva', url: '/bce/pase-a-judicial/eliminacion' },
      {
        label: 'Datos de los Memorándums',
        url: '/bce/pase-a-judicial/memorandum',
        highlighted: true,
      },
      { label: 'Workflow', url: '/bce/pase-a-judicial/memorandum/workflow' },
      { label: 'Reemplazo Masivo', url: '/bce/pase-a-judicial/memorandum/reemplazo' },
      { label: 'Eliminación Masiva', url: '/bce/pase-a-judicial/memorandum/eliminacion' },
      { label: 'Estudios de Abogados Externos', url: '/bce/pase-a-judicial/abogados-externos' },
      { label: 'Datos del Servidor', url: '/bce/pase-a-judicial/servidor' },
      { label: 'Eventos (Origen/Destino)', url: '/bce/pase-a-judicial/eventos' },
      { label: 'Datos de Garantías Judiciales', url: '/bce/pase-a-judicial/garantias' },
    ],
  },
  {
    title: 'OTROS',
    items: [{ label: 'Actualización de e-mails de FDN', url: '/bce/otros/actualizar-fdn' }],
  },
];

export const MainMenu = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-8 items-start justify-center">
        {menu.map((section, index) => (
          <div key={index}>
            <h3 className="text-red-700 font-bold uppercase text-sm mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.url}
                    className={`block text-sm ${
                      item.highlighted ? 'text-red-600 font-semibold' : 'text-black'
                    } hover:underline`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
