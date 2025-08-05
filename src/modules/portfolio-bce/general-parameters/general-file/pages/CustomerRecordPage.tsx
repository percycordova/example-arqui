import { useState } from "react";
import TableCrud from "@/components/ui/TableCrud";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";


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
  const [ , setDescripcion] = useState("");

  return (
    <div className="px-6">
      <h1 className="flex justify-end text-2xl font-bold mb-4">Ficha General</h1>

      <TableCrud
        headers={["Nombre", "Tipo", "Estado"]}
        data={dataReference.map((c) => [c.nombre, c.tipo, c.estado])}
        onEdit={(index) => console.log("Editar cliente:", dataReference[index])}
        onDelete={(index) =>
          console.log("Eliminar cliente:", dataReference[index])
        }
      />

      <InputField description="Descripción:" onValueChange={setDescripcion} />

      <div className="flex justify-end">
        <Button
          text="Agregar"
          onClick={() => alert("Agregado")}
          color="green"

        />
      </div>

    </div>
  );
};

export default CustomerRecordPage;
