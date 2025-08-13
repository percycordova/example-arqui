import { cn } from '@/utils/cn';

interface InputNoEditableProps {
  label?: string;
  content: string | number;
  color?: 'blue' | 'red' | 'gray' | 'primary';
  className?: string;
  fullWidth?: boolean;
}

export const InputNoEditable = ({
  label,
  content,
  color = 'gray',
  className = '',
  fullWidth = false,
}: InputNoEditableProps) => {
  const base =
    'px-3 py-2 rounded border bg-gray-100 text-gray-700 cursor-not-allowed';
  const width = fullWidth ? 'w-full' : 'w-[400px]';

  const colorClasses = {
    blue: 'border-blue-600',
    red: 'border-red-600',
    gray: 'border-gray-400',
    primary: 'border-primary',
  } as const;

  return (
    <div className="flex flex-row items-center gap-5">
      {label && (
        <label className="text-sm w-[120px] font-medium text-[#333]">
          {label}
        </label>
      )}
      <input
        className={cn(base, width, colorClasses[color] ?? colorClasses.gray, className)}
        value={String(content)}
        readOnly
        aria-readonly="true"
      />
    </div>
  );
};
