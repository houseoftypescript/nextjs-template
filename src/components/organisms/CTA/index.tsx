import { Button, Container } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export type CTAProps = {
  title: string;
  subtitle: string;
};

export const CTA: React.FC<CTAProps> = ({ title = '', subtitle = '' }) => (
  <section id="cta" className="py-8 md:py-16">
    <Container>
      <div className="bg-primary-100 rounded-md">
        <div className="text-center flex flex-col md:text-left md:flex-row md:items-center md:justify-between p-8 gap-8">
          <div className="flex flex-col text-2xl font-semibold gap-2">
            <h1 className="text-gray-900">{title}</h1>
            <h1 className="text-primary-500">{subtitle}</h1>
          </div>
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
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
