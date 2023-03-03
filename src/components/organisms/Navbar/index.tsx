import Container from '@mui/material/Container';
import Link from 'next/link';
import UserMenu from '../../molecules/UserMenu';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="py-8 border-b">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 uppercase">
              <h1 className="text-2xl">
                <Link href="/apps">Solid</Link>
              </h1>
              <Link href="/apps/chart">Chart</Link>
              <Link href="/apps/table">Table</Link>
              <Link href="/apps/calendar">Calendar</Link>
            </div>
            <div>
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
