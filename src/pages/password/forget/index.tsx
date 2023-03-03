import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SolidSVG from '../../../assets/solid.svg';

const ForgetPasswordPage: NextPage = () => {
  const [username, setUsername] = useState('');

  const forget = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="border shadow-2xl px-8 py-16 rounded max-w-lg w-full">
          <form onSubmit={forget}>
            <div className="flex flex-col gap-8">
              <div className="w-32 mx-auto">
                <Link href="/">
                  <Image src={SolidSVG} alt="Next.js" />
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="uppercase text-4xl font-bold">Forget</h1>
                <p className="text-gray-500">
                  Enter username to reset password
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Send Email
                </Button>
                <Link
                  href="/auth/sign-in"
                  className="text-blue-500 text-center"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default ForgetPasswordPage;
