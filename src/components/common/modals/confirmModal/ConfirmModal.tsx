import React from 'react';
import { ModalBase } from '@/components/common/modals/modalBase/ModalBase';
import { Typography } from '@/components/ui/typography/Typography';
import { Button } from '@/components/ui/button/Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
  icon,
}) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onCancel}
      className="text-center max-w-md"
      disableBackdropClick={true}
      showXButton={true}
    >
      <div className="flex flex-col items-center gap-4 px-4">
        {icon && <div className="text-4xl text-red-500">{icon}</div>}
        <Typography as="h2" variant="title">
          {title}
        </Typography>

        <Typography className="text-gray-600">{description}</Typography>

        <div className="flex gap-4 mt-6 w-full justify-center">
          <Button title="Cancelar" color="red" onClick={onCancel} />
          <Button title="Aceptar" color="blue" onClick={onConfirm} />
        </div>
      </div>
    </ModalBase>
  );
};
