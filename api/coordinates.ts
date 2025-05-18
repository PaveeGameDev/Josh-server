import { VercelRequest, VercelResponse } from '@vercel/node';
import { latestCoordinates } from '../shared/state';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json(latestCoordinates);
}