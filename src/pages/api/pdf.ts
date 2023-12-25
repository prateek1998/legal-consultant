// pages/api/pdf.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query;

  if (!file) {
    return res.status(400).json({ error: 'File parameter is required' });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'assets','orders', file as string);
    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Content-Disposition', `inline; filename=${file}`);

    res.status(200).end(fileBuffer);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'File not found' });
  }
}
