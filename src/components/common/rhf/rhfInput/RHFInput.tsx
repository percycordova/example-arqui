import { Input } from '@/components/ui/input/Input';
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

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      <Input
        {...register(name)}
        label={label}
        placeholder={placeholder}
        type={type}
        color={color}
        className={className}
        disabled={disabled}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
