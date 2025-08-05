import { SelectBase } from '@/components/ui';
import { useFormContext } from 'react-hook-form';

interface SelectOption {
  label: string;
  value: string | number;
}

interface RHFSelectProps {
  name: string;
  label?: string;
  options: SelectOption[];
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
}

export const RHFSelect = ({
  name,
  label,
  options,
  color = 'gray',
  className = '',
  ...rest
}: RHFSelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <SelectBase
        {...register(name)}
        options={options}
        color={color}
        className={className}
        {...rest}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
