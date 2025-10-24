interface Props {
  opciones: string[];
  onSelect: (opcion: string) => void;
  disabled: boolean;
}

export default function Options({ opciones, onSelect, disabled }: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm mx-auto'>
      {opciones.map((op, i) => (
        <button
          key={i}
          disabled={disabled}
          onClick={() => onSelect(op)}
          className='bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-700  hover:scale-110 hover:rotate-2 disabled:opacity-50 transition-all duration-300'
        >
          {op}
        </button>
      ))}
    </div>
  );
}
