export interface TriviaOption {
  id: number;
  imagenSilueta: string;
  opciones: string[];
  opcionesConId: { nombre: string; id: number }[];
}

export interface VerifyResponse {
  acierto: boolean;
  mensaje: string;
  imagenReal: string;
}
