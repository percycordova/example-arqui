'use client';
import * as yup from 'yup';
import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper'; // Importa tu FormProviderWrapper
import { RHFSelect } from '@/components/forms/rhfSelect/RHFSelect';
import { InputBase } from '@/components/ui/inputBase/InputBase';
import { Title } from '@/components/ui/title/Title';
import { useState } from 'react';
import { RHFInput } from '@/components/forms';
const schema = yup.object({
  codigoBT: yup.string().required('Código BT es obligatorio'),
});
type FormValues = yup.InferType<typeof schema>;
const ReasignmentClient = () => {
  const schema = yup.object({
    abogadoSupervisor: yup.string().required('Este campo es obligatorio'),
  });
  const [cliente, setCliente] = useState('');
  const [numeroReferencia, setNumeroReferencia] = useState('');
  const [abogadoSupervisor, setAbogadoSupervisor] = useState('');
  const [estudioAbogados, setEstudioAbogados] = useState('');
  const abogadosSuperiores = ['—', 'Ab. Juan Pérez', 'Ab. María López', 'Ab. Carlos Díaz'];
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const defaultValues: FormValues = {
    codigoBT: '',
  };

  return (
    <FormProviderWrapper schema={schema} onSubmit={onSubmit}>
      <div className="min-h-screen bg-white mb-10">
        <div className="mx-auto max-w-7xl px-4 py-6 space-y-5">
          <Title text="REASIGNACIÓN DE PROCESOS" />

          <div className="border p-6 rounded-lg space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <RHFInput name="codigo" label="Código BT: " />
              <InputBase
                label="Número de Referencia"
                color="primary"
                value={numeroReferencia}
                onChange={e => setNumeroReferencia(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <InputBase
                label="Cliente"
                color="primary"
                value={cliente}
                onChange={e => setCliente(e.target.value)}
              />
            </div>
          </div>

          <div className="border p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Datos Actuales:</h3>

            <div>
              <p className="font-medium">Abogado Supervisor:</p>
              <p className="text-gray-700">{abogadoSupervisor || 'KATHERINE ESPINOZA GOMEZ'}</p>
            </div>
            <div>
              <p className="font-medium">Estudio de Abogados:</p>
              <p className="text-gray-700">
                {estudioAbogados || 'ESTUDIO RODRIGUEZ ANGOBALDO & ABOGADOS ASOCIADOS'}
              </p>
            </div>
          </div>

          <div className="border p-6 rounded-lg space-y-4">
            <RHFSelect
              name="abogadoSupervisor"
              label="Abogado Supervisor: "
              options={abogadosSuperiores.map(a => ({ label: a, value: a }))}
            />

            <RHFSelect
              name="abogadoSupervisor"
              label="Estudio de Abogados: "
              options={abogadosSuperiores.map(a => ({ label: a, value: a }))}
            />
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
          >
            Grabar
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 transition"

          >
            Limpiar
          </button>
        </div>
      </div>
    </FormProviderWrapper>
  );
};

export const Component = ReasignmentClient;
