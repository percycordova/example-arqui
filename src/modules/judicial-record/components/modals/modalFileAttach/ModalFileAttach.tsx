
import { useRef, useState } from 'react';
import { ModalBase } from '@/components/ui/modalBase/ModalBase';
import { InputBase } from '@/components/ui';        // ajusta import si tu barrel es distinto
import { ButtonBase } from '@/components/ui';       // idem

interface FileAttachModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAttach: (file: File) => Promise<void> | void; // qué hacer con el archivo al adjuntar
  accept?: string;                                 // ej: ".csv,.xlsx,.xls"
  loading?: boolean;                               // para mostrar spinner en el botón
}

export const ModalFileAttach = ({
  isOpen,
  onClose,
  onAttach,
  accept = '.csv,.xlsx,.xls',
  loading = false,
}: FileAttachModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handlePick = () => inputRef.current?.click();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  };

  const handleSubmit = async () => {
    if (!file) return;
    await onAttach(file);
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={()=>{
        setFile(null);
        onClose();
      }}
      className="max-w-xl"
      disableBackdropClick={false}
      showXButton
    >
      <div className="py-10 px-6">
        {/* Fila: label + input + botón Examinar */}
        <div className="grid grid-cols-12 items-center gap-3">
          <label className="col-span-12 sm:col-span-2 text-sm font-medium">Archivo:</label>

          <div className="col-span-12 sm:col-span-7">
            <InputBase
              value={file?.name ?? ''}
              placeholder="Seleccione un archivo…"
              readOnly
            />
          </div>

          <div className="col-span-12 sm:col-span-3">
            <ButtonBase
              title="Examinar"
              color="gray"
              onClick={handlePick}
              className="w-full"
            />
            {/* input real, oculto */}
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Botón Adjuntar */}
        <div className="mt-6 flex justify-center">
          <ButtonBase
            title="Adjuntar"
            color="primary"
            loading={loading}
            disabled={!file || loading}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </ModalBase>
  );
};
