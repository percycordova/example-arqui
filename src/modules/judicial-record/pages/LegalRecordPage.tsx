import { useState } from "react";
import TableCrud from "@/components/ui/TableCrud";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";


interface Cliente {
  codigo: number;
  descripcion: string;
  cartera: string;
}

const dataReference: Cliente[] = [
  { codigo: 1, descripcion: "Prueba 1", cartera: "Activo" },
  { codigo: 2, descripcion: "Prueba 2", cartera: "Inactivo" },
  { codigo: 3, descripcion: "Prueba 3", cartera: "Activo" },
  { codigo: 4, descripcion: "Prueba 4", cartera: "Activo" },
  { codigo: 5, descripcion: "Prueba 5", cartera: "Activo" },
];

const LegalRecordPage = () => {
  const [codigo, setCodigo] = useState("");
  const [description, setDescripcion] = useState("");
  return (
    <div className="px-6">
      <h1 className="flex justify-end text-2xl font-bold mb-4">Ficha Judicial</h1>

      <TableCrud
        headers={["Numero", "Descripción", "Tipo de cartera"]}
        data={dataReference.map((c) => [c.codigo, c.descripcion, c.cartera])}
        onEdit={(index) => console.log("Editar cliente:", dataReference[index])}
        onDelete={(index) =>
          console.log("Eliminar cliente:", dataReference[index])
        }
      />
      <InputField description="Código:" onValueChange={setCodigo} />
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

export default LegalRecordPage;
