import { InputBase } from '@/components/ui';
import { useFormContext } from 'react-hook-form';

interface RHFInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
  disabled?: boolean;
}

export const RHFInput = ({
  name,
  label,
  placeholder,
  type = 'text',
  color = 'gray',
  className = '',
  disabled,
}: RHFInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name as keyof typeof errors];
  const error =
    typeof fieldError === 'object' && fieldError ? (fieldError.message as string) : undefined;

  return (
    <div className="mb-4">
      <InputBase
        {...register(name)}
        label={label}
        placeholder={placeholder}
        type={type}
        color={color}
        className={className}
        disabled={disabled}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
