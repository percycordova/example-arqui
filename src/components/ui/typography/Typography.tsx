import type { JSX } from 'react';
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type TypographyVariants = 'title' | 'subtitle' | 'base' | 'caption';

type TypographyProps<Tag extends keyof JSX.IntrinsicElements = 'p'> = {
  as?: Tag;
  children: React.ReactNode;
  variant?: TypographyVariants;
  className?: string;
} & React.ComponentPropsWithoutRef<Tag>;

export const Typography = <Tag extends keyof JSX.IntrinsicElements = 'p'>({
  as,
  children,
  variant = 'base',
  className = '',
  ...rest
}: TypographyProps<Tag>) => {
  const Component = (as || 'p') as keyof JSX.IntrinsicElements;

  const base = 'text-[#333333]';

  const variants: Record<TypographyVariants, string> = {
    title: 'text-2xl font-bold',
    subtitle: 'text-xl font-semibold',
    base: 'text-base',
    caption: 'text-sm',
  };

  const mergedClasses = twMerge(clsx(base, variants[variant], className));

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component className={mergedClasses} {...(rest as any)}>
      {children}
    </Component>
  );
};
