import gameBoard from '../gameBoard';
import ship from '../ship';

let cruiser;
let gb;

beforeEach(() => {
  cruiser = ship(3, 'cruiser');
  gb = gameBoard();
});

afterEach(() => {
  gb.clearBoard();
});

test('places ship horizontally', () => {
  gb.placeShip(cruiser, 0, 0);
  expect(gb.getStatus(0, 0).hasShip).toBe(true);
  expect(gb.getStatus(1, 0).hasShip).toBe(true);
  expect(gb.getStatus(2, 0).hasShip).toBe(true);
});

test('places ship vertically', () => {
  cruiser.toggleAlignment();
  gb.placeShip(cruiser, 7, 5);
  expect(gb.getStatus(7, 5).hasShip).toBe(true);
  expect(gb.getStatus(7, 5).hasShip).toBe(true);
  expect(gb.getStatus(7, 6).hasShip).toBe(true);
});

test('does not allow placing ship after horizontal limit', () => {
  gb.placeShip(cruiser, 8, 0);
  expect(gb.getStatus(8, 0).hasShip).toBe(false);
});

test('does not allow placing ship after vertical limit', () => {
  cruiser.toggleAlignment();
  gb.placeShip(cruiser, 0, 8);
  expect(gb.getStatus(0, 8).hasShip).toBe(false);
});

test('hits successfully', () => {
  gb.placeShip(cruiser, 0, 0);
  gb.recieveAttack(0, 0);
  expect(gb.getStatus(0, 0).isHit).toBe(true);
});

test('misses if no ship present', () => {
  gb.recieveAttack(5, 6);
  expect(gb.getStatus(5, 6).isMissed).toBe(true);
  expect(gb.getStatus(5, 7).isMissed).toBe(false);
});

test('hitting one block of ship does not sink it', () => {
  gb.placeShip(cruiser, 0, 0);
  gb.recieveAttack(0, 0);
  expect(cruiser.isSunk()).toBe(false);
});

test('hitting all the blocks of the ship sinks it', () => {
  gb.placeShip(cruiser, 0, 0);
  gb.recieveAttack(0, 0);
  gb.recieveAttack(1, 0);
  gb.recieveAttack(2, 0);
  expect(cruiser.isSunk()).toBe(true);
});

test('does not allow placing on other ships', () => {
  gb.placeShip(cruiser, 0, 0);
  const submarine = ship(5, 'submarine');
  expect(gb.placeShip(submarine, 2, 0)).toBe('failed');
});

test('total no of ship blocks', () => {
  const submarine = ship(4, 'submarine');
  gb.placeShip(cruiser, 0, 0);
  gb.placeShip(submarine, 0, 5);
  expect(gb.getTotalShipBlocks()).toBe(7);
});

test('if all the ships have been sunk', () => {
  const submarine = ship(4, 'submarine');
  gb.placeShip(cruiser, 1, 1);
  submarine.toggleAlignment();
  gb.placeShip(submarine, 5, 6);

  gb.recieveAttack(1, 1);
  gb.recieveAttack(2, 1);
  gb.recieveAttack(3, 1);

  gb.recieveAttack(5, 6);
  gb.recieveAttack(5, 7);
  gb.recieveAttack(5, 8);
  gb.recieveAttack(5, 9);

  expect(gb.isAllSunk()).toBe(true);
});
