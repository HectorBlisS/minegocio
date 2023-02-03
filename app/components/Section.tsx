export default function Section() {
  return (
    <section className='py-20'>
      <h2 className='font-bold text-3xl text-center mb-4'>
        ¿Por qué preferirnos?
      </h2>
      <p className='text-center max-w-[500px] mx-auto mb-20 text-sm'>
        Nuestros servicios están pensados para brindarte seguridad, calidad y
        buen servicio a difernecia de otros, además de tener costos eficiente
      </p>
      <article className='flex gap-4 justify-center'>
        <div className='bg-pink-100 p-4 rounded-lg'>
          <h3 className='font-medium text-lg'>Servicios tradicionales 😖</h3>
          <p className='py-2 text-sm'>❌ Poco atención al detalle</p>
          <p className='py-2 text-sm'>❌ Poco atención al detalle</p>
          <p className='py-2 text-sm'>❌ Poco atención al detalle</p>
          <img src='/assets/1.png' alt='camera' />
        </div>
        <div className='bg-green-100 p-4 rounded-lg'>
          <h3 className='font-medium text-lg'>Servicios tradicionales 😖</h3>
          <p className='py-2 text-sm'>✅ Poco atención al detalle</p>
          <p className='py-2 text-sm'>✅ Poco atención al detalle</p>
          <p className='py-2 text-sm'>✅ Poco atención al detalle</p>
          <img src='/assets/production-artist.png' alt='camera' />
        </div>
      </article>
    </section>
  );
}
