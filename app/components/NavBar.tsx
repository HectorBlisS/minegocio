import { Button } from './Hero';

export default function NavBar() {
  return (
    <nav className=' bg-white w-full border-b border-b-gray-200 shadow-md  px-4 py-1 fixed top-4 rounded-full'>
      <div className='flex items-center max-w-3xl mx-auto'>
        <img className='w-[50px]' src='/assets/podcast.gif' alt='logo' />
        <p className='ml-2 font-semibold text-lg'>Podcasters.com.mx</p>
        <div className='ml-auto flex items-center gap-6'>
          <a className='font-semibold text-lg'>Servicio</a>
          <a className='font-semibold text-lg'>Oferta</a>
          <Button>¡Agendar llamada!</Button>
        </div>
      </div>
    </nav>
  );
}
