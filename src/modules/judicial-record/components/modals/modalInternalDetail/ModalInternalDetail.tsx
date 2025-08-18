import { ModalBase } from '@/components/ui/modalBase/ModalBase';
import { InputBase, ButtonBase } from '@/components/ui';
import { Title } from '@/components/ui'; // ajusta el import si tu Title vive en otro path

interface ModalQualificationDetailProps {
  isOpen: boolean;
  onClose: () => void;

  codigoBT?: string;
  nroReferencia?: string;
  cliente?: string;

  nroOperacion?: string;
  nroSubOperacion?: string;
  tipoCliente?: string;
  tipoOperacion?: string;
  moneda?: string;
  importe?: string;
  nroExpedienteInterno?: string;
  estudioAbogados?: string;
}

export const ModalInternalDetail = ({
  isOpen,
  onClose,
  codigoBT = 'BT-00001',
  nroReferencia = 'REF-2025-01',
  cliente = 'Cliente Ejemplo SAC',

  nroOperacion = 'OP-000123',
  nroSubOperacion = 'SUB-04',
  tipoCliente = 'Persona Jurídica',
  tipoOperacion = 'Garantía Hipotecaria',
  moneda = 'PEN',
  importe = '150,000.00',
  nroExpedienteInterno = 'EXP-2025-0031',
  estudioAbogados = 'Estudio Ejemplo & Asociados',
}: ModalQualificationDetailProps) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-5xl"
      disableBackdropClick={false}
      showXButton
    >
      <div className="px-6 py-8 space-y-6">
        {/* Título */}
        <Title text="Detalle del Estado expediente interno" />

        {/* Bloque 1 */}
        <div className="border border-gray-300 p-5 rounded">
          <div className="flex gap-6 justify-between items-start">
            {/* Columna izquierda */}
            <div className="w-[60%] flex flex-col gap-5">
              <InputBase label="Código BT" value={codigoBT} disabled className="w-[250px]" />
              <InputBase label="Cliente" value={cliente} disabled className="w-full" />
            </div>

            {/* Columna derecha */}
            <div className="w-[35%]">
              <InputBase
                label="Número de Referencia"
                value={nroReferencia}
                disabled
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="border border-gray-300 p-5 rounded">
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-6">
              <InputBase
                label="Nro. Operación"
                value={nroOperacion}
                disabled
                className="w-[240px]"
              />
            </div>

            <div className="flex items-end gap-6">
              <InputBase
                label="Nro. Suboperación"
                value={nroSubOperacion}
                disabled
                className="w-[240px]"
              />
            </div>

            <div className="flex items-end gap-6">
              <InputBase
                label="Tipo de Cliente"
                value={tipoCliente}
                disabled
                className="w-[620px] max-w-full"
              />
            </div>

            <div className="flex items-end gap-6">
              <InputBase
                label="Tipo de Operación"
                value={tipoOperacion}
                disabled
                className="w-[620px] max-w-full"
              />
            </div>

            <div className="flex items-end gap-6">
              <InputBase label="Moneda" value={moneda} disabled className="w-[160px]" />
            </div>

            <div className="flex items-end gap-6">
              <InputBase label="Importe" value={importe} disabled className="w-[260px]" />
            </div>

            <div className="flex items-end gap-6">
              <InputBase
                label="Nro. Expediente Interno"
                value={nroExpedienteInterno}
                disabled
                className="w-[260px]"
              />
            </div>

            <div className="flex items-end gap-6">
              <InputBase
                label="Estudio de Abogados"
                value={estudioAbogados}
                disabled
                className="w-[620px] max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center">
          <ButtonBase title="Cerrar" color="red" onClick={onClose} />
        </div>
      </div>
    </ModalBase>
  );
};
