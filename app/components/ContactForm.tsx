import { Form } from '@remix-run/react';
import { Button } from './Hero';

export default function ContactForm({ error }) {
  return (
    <Form method='post' className='flex flex-col'>
      <TextField
        label='Tu nombre:'
        placeholder='Escribe tu nombre'
        name='name'
      />
      <TextField
        label='Tu correo:'
        placeholder='Escribe tu correo'
        name='email'
        error={error}
      />
      <TextField
        label='Tu mensaje:'
        placeholder='Escribe tu mensaje'
        name='message'
        type='textarea'
      />
      <Button>Enviar</Button>
    </Form>
  );
}

const TextField = ({
  name,
  placeholder,
  type = 'text',
  label,
  error,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  label: string;
  error?: string;
}) => {
  return (
    <>
      <label className='text-lg mb-4' htmlFor='name'>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className='border border-blue-500 px-4 py-2 text-lg text-slate-700 rounded-md mb-8'
          placeholder={placeholder}
          name={name}
          id={name}
          cols={30}
          rows={10}
        ></textarea>
      ) : (
        <input
          className='border border-blue-500 px-4 py-2 text-lg text-slate-700 rounded-md mb-8'
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
        />
      )}
      {error && <p className='text-red-500 text-lg'>{error}</p>}
    </>
  );
};
