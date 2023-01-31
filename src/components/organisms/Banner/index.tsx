import Link from 'next/link';
import React from 'react';
import { configs } from '../../../configs';
import LandingButton from '../../atoms/LandingButton';
import { Section } from '../../atoms/Section';

export const Banner: React.FC = () => (
  <Section>
    <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{configs.banner.title}</div>
        <div className="text-primary-500">{configs.banner.subtitle}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <LandingButton>Get Started</LandingButton>
        </Link>
      </div>
    </div>
  </Section>
);

export default Banner;
