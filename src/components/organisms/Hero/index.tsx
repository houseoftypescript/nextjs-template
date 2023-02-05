import { Button, Container } from '@mui/material';
import Link from 'next/link';
import Navbar from '../../molecules/Navbar';

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const Hero: React.FC<HeroProps> = ({
  title = '',
  subtitle = '',
  description = '',
}) => (
  <div className="bg-gray-100">
    <Navbar />
    <Container>
      <div className="py-16 md:py-32">
        <header className="flex flex-col gap-8 text-center">
          <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            {title}
            <br />
            <span className="text-primary-500">{subtitle}</span>
          </h1>
          <div className="text-2xl">{description}</div>
          <Link href="#">
            <Button
              type="button"
              variant="contained"
              className="font-extrabold px-6 py-4"
              sx={{ backgroundColor: 'rgb(3, 169, 244)' }}
            >
              Download App
            </Button>
          </Link>
        </header>
      </div>
    </Container>
  </div>
);

export default Hero;
