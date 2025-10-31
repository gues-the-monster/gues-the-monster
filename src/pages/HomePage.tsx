import Card from '../components/HomePage/Card';
import Button from '../components/HomePage/Button';

export default function HomePage() {
  return (
    <section className="relative h-screen w-screen bg-cover bg-center bg-[url('/images/main-bg.jpg')]">
      {/* Card en la esquina superior derecha */}
      <div className='absolute top-10 right-10'>
        <Card />
      </div>

      {/* Botones en la parte inferior centrados */}
      <article className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4'>
        <div className='lg:w-auto w-[50%] '>
          <Button text='Empezar' color={true} />
        </div>
        <div className='flex flex-col gap-6 lg:flex-row '>
          <Button text='Adivinanza' color={false} />
          <Button text='Historias' color={false} />
        </div>
      </article>
    </section>
  );
}
