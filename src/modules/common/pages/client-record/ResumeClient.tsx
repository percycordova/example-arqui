import { Title } from '@/components/ui';
import { InputNoEditable } from '@/components/ui/inputBase/InputNoEditable';
import { TableGeneric } from '@/components/ui/tableGeneric/TableGeneric';
import { SubTitle } from '@/components/ui/text/SubTitle';

export const ResumeClient = () => {
  const detallePrincipal = [
    { label: 'Cuenta BT', content: '123456' },
    { label: 'Deudor', content: '123456' },
    { label: 'Tipo', content: '123456' },
    { label: 'Estatus', content: '123456' },
    { label: 'Plaza', content: '71404761' },
    { label: 'TC', content: '71404761' },
  ];
  const datosIdentificativos = [
    { label: 'Func. de Negocios', content: '123456' },
    { label: 'Banca Origen', content: '123456' },
    { label: 'Fecha de Ingreso', content: '123456' },
    { label: 'G. Económico', content: '123456' },
    { label: 'Jefe de Grupo Actual', content: '71404761' },
    { label: 'Código CIIU', content: '71404761' },
    { label: 'Funcionario de BCE', content: '71404761' },
    { label: 'Clase SBS', content: '71404761' },
  ];
  const deuda = [
    {
      concepto: 'Modificación',
      saldoInicial: 'S/. 10000',
      incremento: 'Activo',
      reduccion: 'Vigente',
      saldoFecha: '23/04/2001',
      variacion: '+-3',
    },
    {
      concepto: 'Modificación',
      saldoInicial: 'S/. 10000',
      incremento: 'Activo',
      reduccion: 'Vigente',
      saldoFecha: '23/04/2001',
      variacion: '+-3',
    },
  ];
  const labelSituacionDeuda = {
    concepto: 'Concepto',
    saldoInicial: 'Saldo Inicial',
    incremento: 'Incremento',
    reduccion: 'Reducción',
    saldoFecha: 'Saldo a la fecha',
    variacion: 'Variación',
  };
  const garantia = [
    {
      garantias: 'Modificación',
      valorGravamen: 'S/. 10000',
      vri: 'Activo',
      fechaTasacion: '23/04/2001',
      propiedad: 'Vigente',
    },
    {
      garantias: 'Modificación',
      valorGravamen: 'S/. 10000',
      vri: 'Activo',
      fechaTasacion: '23/04/2001',
      propiedad: 'Vigente',
    },
  ];
  const labelSituacionGarantia = {
    garantias: 'Garantías',
    valorGravamen: 'Valor Gravamen',
    vri: 'VRI',
    fechaTasacion: 'Fecha Tasación',
    propiedad: 'Propiedad',
  };
  const resume = [
    {
      provisiones: 'Modificación de Deuda del Cliente',
      importe: 'S/. 10000',
    },
    {
      provisiones: 'Modificación de Deuda del Cliente',
      importe: 'S/. 10000',
    },
  ];
  const labelResume = {
    provisiones: 'Provisiones',
    importe: 'Importe',
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="border p-6 rounded-lg grid grid-cols-2 gap-6">
        {detallePrincipal.map((item, i) => (
          <InputNoEditable key={i} label={item.label} content={item.content} fullWidth={false} />
        ))}
      </div>
      <Title text="I. DATOS IDENTIFICATIVOS" align="left" />
      <div className="border p-6 rounded-lg grid grid-cols-2 gap-6">
        {datosIdentificativos.map((item, i) => (
          <InputNoEditable key={i} label={item.label} content={item.content} fullWidth={false} />
        ))}
      </div>
      <Title text="II. SITUACIÓN DE LA DEUDA" align="left" />
      <div className="border p-6 rounded-lg">
        <TableGeneric labels={labelSituacionDeuda} data={deuda} />
      </div>
      <Title text="III. SITUACIÓN DE LAS GARANTÍAS Y PROVISIONES" align="left" />
      <div className="border p-6 rounded-lg">
        <TableGeneric labels={labelSituacionGarantia} data={garantia} />
        <div className="flex mt-6 justify-end flex-col">
          <div className="flex justify-end mb-3">
            <TableGeneric labels={labelResume} data={resume} />
          </div>
          <SubTitle text="Propiedades de las Garantías" align="right" />
          <div className="flex text-right mt-2 flex-col">
            <p>1. Bienes propios de la empresa</p>
            <p>2. Bienes de terceros</p>
            <p>3. Bienes que garantizan a otra deuda</p>
          </div>
        </div>
      </div>
    </div>
  );
};
