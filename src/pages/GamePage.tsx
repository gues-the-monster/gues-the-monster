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
    <div className='container text-center'>
      <h1 className='text-4xl md:text-5xl mb-4 text-red-700 text-shadow-lg/30'>
        Guess The Monster{' '}
      </h1>
      {monster && (
        <>
          <MonsterView estado={estado} imagen={imagen} />
          <Message texto={mensaje} estado={estado} />
          <Options
            opciones={monster.opciones}
            onSelect={() => null} // Manejar la selección de opciones
            disabled={estado !== 'silueta'}
          />

          {estado !== 'silueta' && (
            <button
              onClick={cargarMonstruo}
              className='mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg'
            >
              Siguiente monstruo 👻
            </button>
          )}
        </>
      )}
    </div>
  );
}
