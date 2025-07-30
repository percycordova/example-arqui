import { ReactNode } from "react";

type TableCrudProps = {
  columns: number;
  headers: string[];
  data: (string | number | ReactNode)[][];
  onRowClick?: (rowIndex: number) => void;
};

const TableCrud = ({
  columns,
  headers,
  data,
  onRowClick,
}: TableCrudProps) => {
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
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 cursor-pointer`}
              onClick={() => onRowClick?.(rowIndex)}
            >
              {row.slice(0, columns).map((cell, colIndex) => (
                <td key={colIndex} className="border px-3 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCrud;
