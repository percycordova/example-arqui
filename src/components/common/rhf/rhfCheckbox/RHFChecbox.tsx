import { Checkbox } from '@/components/ui/checkbox/Checkbox';
import { useFormContext } from 'react-hook-form';

interface RHFCheckboxProps {
  name: string;
  label?: string;
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
}

export const RHFCheckbox = ({
  name,
  label,
  color = 'gray',
  className = '',
  ...rest
}: RHFCheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      <Checkbox {...register(name)} label={label} color={color} className={className} {...rest} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
