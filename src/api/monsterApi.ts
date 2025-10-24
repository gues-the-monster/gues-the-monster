import { RandomMonster } from '../types/monsterTypes';

export async function getRandomMonster(): Promise<RandomMonster> {
  const response = await fetch('https://mocki.io/v1/5b96e9d1-a060-42bf-b405-193b2cce7e0b');
  const data: RandomMonster = await response.json();
  return data;
}
