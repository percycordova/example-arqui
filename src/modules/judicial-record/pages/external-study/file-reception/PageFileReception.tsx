import { ButtonIcon, Title } from '@/components/ui';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { useModal } from '@/hooks/useModal';
import { TableExternalFiles } from '@/modules/judicial-record/components/tables/tableExternalFiles/TableExternalFiles';
import { ModalFileAttach } from '@/modules/judicial-record/components/modals/modalFileAttach/ModalFileAttach';

const PageFileReception = () => {
  const { closeModal, isOpen, openModal } = useModal();
  return (
    <div className="min-h-screen bg-white mb-10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Title text="RESUMEN POR ESTUDIO EXTERNO" />
      </div>
      <div className="flex justify-end gap-2 mb-8">
        <ButtonIcon
          title="Adjuntar archivos"
          icon={<PaperClipIcon className="w-5 h-5" />}
          iconPosition="left"
          color="blue"
          onClick={openModal}
        />
      </div>
      <TableExternalFiles />
      <ModalFileAttach isOpen={isOpen} onClose={closeModal} onAttach={() => {}} loading={false} />
    </div>
  );
};

export const Component = PageFileReception;
