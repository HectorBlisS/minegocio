import Hero from '~/components/Hero';
import NavBar from '~/components/NavBar';
import Section from '~/components/Section';
import { useActionData } from 'react-router';

// backend:

export default function Index() {
  const actionData = useActionData();
  return (
    <div
      style={{
        background: `
       repeating-linear-gradient(90deg, hsla(206,0%,65%,0.05) 0px, hsla(206,0%,65%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(206,0%,65%,0.05) 0px, hsla(206,0%,65%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(206,0%,65%,0.07) 0px, hsla(206,0%,65%,0.07) 1px,transparent 1px, transparent 52px),repeating-linear-gradient(90deg, hsla(206,0%,65%,0.07) 0px, hsla(206,0%,65%,0.07) 1px,transparent 1px, transparent 52px),linear-gradient(45deg, rgb(255,255,255),rgb(255,255,255))
      `,
      }}
    >
      <NavBar />
      {actionData?.success && (
        <p className='bg-green-200 fixed top-24 w-full text-center py-4 rounded-full text-green-900'>
          ¡Gracias por tu mensaje!, nos pondremos en contacto enseguida
        </p>
      )}
      <main className='max-w-[720px] mx-auto py-24'>
        <Hero />
        <Section />
      </main>
    </div>
  );
}
