import { VercelRequest, VercelResponse } from '@vercel/node';
import { updateCoordinates } from '../shared/state';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const { x, y } = req.body;

    if (Number.isInteger(x) && Number.isInteger(y)) {
        updateCoordinates(x, y);
        return res.status(200).send('Coordinates and ID updated');
    } else {
        return res.status(400).send('Invalid coordinates, must be integers');
    }
}