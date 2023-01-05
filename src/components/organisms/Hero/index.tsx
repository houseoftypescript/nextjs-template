import Link from 'next/link';
import { configs } from '../../../configs';
import { Background } from '../../atoms/Background';
import LandingButton from '../../atoms/LandingButton';
import { Section } from '../../atoms/Section';
import { Navbar } from '../../molecules/Navbar';

export const Hero: React.FC = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <header className="text-center">
        <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          {configs.hero.title}
          <br />
          <span className="text-primary-500">{configs.hero.subtitle}</span>
        </h1>
        <div className="text-2xl mt-4 mb-16">{configs.hero.description}</div>
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <LandingButton xl>Download Your Free Theme</LandingButton>
        </Link>
      </header>
    </Section>
  </Background>
);

export default Hero;
