import { NextPage } from 'next';

export const NotFoundPage: NextPage = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="uppercase text-9xl font-bold">404</h1>
      <p className="uppercase text-3xl">Page Not Found</p>
    </main>
  );
};

export default NotFoundPage;
