import Contact from '~/components/Contact';
import Hero from '~/components/Hero';
import NavBar from '~/components/NavBar';
import Section from '~/components/Section';
import { createTransport } from 'nodemailer';
import isEmail from 'validator/lib/isEmail';
import { useActionData } from 'react-router';

// backend:
export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  if (!isEmail(email)) {
    return { success: false, error: 'Proporciona un correo válido' };
  }
  const transport = createTransport({
    service: 'Gmail',
    auth: {
      user: 'contacto@fixter.org',
      pass: process.env.EMAIL_PASS,
    },
  });

  // a quien?
  const result = await transport.sendMail({
    subject: 'Hay un nuevo contacto 🥳',
    bcc: ['fixtergeek@gmail.com'],
    from: 'contacto@fixter.org',
    html: `
      <h2>Tienes un nuevo contacto ${name}</h2>
      <p>Email: ${email}</p>
      <p>${message}</p>
    `,
  });
  console.log(result);

  return { success: true };
};

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
        <p className='bg-green-200 text-green-900 py-4 fixed top-24 w-full text-center rounded-full'>
          ¡Gracias!, nos comunicaremos pronto
        </p>
      )}
      <main className='max-w-[720px] mx-auto py-24'>
        <Hero />
        <Section />
      </main>
      <div className='from-indigo-500 via-purple-500 to-violet-500 bg-gradient-to-r text-white'>
        <Contact error={actionData?.error} />
      </div>
    </div>
  );
}
