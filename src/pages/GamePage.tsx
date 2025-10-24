import { useState, useEffect } from 'react';
import { RandomMonster, VerifyResponse } from '../types/monsterTypes';
import MonsterView from '../components/MonsterView';
import Options from '../components/Options';
import Message from '../components/Message';
import { getRandomMonster } from '../api/monsterApi';

export default function Game() {
  const [monster, setMonster] = useState<RandomMonster | null>(null);
  const [estado, setEstado] = useState<'silueta' | 'acierto' | 'error'>('silueta'); //estado del juego
  const [mensaje, setMensaje] = useState<string>('?');
  const [imagen, setImagen] = useState<string>('');

  useEffect(() => {
    cargarMonstruo();
  }, []);

  async function cargarMonstruo() {
    setEstado('silueta');
    setMensaje('?');
    const data = await getRandomMonster();
    setMonster(data);
    setImagen(data.imagenSilueta);
  }

  return (
    <div className='container relative'>
      <h1 className='text-5xl text-center md:text-start md:text-6xl md:ms-7 mb-2 text-red-700 text-shadow-lg/30'>
        Guess The Monster{' '}
      </h1>
      {monster && (
        <>
          <Message texto={mensaje} estado={estado} />
          <MonsterView estado={estado} imagen={imagen} />

          <Options
            opciones={monster.opciones}
            onSelect={() => null} // Manejar la selección de opciones
            disabled={estado !== 'silueta'} // Deshabilitar opciones si no está en estado 'silueta'
          />

          {estado !== 'silueta' && (
            <button
              onClick={cargarMonstruo}
              className='fixed bottom-5 right-0 left-0 px-4 py-2 bg-gray-700 text-2xl text-white hover:bg-gray-900 transition-colors duration-300 animate-bounce'
            >
              Siguiente monstruo 👻
            </button>
          )}
        </>
      )}
    </div>
  );
}
