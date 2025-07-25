import { Card } from '@/common/ui/Card'
import { LegalRow } from './LegalRow'



const data = [
  { id: 1, descripcion: 'Proceso Civil', estado: true },
  { id: 2, descripcion: 'Proceso Penal', estado: false },
  { id: 3, descripcion: 'Proceso Laboral', estado: false }
]
export const LegalTable = () => {
  return (

    <Card>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Descripción</th>
            <th className="p-2 border">Activo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <LegalRow
              key={item.id}
              index={index + 1}
              descripcion={item?.descripcion}
              checked={item.estado}
            />
          ))}
        </tbody>
      </table>
    </Card>
  )
}
