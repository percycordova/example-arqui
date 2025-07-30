import { useState } from "react";
import TableCrud from "@/common/ui/TableCrud";
import InputField from "@/common/ui/InputField";
import Button from "@/common/ui/Button";
import { IoAddCircleOutline } from "react-icons/io5";

interface Cliente {
  codigo: number;
  descripcion: string;
  cartera: string;
}

const dataReference: Cliente[] = [
  { codigo: 1, descripcion: "Prueba 1", cartera: "Activo" },
  { codigo: 2, descripcion: "Prueba 2", cartera: "Inactivo" },
];

const LegalRecordPage = () => {
  const [clientes, setClientes] = useState<Cliente[]>(dataReference);
  const [codigo, setCodigo] = useState("");
  const [description, setDescripcion] = useState("");
  
  return (
    <div className="px-6">
      <h1 className="flex justify-end text-2xl font-bold mb-4">Ficha Judicial</h1>

      <TableCrud
        headers={["Código", "Descripción", "Tipo de cartera"]}
        data={clientes.map((c) => [c.codigo, c.descripcion, c.cartera])}
        onEdit={(index) => console.log("Editar cliente:", clientes[index])}
        onDelete={(index) =>
          setClientes((prev) => prev.filter((_, i) => i !== index))
        }
      />
      <InputField description="Código:" onValueChange={setCodigo} />
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

export default LegalRecordPage;
