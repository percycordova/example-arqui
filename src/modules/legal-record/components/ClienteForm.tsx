import { Button } from '@/common/ui/Button';



export const ClienteForm = () => {


  return (
    <form className="space-y-4 mt-10">

      <div className='flex gap-4 items-center justify-center'>
        <Button variant="add" type="submit">Editar</Button>
        <Button variant="cancel">Eliminar</Button>
      </div>

    </form>
  )
}
