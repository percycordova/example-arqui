export const Title = ({ text = 'Agrega el título' }: { text: string }) => {
  return <h3 className="text-2xl font-semibold text-primary text-center">{text} </h3>;
};
