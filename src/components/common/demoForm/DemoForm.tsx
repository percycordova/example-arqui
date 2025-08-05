import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper';
import * as yup from 'yup';
import { RHFInput } from '../rhf/rhfInput/RHFInput';
import { RHFRadioGroup } from '../rhf/rhfRadioGroup/RHFRadioGroup';
import { RHFCheckbox } from '../rhf/rhfCheckbox/RHFChecbox';
import { RHFButton } from '../rhf/rhfButton/RHFButton';
import { RHFSelect } from '../rhf/rhfSelect/RHFSelect';
import { Button } from '@/components/ui/button/Button';

const regionesDelPeru = [
  'Amazonas',
  'Áncash',
  'Apurímac',
  'Arequipa',
  'Ayacucho',
  'Cajamarca',
  'Callao',
  'Cusco',
  'Huancavelica',
  'Huánuco',
  'Ica',
  'Junín',
  'La Libertad',
  'Lambayeque',
  'Lima',
  'Loreto',
  'Madre de Dios',
  'Moquegua',
  'Pasco',
  'Piura',
  'Puno',
  'San Martín',
  'Tacna',
  'Tumbes',
  'Ucayali',
];

const schema = yup.object({
  email: yup.string().email('Correo inválido').required('Correo es requerido'),
  username: yup.string().min(3, 'Mínimo 3 caracteres').required('Usuario es requerido'),
  age: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .typeError('La edad debe ser un número')
    .min(18, 'Debe ser mayor de edad')
    .nullable()
    .notRequired(),
  gender: yup.string().required('Selecciona tu género'),
  married: yup.boolean().nullable().defined(),
  region: yup.string().required('Selecciona tu región'),
});

type FormValues = yup.InferType<typeof schema>;

export const DemoForm = () => {
  const defaultValues: FormValues = {
    email: '',
    username: '',
    age: undefined,
    gender: '',
    married: false,
    region: '',
  };

  const handleSubmit = (data: FormValues) => {
    console.log('Datos del formulario:', data);
  };

  const handleReset = (reset: () => void) => {
    reset();
  };

  return (
    <FormProviderWrapper<FormValues>
      schema={schema}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
    >
      {({ reset }) => (
        <>
          <RHFInput name="email" label="Correo electrónico" type="email" />
          <RHFInput name="username" label="Nombre de usuario" />
          <RHFInput name="age" label="Edad" type="number" />

          <RHFSelect
            name="region"
            label="Región"
            options={regionesDelPeru.map(region => ({
              label: region,
              value: region,
            }))}
          />

          <RHFRadioGroup
            name="gender"
            label="Género"
            options={[
              { label: 'Masculino', value: 'male' },
              { label: 'Femenino', value: 'female' },
            ]}
          />

          <RHFCheckbox name="married" label="¿Casado?" />

          <div className="flex gap-4 mt-6">
            <RHFButton title="Enviar" color="primary" />
            <Button title="Resetear" color="gray" onClick={() => handleReset(reset)} />
          </div>
        </>
      )}
    </FormProviderWrapper>
  );
};
