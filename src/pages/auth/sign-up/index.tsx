import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SolidSVG from '../../../assets/solid.svg';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const signUp = (event: any) => {
    event.preventDefault();
    if (username === 'username' && password === 'password') {
      router.push(`${base}/apps/table`);
    }
  };

  return (
    <Container>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="border shadow-2xl px-8 py-16 rounded max-w-lg w-full">
          <form onSubmit={signUp}>
            <div className="flex flex-col gap-8">
              <div className="w-32 mx-auto">
                <Link href="/">
                  <Image src={SolidSVG} alt="Next.js" />
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="uppercase text-4xl font-bold">Welcome</h1>
                <p className="text-gray-500">Create new account to continue</p>
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
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <FormControlLabel control={<Checkbox />} label="Remember" />
                  <Link href="/password/forget">
                    <p className="text-blue-500">
                      Forget{' '}
                      <span className="hidden md:inline">Your Password</span>?
                    </p>
                  </Link>
                </div>
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
                <Link
                  href="/auth/sign-in"
                  className="text-blue-500 text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default SignUpPage;
