import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Footer from '../../../components/organisms/Footer';
import Navbar from '../../../components/organisms/Navbar';
import { NextPage } from 'next';
import useFetch from '@/hooks/use-fetch';

export type Country = {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  cca2: string;
  cca3: string;
  region: string;
  subregion: string;
};

const delay = (milliseconds: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
};

const fetchCountries = async (url: string): Promise<Country[]> => {
  return new Promise<Country[]>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const TablePage: NextPage = () => {
  const url = 'https://restcountries.com/v3.1/all';
  const { loading, data: countries } = useFetch<Country[]>(url);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        {loading ? (
          <Container className="py-8">
            <div className="h-full flex items-center justify-center">
              <div className="w-16 mx-auto">
                <CircularProgress size={'4rem'} className="mx-auto block" />
              </div>
            </div>
          </Container>
        ) : (
          <></>
        )}
        {countries || [] ? (
          <section className="py-8">
            <Container>
              <Paper className="border">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">ISO 3166-1</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Subregion</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(countries || [])
                        ?.sort((a: Country, b: Country) => {
                          if (a.region === b.region) {
                            if (a.subregion === b.subregion) {
                              return a.name.common > b.name.common ? 1 : -1;
                            }
                            return a.subregion > b.subregion ? 1 : -1;
                          }
                          return a.region > b.region ? 1 : -1;
                        })
                        .map((country: Country) => {
                          return (
                            <TableRow key={`country-${country.cca2}`}>
                              <TableCell>
                                {country.flag} {country.name.common}
                              </TableCell>
                              <TableCell align="center">
                                {country.cca2} - {country.cca3}
                              </TableCell>
                              <TableCell align="right">
                                {country.region}
                              </TableCell>
                              <TableCell align="right">
                                {country.subregion}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Container>
          </section>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default TablePage;
