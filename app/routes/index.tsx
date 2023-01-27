import Hero from '~/components/Hero';

export default function Index() {
  return (
    <div
      style={{
        background: `
       repeating-linear-gradient(90deg, hsla(206,0%,65%,0.05) 0px, hsla(206,0%,65%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(206,0%,65%,0.05) 0px, hsla(206,0%,65%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(206,0%,65%,0.07) 0px, hsla(206,0%,65%,0.07) 1px,transparent 1px, transparent 52px),repeating-linear-gradient(90deg, hsla(206,0%,65%,0.07) 0px, hsla(206,0%,65%,0.07) 1px,transparent 1px, transparent 52px),linear-gradient(45deg, rgb(255,255,255),rgb(255,255,255));
      `,
      }}
    >
      <main className='max-w-[720px] mx-auto py-20'>
        <Hero />
      </main>
    </div>
  );
}
