'use client';
import * as yup from 'yup';
import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper'; // Importa tu FormProviderWrapper
import { RHFSelect } from '@/components/forms/rhfSelect/RHFSelect';
import { Title } from '@/components/ui/text/Title';
import { RHFInput } from '@/components/forms';
import { ButtonIcon } from '@/components/ui/buttonBase/ButtonIcon';
import DocumentArrowDownIcon from '@heroicons/react/24/outline/DocumentArrowDownIcon';
import { PaintBrushIcon } from '@heroicons/react/24/outline';

const schema = yup.object({
  codigoBT: yup.string().required('Código BT es obligatorio'),
  numRef: yup.string().required('El número de referencia es obligatorio'),
  cliente: yup.string().required('El cliente es obligatorio'),
});
type FormValues = yup.InferType<typeof schema>;
const abogadosSuperiores = ['—', 'Ab. Juan Pérez', 'Ab. María López', 'Ab. Carlos Díaz'];

const ReasignmentClient = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const defaultValues: FormValues = {
    codigoBT: '',
    numRef: '',
    cliente: '',
  };

  return (
    <FormProviderWrapper schema={schema} onSubmit={onSubmit}>
      <div className="min-h-screen bg-white mb-10">
        <div className="mx-auto max-w-7xl px-4 py-6 space-y-5">
          <Title text="REASIGNACIÓN DE PROCESOS" />

          <div className="border p-6 rounded-lg space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <RHFInput name="codigo" label="Código BT: " />
              <RHFInput name="numRef" label="Número de Referencia: " />
              <RHFInput name="cliente" label="Cliente: " />
            </div>
          </div>

          <div className="border p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Datos Actuales:</h3>
            <div>
              <p className="font-medium">Abogado Supervisor:</p>
              <p className="text-gray-700">KATHERINE ESPINOZA GOMEZ</p>
            </div>
            <div>
              <p className="font-medium">Estudio de Abogados:</p>
              <p className="text-gray-700">ESTUDIO RODRIGUEZ ANGOBALDO & ABOGADOS ASOCIADOS</p>
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

        <div className="flex items-center justify-center gap-2 ">
          <ButtonIcon
            title="Grabar"
            color='red'
            icon={<DocumentArrowDownIcon />}
          />
          <ButtonIcon
            title="Limpiar"
            color="gray"
            icon={<PaintBrushIcon />}
          />
        </div>
      </div>
    </FormProviderWrapper>
  );
};

export const Component = ReasignmentClient;
