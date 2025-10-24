import { RandomMonster, VerifyResponse } from '../types/monsterTypes';

export async function getRandomMonster(): Promise<RandomMonster> {
  const response = await fetch('http://127.0.0.1:3658/m1/1038134-1025263-default/v1/mons/random');
  const data: RandomMonster = await response.json();
  return data;
}

