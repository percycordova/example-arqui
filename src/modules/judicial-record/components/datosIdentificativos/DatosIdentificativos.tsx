'use client';

import { InputBase } from '@/components/ui';

export const DatosIdentificativos = () => {
  return (
    <section className="space-y-3">
      <TitleSection>I. DATOS IDENTIFICATIVOS:</TitleSection>

      <div className="border rounded p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisabledField label="Func. de Negocios:" type="text" />
        <DisabledField label="Banca Origen:" type="text" />

        <DisabledField label="Fecha de Ingreso:" type="text" />
        <DisabledField label="G. Económico:" type="text" />

        <DisabledField label="Jefe de Grupo Actual:" type="text" />
        <DisabledField label="Código CIIU:" type="text" />

        <DisabledField label="Funcionario de BCE:" type="text" />
        <DisabledField label="Clase SBS:" type="text" />
      </div>
    </section>
  );
};

function TitleSection({ children }: { children: React.ReactNode }) {
  return <h3 className="text-red-700 font-bold tracking-wide">{children}</h3>;
}

// Wrapper que usa SIEMPRE el InputBase deshabilitado
function DisabledField({ label, type = 'number' }: { label: string; type?: 'text' | 'number' }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium min-w-[160px]">{label}</span>
      <div className="flex-1">
        <InputBase type={type} label="" color="gray" disabled />
      </div>
    </div>
  );
}
