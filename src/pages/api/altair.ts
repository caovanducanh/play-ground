import { NextApiRequest, NextApiResponse } from 'next';
import renderAltair from 'altair-static';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const html = renderAltair({
    endpointURL: '/api/graphql', // Mặc định, user có thể đổi URL trong UI
    initialSettings: {
      theme: 'dark',
    },
  });
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
