import player from '../player';

const p = player();

beforeEach(() => {
  p.placeFleetRandomly();
});

afterEach(() => {
  p.board.clearBoard();
});

test('fleet has 5 ships', () => {
  expect(p.fleet).toHaveLength(5);
});

test('board has total 15 ship blocks', () => {
  expect(p.board.getTotalShipBlocks()).toBe(17);
});

test('there must be a carrier', () => {
  let isPresent = false;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      // eslint-disable-next-line no-continue
      if (!(p.board.getStatus(i, j).hasShip)) continue;
      if (p.board.getStatus(i, j).vehicle.length === 5 && p.board.getStatus(i, j).vehicle.name === 'carrier') isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
});

test('there must be a battleship', () => {
  let isPresent = false;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      // eslint-disable-next-line no-continue
      if (!(p.board.getStatus(i, j).hasShip)) continue;
      if (p.board.getStatus(i, j).vehicle.length === 4 && p.board.getStatus(i, j).vehicle.name === 'battleship') isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
});

test('there must be a cruiser', () => {
  let isPresent = false;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      // eslint-disable-next-line no-continue
      if (!(p.board.getStatus(i, j).hasShip)) continue;
      if (p.board.getStatus(i, j).vehicle.length === 3 && p.board.getStatus(i, j).vehicle.name === 'cruiser') isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
});

test('there must be a submarine', () => {
  let isPresent = false;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      // eslint-disable-next-line no-continue
      if (!(p.board.getStatus(i, j).hasShip)) continue;
      if (p.board.getStatus(i, j).vehicle.length === 3 && p.board.getStatus(i, j).vehicle.name === 'submarine') isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
});

test('there must be a destroyer', () => {
  let isPresent = false;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      // eslint-disable-next-line no-continue
      if (!(p.board.getStatus(i, j).hasShip)) continue;
      if (p.board.getStatus(i, j).vehicle.length === 2 && p.board.getStatus(i, j).vehicle.name === 'destroyer') isPresent = true;
    }
  }

  expect(isPresent).toBe(true);
});

test('player is not lost at the beginning', () => {
  expect(p.hasLost()).toBe(false);
});

test('player loses if all ships sink', () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (!p.board.getStatus(i, j).hasShip) continue;
      p.recieveAttack(i, j);
    }
  }

  expect(p.hasLost()).toBe(true);
});
