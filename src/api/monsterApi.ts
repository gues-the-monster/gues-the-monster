import { RandomMonster } from '../types/monsterTypes';
import { environment } from '../settings/environment ';

const URL = environment.API_URL;

export async function getRandomMonster(): Promise<RandomMonster> {
  const response = await fetch();
  const data: RandomMonster = await response.json();
  return data;
}
