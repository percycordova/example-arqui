import React from 'react';
import { ModalBase } from '@/components/common/modals/modalBase/ModalBase';
import { Typography } from '@/components/ui/typography/Typography';
import { Button } from '@/components/ui/button/Button';
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

type AlertType = 'error' | 'success' | 'warning';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type?: AlertType;
  buttonText?: string;
}

const typeStyles: Record<AlertType, { icon: React.ReactNode; color: string }> = {
  error: {
    icon: <XCircleIcon className="w-12 h-12 text-red-500" />,
    color: 'red',
  },
  success: {
    icon: <CheckCircleIcon className="w-12 h-12 text-green-500" />,
    color: 'green',
  },
  warning: {
    icon: <ExclamationTriangleIcon className="w-12 h-12 text-yellow-500" />,
    color: 'yellow',
  },
};

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  type = 'success',
  buttonText = 'Entendido',
}) => {
  const { icon, color } = typeStyles[type];

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      className="text-center max-w-md"
      disableBackdropClick={true}
    >
      <div className="flex flex-col items-center gap-4 px-4">
        {icon}

        <Typography as="h2" variant="title">
          {title}
        </Typography>

        <Typography className="text-gray-600">{description}</Typography>

        <div className="mt-6 w-full">
          <Button title={buttonText} color="blue" onClick={onClose} />
        </div>
      </div>
    </ModalBase>
  );
};
