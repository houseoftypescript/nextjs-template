import Link from 'next/link';
import { Logo } from '../../atoms/Logo';

export const Navbar: React.FC = () => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <Logo xl />
      </Link>
    </div>
    <nav>
      <ul className="flex items-center font-medium text-xl text-gray-800">
        <li className="mr-5">
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
