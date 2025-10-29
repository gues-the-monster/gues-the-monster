import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
  color: boolean;
}

export default function Button({ text, color }: Props) {
  const navigate = useNavigate();

  const baseClasses =
    'text-white text-2xl sm:text-3xl md:text-3xl py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 uppercase rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-200';

  const bgClasses = color
    ? 'bg-gradient-to-r from-[#CD5623] to-[#411267]'
    : 'bg-gradient-to-r from-[#CD7E23] to-[#411267]';

  const handleClick = () => {
    if (text.toLowerCase() === 'empezar') {
      navigate('/game');
    }
  };

  return (
    <button onClick={handleClick} className={`${baseClasses} ${bgClasses}`}>
      {text}
    </button>
  );
}
