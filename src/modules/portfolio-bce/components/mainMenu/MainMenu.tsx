import { IMainMenu } from '../../types/mainMenu';

const menu: IMainMenu[] = [
  {
    title: 'FICHA GENERAL',
    items: [
      'Estatus',
      'Tipo de Documento',
      'Tasa de Corte / Tipo de Cambio',
      'Código y Descripción de línea',
    ].map(label => ({ label })),
  },
  {
    title: 'FICHA JUDICIAL',
    items: [
      'Tipo de Proceso',
      'Estatus',
      'Etapa de Juicio',
      'Instancia de Juicio',
      'Tipo de Embargo',
      'Abogados Supervisores',
    ].map(label => ({ label })),
  },
  {
    title: 'FICHA CONCURSAL',
    items: ['Proceso Concursal', 'Abogados Supervisores'].map(label => ({ label })),
  },
  {
    title: 'ADMINISTRACIÓN DE RECUPERACIÓN POR TERCEROS',
    items: ['Entidades Recuperadoras'].map(label => ({ label })),
  },
  {
    title: 'PASE A JUDICIAL',
    items: [
      { label: 'Datos de los Emails', highlighted: true },
      { label: 'Workflow' },
      { label: 'Reemplazo Masivo' },
      { label: 'Asignación Masiva' },
      { label: 'Eliminación Masiva' },
      { label: 'Datos de los Memorándums', highlighted: true },
      { label: 'Workflow' },
      { label: 'Reemplazo Masivo' },
      { label: 'Eliminación Masiva' },
      { label: 'Estudios de Abogados Externos' },
      { label: 'Datos del Servidor' },
      { label: 'Eventos (Origen/Destino)' },
      { label: 'Datos de Garantías Judiciales' },
    ],
  },
  {
    title: 'OTROS',
    items: [{ label: 'Actualización de e-mails de FDN' }],
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
                <li
                  key={idx}
                  className={`text-sm cursor-pointer ${
                    item.highlighted ? 'text-red-600 font-semibold' : 'text-black'
                  } hover:underline`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
