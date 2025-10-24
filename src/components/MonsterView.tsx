interface Props {
  estado: 'silueta' | 'acierto' | 'error';
  imagen: string; //url de la imagen (silueta o real)
}

export default function MonsterView({ estado, imagen }: Props) {
  return (
    <div className='relative w-85 h-64 mx-auto my-6'>
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
          estado === 'silueta' ? 'filter blur' : ''
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
