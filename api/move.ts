// api/move.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { state } from '../shared/state';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'POST') {
        const { x, y } = req.body;
        if (typeof x === 'number' && typeof y === 'number') {
            state.x = x;
            state.y = y;
            state.id++;
            res.status(200).json(state);
        } else {
            res.status(400).json({ error: 'Invalid coordinates' });
        }
    } else {
        res.status(405).end('Method Not Allowed');
    }
}