export default function Card() {
  return (
    <article
      className="bg-[url('/images/card.png')] bg-center bg-no-repeat bg-cover
                        w-full max-w-[270px] h-[400px] mx-auto
                        flex flex-col items-center justify-center p-6"
    >
      <p className='text-gray-900 text-center w-4/5 whitespace-pre-line mb-2 text-2xl'>
        1. Haz Clic en Empezar e inicia este emocionante juego.
      </p>
      <p className='text-gray-900 text-center w-4/5 whitespace-pre-line mb-2 text-2xl'>
        2. Adivina el monstruo que aparecerá aleatoriamente.
      </p>
      <p className='text-gray-900 text-center w-4/5 whitespace-pre-line text-2xl'>
        3. Revela la verdad y acierta la mayor cantidad de monstruos.
      </p>
    </article>
  );
}
