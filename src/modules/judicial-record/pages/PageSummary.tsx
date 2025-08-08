'use client';
import * as yup from 'yup';
import { Typography } from '@/components/ui/typography/Typography';
import { FormProviderWrapper } from '@/components/ui/formProviderWrapper/FormProviderWrapper';
import { RHFInput } from '@/components/forms/rhfInput/RHFInput';
import { RHFSelect } from '@/components/forms/rhfSelect/RHFSelect';
import { RHFButton } from '@/components/forms/rhfButton/RHFButton';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';

const materias = ['Civil', 'Penal', 'Laboral', 'Comercial', 'Administrativo'];
const tiposProceso = ['Ordinario', 'Sumarísimo', 'Ejecución', 'Contencioso-Adm.', 'Arbitraje'];
const abogadosSuperiores = ['—', 'Ab. Juan Pérez', 'Ab. María López', 'Ab. Carlos Díaz'];
const estudiosExternos = ['—', 'Estudio Alpha', 'Estudio Beta', 'Estudio Gamma'];
const monedas = ['US$', 'S/', '€'];

const schema = yup.object({
  codigoBT: yup.string().required('Código BT es obligatorio'),
  deudor: yup.string().required('Deudor es obligatorio'),
  materia: yup.string().required('Seleccione materia'),
  tipoProceso: yup.string().required('Seleccione tipo de proceso'),
  nroExpJudicial: yup.string().nullable(),
  juzgado: yup.string().nullable(),
  secretario: yup.string().nullable(),
  abogadoSuperior: yup.string().required('Seleccione abogado'),
  estudioExterno: yup.string().required('Seleccione estudio'),
  plazaDemanda: yup.string().nullable(),
  moneda: yup.string().required('Seleccione moneda'),
  fechaDemanda: yup.string().required('Fecha de demanda es obligatoria'),
  montoDemandado: yup
    .number()
    .typeError('Debe ser numérico')
    .min(0, 'No negativo')
    .required('Monto es obligatorio'),
});

type FormValues = yup.InferType<typeof schema>;

const FichaResumenForm = () => {
  const defaultValues: FormValues = {
    codigoBT: '',
    deudor: '',
    materia: '',
    tipoProceso: '',
    nroExpJudicial: '',
    juzgado: '',
    secretario: '',
    abogadoSuperior: '—',
    estudioExterno: '—',
    plazaDemanda: '',
    moneda: 'US$',
    fechaDemanda: '',
    montoDemandado: undefined as unknown as number,
  };

  const handleSubmit = (data: FormValues) => {
    console.log('GRABAR ->', data);
  };

  return (
    <div className="max-w-5xl mx-auto my-10">
      <Typography className="text-primary text-center mb-8" as="h2" variant="subtitle">
        FICHA RESUMEN - CARGAR INICIAL
      </Typography>

      <FormProviderWrapper<FormValues>
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
      >
        {({ reset }) => (
          <>
            {/* Bloque: Código BT / Deudor (ahora SÍ dentro del provider) */}
            <div className="border rounded-xl p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-3">
                <div className="text-sm font-medium">Código BT:</div>
                <RHFInput name="codigoBT" label="" placeholder="Ingrese código" />
                <div className="text-sm font-medium">Deudor:</div>
                <RHFInput name="deudor" label="" placeholder="Nombre del deudor" />
              </div>
            </div>

            {/* Bloque principal */}
            <div className="border rounded-xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <RHFSelect
                  name="materia"
                  label="Materia"
                  options={materias.map(m => ({ label: m, value: m }))}
                />
                <RHFSelect
                  name="tipoProceso"
                  label="Tipo de Proceso"
                  options={tiposProceso.map(t => ({ label: t, value: t }))}
                />
                <RHFInput name="nroExpJudicial" label="Nro Exp Judicial" placeholder="000-2025" />
                <RHFInput name="secretario" label="Secretario" />
                <RHFInput name="juzgado" label="Juzgado" />
                <RHFInput name="fechaDemanda" label="Fecha Demanda" type="date" />
                <RHFSelect
                  name="abogadoSuperior"
                  label="Abogado Superior"
                  options={abogadosSuperiores.map(a => ({ label: a, value: a }))}
                />
                <RHFInput
                  name="montoDemandado"
                  label="Monto Demandado"
                  type="number"
                  placeholder="0.00"
                />
                <RHFSelect
                  name="estudioExterno"
                  label="Estudio Externo"
                  options={estudiosExternos.map(e => ({ label: e, value: e }))}
                />
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <RHFInput name="plazaDemanda" label="Plaza Demanda" />
                  </div>
                  <RHFSelect
                    name="moneda"
                    label="Moneda"
                    options={monedas.map(m => ({ label: m, value: m }))}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8">
                <RHFButton title="Grabar" color="blue" />
                <ButtonBase title="Limpiar" color="gray" onClick={() => reset()} />
              </div>
            </div>
          </>
        )}
      </FormProviderWrapper>
    </div>
  );
};

export const Component = FichaResumenForm;
