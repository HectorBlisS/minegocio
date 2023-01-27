export default function Hero() {
  return (
    <section className='flex'>
      <div>
        <p className='uppercase text-xs underline decoration-blue-500 tracking-wider mb-4'>
          Grabación profesional
        </p>
        <h1 className='text-3xl font-bold mb-6'>
          Nosotros grabamos tu podcast. Tú ocupate de la{' '}
          <span className='text-blue-500'>creatividad</span>
        </h1>
        <p className='text-gray-500 font-medium text-sm'>
          Más de 1000 clientes satisfechos. Deja esto en nuestras poderosas
          manos.
        </p>
        <img src='/assets/people1.webp' alt='people' />
        <div className='flex text-xs'>
          <div className='flex'>
            <span>
              ⭐️⭐️⭐️⭐️⭐️ <span className='font-semibold'>5.0</span>
            </span>
          </div>
          <span className='text-gray-500'>De 3,000+ reviews</span>
        </div>

        <Button>¡Agenda una llamada!</Button>
        <img src='/assets/payment.webp' alt='payment logos' />
      </div>

      <video
        muted
        loop
        autoPlay
        className='aspect-video max-w-[380px]'
        src='/assets/video.mp4'
      ></video>
    </section>
  );
}

const Button = ({ children }) => {
  return (
    <button className='py-2 px-4 bg-blue-500 text-white rounded-full font-bold my-4 hover:bg-blue-600 transition-all active:scale-95'>
      {children}
    </button>
  );
};
