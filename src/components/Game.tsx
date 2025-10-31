import { useState, useEffect, useCallback } from 'react';
import { RandomMonster, VerifyResponse } from '../types/monsterTypes';
import MonsterView from '../components/MonsterView';
import Options from '../components/Options';
import Message from '../components/Message';
import { getRandomMonster, validateAnswer } from '../api/monsterApi';

export default function Game() {
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

  // ✅ FUNCIÓN COMPLETA para US05 y US06
  const manejarSeleccion = useCallback(async (opcionSeleccionada: string) => {
    
    if (!monster) {
    //  No hay monstruo cargado
      return;
    }

    try {
      // US05: Encontrar la opción seleccionada
      const opcionEncontrada = monster.opcionesConId.find(op => op.nombre === opcionSeleccionada);
      
      if (!opcionEncontrada) {
        //  No se encontró la opción
        return;
      }

      setMensaje('Validando... ⏳');

      // US06: Validar con la API
      const resultado = await validateAnswer(monster.id, opcionEncontrada.id);
        //  Resultado:', resultado

      // US06: Mostrar feedback visual
      if (resultado.acierto) {
        setEstado('acierto');
        setMensaje('¡Correcto! 🎉');
        setImagen(resultado.imagenReal); // Revelar imagen real
      } else {
        setEstado('error');
        setMensaje('¡Incorrecto! ❌');
        setImagen(resultado.imagenReal); // Revelar imagen real
      }

    } catch (error) {
      setMensaje('Error al validar 😞');
      setEstado('error');
    }
  }, [monster]);



  return (
    <div className='container relative'>
      <h1 className='text-5xl text-center md:text-start md:text-6xl md:ms-7 mb-2 text-red-700 text-shadow-lg/30'>
        Guess The Monster
      </h1>
      
      {monster && (
        <>
          {/* US06: Mensaje con feedback */}
          <Message texto={mensaje} estado={estado} />
          
          {/* US06: Revelar imagen con animación */}
          <MonsterView estado={estado} imagen={imagen} />

          {/* US05: 4 botones seleccionables una vez */}
          <Options
            opciones={monster.opciones}
            onSelect={manejarSeleccion}
            disabled={estado !== 'silueta'} // Solo seleccionable una vez
          />

          {/* US06: Siguiente pregunta después del resultado */}
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