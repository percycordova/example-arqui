import { ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler, FieldValues, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

interface FormWrapperProps<T extends FieldValues> {
  schema: AnyObjectSchema;
  onSubmit: SubmitHandler<T>;
  children: ReactNode | ((methods: ReturnType<typeof useForm<T>>) => ReactNode);
  defaultValues?: DefaultValues<T>;
  className?: string;
}

export const FormProviderWrapper = <T extends FieldValues>({
  schema,
  onSubmit,
  children,
  defaultValues,
  className = '',
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  );
};
