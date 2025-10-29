export interface TriviaOption {
  id: number;
  monsterName: string;
}

export interface TriviaData {
  id: number;
  silhouetteURL: string;
  correctAnswer: number;
  options: TriviaOption[];
}

export interface TriviaResponse {
  status: string;
  message: string;
  data: TriviaData;
}

export interface ValidationRequest {
  triviaId: number;
  optionId: number;
}

export interface ValidationData {
  isCorretBoolean?: boolean;
  nameMonster: string;
  monsterImageURL: string;
}

export interface ValidationResponse {
  status: string;
  message: string;
  data: ValidationData;
}
