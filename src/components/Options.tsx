import { TriviaOption } from '../types/monsterTypes';

interface Props {
  opciones: TriviaOption[];
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
          onClick={() => onSelect(op.id.toString())}
          className='bg-gray-600 text-2xl text-white py-2 px-4 rounded-lg hover:bg-gray-900  hover:scale-110 hover:rotate-2 disabled:opacity-30 transition-all duration-300'
        >
          {op.monsterName}
        </button>
      ))}
    </div>
  );
}
