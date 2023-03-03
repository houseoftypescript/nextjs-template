import Button from '@mui/material/Button';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => (
  <main className="w-full h-screen flex items-center justify-center">
    <div className="flex flex-col gap-4 text-center uppercase">
      <h1 className="text-9xl font-bold uppercase">Next.js</h1>
      <p className="text-3xl">TypeScript + Tailwind CSS + Material UI</p>
      <Link href="/auth/sign-in">
        <Button variant="contained" fullWidth>
          Sign In
        </Button>
      </Link>
    </div>
  </main>
);

export default HomePage;
