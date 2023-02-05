import { LinkedIn, Twitter } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export type FooterProps = { title: string };

export const Footer: React.FC<FooterProps> = ({ title = '' }) => (
  <footer className="bg-gray-100">
    <Container>
      <div className="py-8">
        <div className="flex justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} {title}
          </div>{' '}
          <div className="flex items-center">
            <Link href="#">
              <GitHub className="text-gray-500 hover:text-gray-700 mx-2" />
            </Link>
            <Link href="#">
              <LinkedIn className="text-gray-500 hover:text-gray-700 mx-2" />
            </Link>
            <Link href="#">
              <Twitter className="text-gray-500 hover:text-gray-700 mx-2" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
