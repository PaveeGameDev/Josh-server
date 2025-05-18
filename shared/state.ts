let moveId = 0;

export const latestCoordinates = {
    x: 0,
    y: 0,
    id: 0
};

export function updateCoordinates(x: number, y: number) {
    moveId++;
    latestCoordinates.x = x;
    latestCoordinates.y = y;
    latestCoordinates.id = moveId;
}