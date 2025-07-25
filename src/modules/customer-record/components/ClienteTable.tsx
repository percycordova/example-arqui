interface Cliente {
  nombre: string
  tipo: string
  estado: string
}

interface Props {
  clientes: Cliente[]
}

export const ClienteTable = ({ clientes }: Props) => {
  if (clientes.length === 0) {
    return <p className="text-gray-500">No hay clientes registrados.</p>
  }

  return (
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Nombre</th>
          <th className="border px-4 py-2">Tipo</th>
          <th className="border px-4 py-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((c, i) => (
          <tr key={i} className="text-center">
            <td className="border px-4 py-2">{c.nombre}</td>
            <td className="border px-4 py-2">{c.tipo}</td>
            <td className="border px-4 py-2">{c.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
