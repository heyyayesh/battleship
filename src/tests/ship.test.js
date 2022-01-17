import ship from '../ship';

let cruiser;
beforeEach(() => {
  cruiser = ship(3);
  cruiser.hit(1);
  cruiser.hit(2);
});

test('length of the ship', () => {
  expect(cruiser).toHaveLength(3);
});

test('does not allow hitting the same block twice', () => {
  expect(cruiser.hit(1)).toBe('invalid hit');
});

test('returns block on successful hit', () => {
  expect(cruiser.hit(3)).toBe(3);
});

test('sinking', () => {
  cruiser.hit(3);
  expect(cruiser.isSunk()).toBe(true);
});