import { environment } from '../settings/environment ';
import { TriviaResponse, ValidationRequest, ValidationResponse } from '../types/monsterTypes';

const URL = environment.API_URL;

/**
 *  Get a /trivia
 * @returns TriviaResponse
 */
export async function getRandomMonster(): Promise<TriviaResponse> {
  const response = await fetch(`${URL}/trivia`);
  if (!response.ok) throw new Error('Error al obtener trivia');
  return response.json();
}

/**
 *  Post a /validation con triviaId y optionId en el body
 * @param req ValidationRequest
 * @returns ValidationResponse
 */
export async function verifyAnswer(req: ValidationRequest): Promise<ValidationResponse> {
  const response = await fetch(`${URL}/validation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });

  if (!response.ok) throw new Error('Error al validar respuesta');
  return response.json();
}
