type SubTitleProps = {
  text?: string;
  align?: 'left' | 'center' | 'right';
};

export const SubTitle = ({ text = 'Agrega el título', align = 'center' }: SubTitleProps) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <h3 className={`text-s font-semibold text-primary underline ${alignClass}`}>
      {text}
    </h3>
  );
};
