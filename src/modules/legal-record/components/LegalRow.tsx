import { Button } from "@/common/ui/Button"

interface LegalRowProps {
  index: number
  descripcion: string
  checked: boolean
}

export const LegalRow = ({ index, descripcion, checked }: LegalRowProps) => {
  return (
    <tr>
      <td className="p-2 border text-center">{index}</td>
      <td className="p-2 border">{descripcion}</td>
      <td className="p-2 border text-center">
        <input type="checkbox" checked={checked} readOnly />
        {/* <Button variant="add">
          Editar
        </Button> */}
      </td>
    </tr>
  )
}
