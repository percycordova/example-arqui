'use client';
import { DemoForm } from '@/components/common/demoForm/DemoForm';
import { AlertModal } from '@/components/common/modals/alertModal/AlertModal';
import { ConfirmModal } from '@/components/common/modals/confirmModal/ConfirmModal';
import { ButtonBase } from '@/components/ui/buttonBase/ButtonBase';
import { SelectBase } from '@/components/ui/selectBase/SelectBase';
import { Typography } from '@/components/ui/typography/Typography';
import { useModal } from '@/hooks/useModal';

const HomePage = () => {
  const { closeModal: closeConfirm, isOpen: isOpenConfirm, openModal: openConfirm } = useModal();
  const {
    closeModal: closeModalAlert,
    isOpen: isOpenModalAlert,
    openModal: openModalAlert,
  } = useModal();

  return (
    <div className="p-6">
      <div className="max-w-[700px] mx-auto my-10">
        <DemoForm />
      </div>
      <div className="border p-4 mb-8">
        <Typography as="h2" variant="title">
          Botones
        </Typography>
        <div className="p-8 flex gap-8">
          <ButtonBase
            title="Modal de confirmación"
            color="blue"
            disabled={false}
            onClick={openConfirm}
          />
          <ButtonBase title="Modal de alerta" color="red" disabled={false} onClick={openModalAlert} />
          <ButtonBase title="Desahabilitado" color="gray" disabled={true} />
        </div>
      </div>

      <div className="border p-4">
        <Typography as="h2" variant="title">
          Tipografia
        </Typography>
        <div className="space-y-4 p-4">
          <Typography as="h1" variant="title">
            Titulo principal
          </Typography>

          <Typography as="h2" variant="subtitle">
            Subtitulo
          </Typography>

          <Typography>Texto por defecto (base)</Typography>

          <Typography variant="caption" className="text-red-500">
            Caption con clase personalizada
          </Typography>

          <Typography as="a" href="#" className="underline text-blue-600">
            Soy un link disfrazado de texto
          </Typography>
        </div>
      </div>

      <ConfirmModal
        onConfirm={closeConfirm}
        onCancel={closeConfirm}
        isOpen={isOpenConfirm}
        title="Estas seguro?"
        description="Esta accion no se puede deshacer"
      />
      <AlertModal
        isOpen={isOpenModalAlert}
        onClose={closeModalAlert}
        title="Estas seguro?"
        description="Esta accion no se puede deshacer"
        type="success"
      />
    </div>
  );
};

export default HomePage;
