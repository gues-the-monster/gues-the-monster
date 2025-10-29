interface Props {
  estado: 'silueta' | 'acierto' | 'error';
  imagen: string; 
}

export default function MonsterView({ estado, imagen }: Props) {
  return (
    <div className='relative md:h-75 xl:h-100 h-64 mx-auto my-4'>
      {/* letrero de madera detras del monstruo */}
      <img
        src='./images/wooden-sign.png'
        alt='wooden sign'
        className='absolute inset-0 w-full h-full object-contain'
      />
      {/* imagen del monstruo */}
      <img
        src={imagen}
        alt='monstruo'
        className={`w-full h-full object-contain p-6 transition-all duration-500 z-100 ${
          estado === 'silueta' ? 'blur-xs' : 'saturate-200'
        }`}
      />
      {/* X sobre el monstruo en caso de no adivinar el monstruo */}
      {estado === 'error' && (
        <img
          src='/x-overlay.png'
          alt='error'
          className='absolute inset-0 w-full h-full object-contain'
        />
      )}
    </div>
  );
}
