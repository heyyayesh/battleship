const ship = (length) => {
  const shipBlocks = [];
  for (let i = 0; i < length; i += 1) {
    shipBlocks.push(1);
  }

  let damage = 0;

  function isSunk() {
    return (damage === length);
  }

  function hit(coord) {
    if (shipBlocks[coord - 1] === 0) {
      return 'invalid hit';
    }

    if (damage < length) {
      shipBlocks[coord - 1] = 0;
      damage += 1;
      return coord;
    }

    return 'could not hit';
  }

  return {
    length,
    isSunk,
    hit,
  };
};

export default ship;
