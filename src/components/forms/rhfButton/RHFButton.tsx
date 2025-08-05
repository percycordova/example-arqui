import { ButtonBase } from '@/components/ui';
import { useFormContext } from 'react-hook-form';

interface RHFButtonProps {
  title: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const RHFButton = ({
  title,
  color = 'blue',
  className = '',
  type = 'submit',
  ...rest
}: RHFButtonProps) => {
  const { formState } = useFormContext();
  const isSubmitting = formState.isSubmitting;

  return (
    <ButtonBase
      title={isSubmitting ? 'Cargando...' : title}
      type={type}
      color={color}
      disabled={isSubmitting}
      className={className}
      {...rest}
    />
  );
};
