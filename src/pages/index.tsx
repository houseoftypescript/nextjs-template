import { NextPage } from 'next';

const HomePage: NextPage = () => (
  <main className="w-full h-screen flex flex-col items-center justify-center gap-4">
    <h1 className="text-9xl font-bold uppercase">Next.js</h1>
    <p className="text-3xl">TypeScript + Tailwind CSS + Material UI</p>
  </main>
);

export default HomePage;
