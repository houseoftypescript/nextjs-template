import useFetch from '@/hooks/use-fetch';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import LayoutTemplate from '../../../templates/LayoutTemplate';

const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type HistoryData = { price: string; timestamp: number };

type HistoryResponse = {
  status: string;
  data: {
    change: string;
    history: HistoryData[];
  };
};

type TimePeriod =
  | '1h'
  | '3h'
  | '12h'
  | '24h'
  | '7d'
  | '30d'
  | '3m'
  | '1y'
  | '3y'
  | '5y';

type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
};

type CoinsResponse = {
  status: string;
  data: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: Coin[];
  };
};

export const ChartPage: NextPage = () => {
  const [coinUuid, setCoinUuid] = useState<string>('');

  const { data: coinsResponse } = useFetch<CoinsResponse>(
    'https://api.coinranking.com/v2/coins'
  );
  const { loading: historyLoading, data: historyResponse } =
    useFetch<HistoryResponse>(
      `https://api.coinranking.com/v2/coin/${coinUuid}/history?timePeriod=5y`
    );

  return (
    <LayoutTemplate>
      <Container className="py-8">
        <Paper>
          <div className="flex flex-col gap-8 p-8">
            <FormControl fullWidth>
              <InputLabel id="coin-select-label">Coin</InputLabel>
              <Select
                id="coin-select"
                labelId="coin-select-label"
                value={coinUuid}
                label="Coin"
                onChange={(event: SelectChangeEvent) => {
                  setCoinUuid(event.target.value);
                }}
              >
                {(coinsResponse?.data.coins.splice(0, 10) || []).map(
                  (coin: Coin) => {
                    return (
                      <MenuItem key={coin.uuid} value={coin.uuid}>
                        {coin.name}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
            </FormControl>
            {historyLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-16 mx-auto">
                  <CircularProgress size={'4rem'} className="mx-auto block" />
                </div>
              </div>
            ) : (
              <>
                {historyResponse ? (
                  <ReactApexCharts
                    type="line"
                    options={{
                      chart: { animations: { enabled: false } },
                      noData: {
                        text: '',
                        align: 'center',
                        verticalAlign: 'middle',
                      },
                      title: {
                        text: 'Price by Day',
                        align: 'left',
                      },
                      xaxis: {
                        categories: (
                          historyResponse?.data.history
                            .splice(0, 30)
                            .reverse() || []
                        ).map(({ timestamp }: HistoryData) => {
                          return new Date(timestamp * 1000)
                            .toISOString()
                            .split('T')[0];
                        }),
                      },
                    }}
                    series={[
                      {
                        name: 'Price',
                        data: (
                          historyResponse?.data.history
                            .splice(0, 30)
                            .reverse() || []
                        ).map(({ price }: HistoryData) => {
                          return parseFloat(parseFloat(price).toFixed(2));
                        }),
                      },
                    ]}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </Paper>
      </Container>
    </LayoutTemplate>
  );
};

export default ChartPage;
