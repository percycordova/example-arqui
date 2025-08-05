import { RadioGroup } from '@/components/ui';
import { useFormContext } from 'react-hook-form';

interface Option {
  label: string;
  value: string | number;
}

interface RHFRadioGroupProps {
  name: string;
  label?: string;
  options: Option[];
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
  disabled?: boolean;
}

export const RHFRadioGroup = ({
  name,
  label,
  options,
  color = 'gray',
  className = '',
  disabled = false,
}: RHFRadioGroupProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch(name);
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <RadioGroup
        name={name}
        options={options}
        color={color}
        selectedValue={selectedValue}
        onChange={(val: string | number) => setValue(name, val)}
        disabled={disabled}
        className={className}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
