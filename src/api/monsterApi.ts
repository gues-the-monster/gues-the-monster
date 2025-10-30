import { RandomMonster, VerifyResponse } from '../types/monsterTypes';

export async function getRandomMonster(): Promise<RandomMonster> {
  try {
    const response = await fetch('https://whos-that-monster-api.onrender.com/api/v1/trivia');
    const apiData = await response.json();
    

    
    // Transformar CORRECTAMENTE la respuesta
    const opcionesConId = apiData.data.options.map((option: any) => ({
      nombre: option.monsterName,
      id: option.id
    }));

    return {
      id: apiData.data.id,
      imagenSilueta: apiData.data.silhouetteURL,
      opciones: opcionesConId.map((op: any) => op.nombre),
      opcionesConId: opcionesConId
    };
  } catch (error) {
    console.error('Error fetching monster:', error);
    throw error;
  }
}

export async function validateAnswer(triviaId: number, optionId: number): Promise<VerifyResponse> {
  const response = await fetch('https://whos-that-monster-api.onrender.com/api/v1/validation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      triviaId: triviaId,
      optionId: optionId
    })
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return {
    acierto: data.data.isCorretBoolean,
    mensaje: data.message,
    imagenReal: data.data.monsterImageURL
  };
}