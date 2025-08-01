

type TableCrudProps = {
  headers: string[];
  data: (string | number)[][];
  onRowClick?: (rowIndex: number) => void;
  onEdit?: (rowIndex: number) => void;
  onDelete?: (rowIndex: number) => void;
};

const TableCrud = ({
  headers,
  data,
  onRowClick,
  onEdit,
  onDelete,
}: TableCrudProps) => {
  const columns = headers.length;
  return (
    <div className="overflow-auto border rounded mb-4">
      <table className="w-full text-sm text-center border-collapse">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-3 py-2">
                {header}
              </th>
            ))}
            <th className="border px-3 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
              onClick={() => onRowClick?.(rowIndex)}
            >
              {row.slice(0, columns).map((cell, colIndex) => (
                <td key={colIndex} className="border px-3 py-2">
                  {cell}
                </td>
              ))}
              <td className="border justify-center">
                <button
                  className="text-blue-800 px-2 cursor-pointer text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.(rowIndex);
                  }}
                >
                
                </button>
                <button
                  className="text-red-600 px-2 cursor-pointer text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.(rowIndex);
                  }}
                >
                
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCrud;
