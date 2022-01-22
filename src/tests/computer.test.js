import computer from '../computer';
import player from '../player';

const comp = computer();
const p = player();

test('comp has a name i.e Boteshwar', () => {
  expect(comp.playerName).toBe('Boteshwar');
});

test('computer attacks', () => {
  expect(comp.computerAttack(p)).toBe('success');
});
