import { useState } from "react";
import TableCrud from "@/common/ui/TableCrud";
import InputField from "@/common/ui/InputField";
import Button from "@/common/ui/Button";
import { IoAddCircleOutline } from "react-icons/io5";

interface Cliente {
  nombre: string;
  tipo: string;
  estado: string;
}

const dataReference: Cliente[] = [
  { nombre: "Juan Pérez", tipo: "VIP", estado: "Activo" },
  { nombre: "María López", tipo: "Regular", estado: "Inactivo" },
];

const CustomerRecordPage = () => {
  const [clientes, setClientes] = useState<Cliente[]>(dataReference);
  const [description, setDescripcion] = useState("");

  return (
    <div className="px-6">
      <h1 className="flex justify-end text-2xl font-bold mb-4">Ficha General</h1>

      <TableCrud
        headers={["Nombre", "Tipo", "Estado"]}
        data={clientes.map((c) => [c.nombre, c.tipo, c.estado])}
        onEdit={(index) => console.log("Editar cliente:", clientes[index])}
        onDelete={(index) =>
          setClientes((prev) => prev.filter((_, i) => i !== index))
        }
      />
      
      <InputField description="Descripción:" onValueChange={setDescripcion} />
      
      <div className="flex justify-end">
        <Button
          text="Agregar"
          onClick={() => alert("Agregado")}
          color="green"
          icon={IoAddCircleOutline}
        />
      </div>

    </div>
  );
};

export default CustomerRecordPage;
