const ship = (length, name) => {
  const shipBlocks = [];
  for (let i = 0; i < length; i += 1) {
    shipBlocks.push(1);
  }

  let alignment = 'h';
  function toggleAlignment() {
    alignment = (alignment === 'h') ? 'v' : 'h';
  }
  const getAlignment = () => alignment;

  let damage = 0;

  function isSunk() {
    return (damage === length);
  }

  function hit(coord) {
    if (coord > length - 1) return 'invalid hit';

    if (damage === length) return 'invalid hit';

    if (shipBlocks[coord] === 0) return 'invalid hit';

    if (damage < length) {
      shipBlocks[coord] = 0;
      damage += 1;
      return coord;
    }

    return 'could not hit';
  }

  return {
    name,
    length,
    isSunk,
    hit,
    getAlignment,
    toggleAlignment,
  };
};

export default ship;
