export interface RandomMonster {
  id: number;
  imagenSilueta: string;
  opciones: string[];
}

export interface VerifyResponse {
  acierto: boolean;
  mensaje: string;
  imagenReal: string;
}
