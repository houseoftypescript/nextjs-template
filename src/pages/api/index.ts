import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
};

const handler = (_request: NextApiRequest, response: NextApiResponse<Data>) => {
  response.status(200).json({ status: 'healthy' });
};

export default handler;
