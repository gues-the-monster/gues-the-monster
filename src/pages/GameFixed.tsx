// GameFixed.tsx
import { useState, useEffect, useCallback } from 'react';
import { RandomMonster, VerifyResponse } from '../types/monsterTypes';
import MonsterView from '../components/MonsterView';
import Options from '../components/Options';
import Message from '../components/Message';
import { getRandomMonster, validateAnswer } from '../api/monsterApi';

export default function GameFixed() { 
  const [monster, setMonster] = useState<RandomMonster | null>(null);
  const [estado, setEstado] = useState<'silueta' | 'acierto' | 'error'>('silueta');
  const [mensaje, setMensaje] = useState<string>('¿Quién es este monstruo?');
  const [imagen, setImagen] = useState<string>('');

  useEffect(() => {
    cargarMonstruo();
  }, []);

  async function cargarMonstruo() {
    try {
      setEstado('silueta');
      setMensaje('¿Quién es este monstruo?');
      const data = await getRandomMonster();

      setMonster(data);
      setImagen(data.imagenSilueta);
    } catch (error) {
      console.error('Error cargando monstruo:', error);
      setMensaje('Error cargando monstruo');
    }
  }

  const manejarSeleccion = useCallback(async (opcionSeleccionada: string) => {    
    if (!monster) {
      return;
    }
    try {
      const opcionEncontrada = monster.opcionesConId.find(op => op.nombre === opcionSeleccionada);      
      if (!opcionEncontrada) {
        return;
      }
      setMensaje('Validando... ⏳');
      const resultado = await validateAnswer(monster.id, opcionEncontrada.id);
      if (resultado.acierto) {
        setEstado('acierto');
        setMensaje('¡Correcto! 🎉');
        setImagen(resultado.imagenReal);
      } else {
        setEstado('error');
        setMensaje('¡Incorrecto! ❌');
        setImagen(resultado.imagenReal);
      }
    } catch (error) {
      console.error('💥 Error validando:', error);
      setMensaje('Error al validar 😞');
      setEstado('error');
    }
  }, [monster]);

  return (
    <div className='container relative'>
      <h1 className='text-5xl text-center md:text-start md:text-6xl md:ms-7 mb-2 text-red-700 text-shadow-lg/30'>
        Guess The Monster - FIXED
      </h1>
      
      {monster && (
        <>
          <Message texto={mensaje} estado={estado} />
          <MonsterView estado={estado} imagen={imagen} />

          <Options
            opciones={monster.opciones}
            onSelect={manejarSeleccion}
            disabled={estado !== 'silueta'}
          />

        {estado !== 'silueta' && (
      <button
        onClick={cargarMonstruo}
        className='fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gray-700 text-lg text-white hover:bg-gray-900 transition-colors duration-300 animate-bounce w-48 rounded-lg'
      >
        Siguiente monstruo 👻
      </button>
      )}
        </>
      )}
    </div>
  );
}