import Link from 'next/link'


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <span className="text-5xl">Hola Mundo!! QLQL</span>

      <Link href='/about'>About</Link>

    </div>
  );
}


