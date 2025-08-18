import { cn } from '@/utils/cn';

interface TableGenericProps<T> {
  data: T[]; // Arreglo de objetos
  labels?: Partial<Record<keyof T, string>>; // Opcional: etiquetas personalizadas
  className?: string;
}

export const TableGeneric = <T extends Record<string, any>>({
  data,
  labels = {},
  className = '',
}: TableGenericProps<T>) => {
  if (!data || data.length === 0) return <div>No hay datos para mostrar</div>;

  // Usamos las claves del primer objeto para definir las columnas
  const keys = Object.keys(data[0]) as (keyof T)[];

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {keys.map((key) => (
              <th
                key={String(key)}
                className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-300"
              >
                {/* Convertimos a string para acceder al objeto labels */}
                {labels[String(key) as keyof T] ?? String(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {keys.map((key) => (
                <td
                  key={String(key)}
                  className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"
                >
                  {String(row[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
