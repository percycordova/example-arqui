import { ButtonIcon } from '@/components/ui';
import { EyeIcon, PlayIcon, TrashIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/solid';

interface IProps {
  handleShow?: () => void;
  handleExecute?: () => void;
  handleEdit?: () => void;
}

export const ActionsButton = ({
  handleShow = () => {},
  handleExecute = () => {},
  handleEdit = () => {},
}: IProps) => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 bg-white red">
      <ButtonIcon
        title="Mostrar"
        icon={<EyeIcon className="w-5 h-5" />}
        iconPosition="left"
        onClick={handleShow}
      />
      <ButtonIcon
        title="Ejecutar"
        color="blue"
        icon={<PlayIcon className="w-5 h-5" />}
        iconPosition="left"
        onClick={handleExecute}
      />
      <ButtonIcon
        title="Eliminar"
        color="red"
        icon={<TrashIcon className="w-5 h-5" />}
        iconPosition="left"
      />
      <ButtonIcon
        title="Modificar"
        icon={<PencilIcon className="w-5 h-5" />}
        iconPosition="left"
        className="bg-orange-500 hover:bg-orange-600 text-white"
        onClick={handleEdit}
      />
      <ButtonIcon
        title="Nuevo"
        color="green"
        icon={<PlusIcon className="w-5 h-5" />}
        iconPosition="left"
      />
    </div>
  );
};
