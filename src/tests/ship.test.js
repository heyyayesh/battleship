import ship from '../ship';

let cruiser;
beforeEach(() => {
  cruiser = ship(3, 'cruiser');
  cruiser.hit(1);
  cruiser.hit(2);
});

test('name of the ship', () => {
  expect(cruiser.name).toBe('cruiser');
});

test('length of the ship', () => {
  expect(cruiser).toHaveLength(3);
});

test('does not allow hitting the same block twice', () => {
  expect(cruiser.hit(1)).toBe('invalid hit');
});

test('returns block on successful hit', () => {
  expect(cruiser.hit(0)).toBe(0);
});

test('sinking', () => {
  cruiser.hit(0);
  expect(cruiser.isSunk()).toBe(true);
});

test('dafault alignment is horizontal', () => {
  expect(cruiser.getAlignment()).toBe('h');
});

test('changing of alignment', () => {
  cruiser.toggleAlignment();
  expect(cruiser.getAlignment()).toBe('v');
});
