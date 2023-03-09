import type { NextApiRequest, NextApiResponse } from 'next';

import sendGrid from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY)
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const x = await sendGrid.send({
      to: 'lukas.ldrn@gmail.com',
      from: 'contact@lukaslaudrain.fr',
      subject: `Contact: ${req.body.name} (${req.body.mail})`,
      html: req.body.message
    });
  } catch (error: any) {
    return res
      .status(error.statusCode || error.code || 500)
      .json({ error: error.message || 'Erreur' });
  }

  return res.status(200).json({ error: undefined });
}
