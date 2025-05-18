import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Define a TypeScript interface for the coordinates
interface Coordinates {
    x: number;
    y: number;
    id: number;
}

let moveId = 0;
let latestCoordinates: Coordinates = { x: 0, y: 0, id: moveId };

app.use(express.json());

app.post('/move', (req: Request, res: Response) => {
    const { x, y } = req.body;

    if (Number.isInteger(x) && Number.isInteger(y)) {
        moveId += 1;
        latestCoordinates = { x, y, id: moveId };
        res.status(200).send('Coordinates and ID updated');
    } else {
        res.status(400).send('Invalid coordinates, must be integers');
    }
});

app.get('/coordinates', (req: Request, res: Response) => {
    res.json(latestCoordinates);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});