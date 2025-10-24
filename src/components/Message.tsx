interface Props {
  texto: string;
  estado: 'silueta' | 'acierto' | 'error';
}
export default function Message({ texto, estado }: Props) {
  return (
    <p
      className={`text-center text-4xl md:text-6xl  ${estado === 'error' ? 'animate-none text-red-800' : 'animate-bounce text-orange-400'}`}
    >
      {texto}
    </p>
  );
}
