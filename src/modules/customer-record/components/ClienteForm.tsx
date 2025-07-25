import { Button } from '@/common/ui/Button';
import { useState } from 'react'

interface Props {
  onAddCliente: (cliente: { nombre: string; tipo: string; estado: string }) => void
}

export const ClienteForm = ({ onAddCliente }: Props) => {
  const [form, setForm] = useState({ nombre: '', tipo: '', estado: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddCliente(form)
    setForm({ nombre: '', tipo: '', estado: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="tipo"
        placeholder="Tipo de Cliente"
        value={form.tipo}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={form.estado}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <div className='flex gap-4 items-center justify-center'>
        <Button variant="add" type="submit">Agregar</Button>
        <Button variant="cancel">Cancelar</Button>
      </div>

    </form>
  )
}
