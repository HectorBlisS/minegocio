import ContactForm from './ContactForm';

export default function Contact({ error }) {
  return (
    <section className='py-20 max-w-[420px] mx-auto'>
      <h2 className='text-3xl font-bold text-center'>
        ¿En qué podemos ayudarte?
      </h2>
      <p className='text-lg text-center font-medium mb-8'>
        No dudes en enviarnos tu mensaje y nos pondremos en contacto contigo,
        inmediatamente.
      </p>
      <ContactForm error={error} />
    </section>
  );
}
