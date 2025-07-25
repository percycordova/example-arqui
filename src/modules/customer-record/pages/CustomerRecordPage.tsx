import { useState } from 'react'
import { ClienteForm } from '../components/ClienteForm'
import { ClienteTable } from '../components/ClienteTable'
import { Card } from '@/common/ui/Card'

interface Cliente {
  nombre: string
  tipo: string
  estado: string
}

const CustomerRecordPage = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])

  const handleAddCliente = (cliente: Cliente) => {
    setClientes((prev) => [...prev, cliente])
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Ficha General</h1>

      <Card>
        <ClienteForm onAddCliente={handleAddCliente} />
      </Card>

      <Card>
        <ClienteTable clientes={clientes} />
      </Card>
    </div>
  )
}

export default CustomerRecordPage