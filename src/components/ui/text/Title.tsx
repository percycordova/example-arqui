type TitleProps = {
  text?: string;
  align?: 'left' | 'center' | 'right';
};

export const Title = ({ text = 'Agrega el título', align = 'center' }: TitleProps) => {
  // Mapear align a clases de Tailwind
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <h3 className={`text-xl font-semibold text-primary ${alignClass}`}>
      {text}
    </h3>
  );
};
