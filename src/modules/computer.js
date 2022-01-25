import player from './player';

const computer = () => {
  const prototype = player('Boteshwar');

  function generateRandomCoords() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }

  function computerAttack(opponent) {
    const coords = generateRandomCoords();
    const x = coords[0];
    const y = coords[1];

    if (opponent.board.getStatus(x, y).isHit) computerAttack(opponent);
    if (opponent.board.getStatus(x, y).isMissed) computerAttack(opponent);

    opponent.recieveAttack(x, y);
    console.log(x, y);
    return 'success';
  }

  return {
    ...prototype,
    computerAttack,
  };
};

export default computer;
