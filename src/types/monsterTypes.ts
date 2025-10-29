export interface TriviaOption {
  id: number;
  monsterName: string;
}

/**  data para la trivia */
export interface TriviaData {
  id: number;
  silhouetteURL: string;
  correctAnswer: number; //?
  options: TriviaOption[];
}

/**respuesta despues de la validacion */
export interface TriviaResponse {
  status: string;
  message: string;
  data: TriviaData;
}

/** el body del post a /validation */
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
