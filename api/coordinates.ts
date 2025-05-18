// api/coordinates.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { state } from '../shared/state';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        res.status(200).json(state);
    } else {
        res.status(405).end('Method Not Allowed');
    }
}