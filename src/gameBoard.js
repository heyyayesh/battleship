// Empty object means empty block
// Ship object means contains a ship block
// 0 means missed

const gameBoard = () => {
  // defalut object to be placed in every block
  function defaultObj() {
    return {
      vehicle: null,
      hasShip: false,
      shipBlock: -1,
      isHit: false,
      isMissed: false,
    };
  }

  // A 2D array that either contains empty objects or ship objects
  const gameBoardArr = new Array(10);
  for (let i = 0; i < 10; i += 1) {
    gameBoardArr[i] = new Array(10);
    for (let j = 0; j < 10; j += 1) {
      gameBoardArr[i][j] = defaultObj();
    }
  }

  // clears the board completely
  function clearBoard() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        gameBoardArr[i][j] = defaultObj();
      }
    }
  }

  // takes a ship and a pair of coords and places the ship there, returns 'success' or 'failed'
  function placeShip(ship, x, y) {
    const len = ship.length;

    // doesn't allow placing beyond the board
    if ((ship.getAlignment() === 'h' && x > 10 - len) || y > 10) {
      return 'failed';
    }

    if ((ship.getAlignment() === 'v' && y > 10 - len) || x > 10) {
      return 'failed';
    }

    // does not allow placing on other ships
    if (gameBoardArr[x][y].hasShip) return 'failed';

    // places the ship
    if (ship.getAlignment() === 'h') {
      for (let i = 0; i < len; i += 1) {
        gameBoardArr[x + i][y].vehicle = ship;
        gameBoardArr[x + i][y].shipBlock = i;
        gameBoardArr[x + i][y].hasShip = true;
      }
      return 'success';
    }

    if (ship.getAlignment() === 'v') {
      for (let i = 0; i < len; i += 1) {
        gameBoardArr[x][y + i].vehicle = ship;
        gameBoardArr[x][y + i].shipBlock = i;
        gameBoardArr[x][y + i].hasShip = true;
      }
      return 'success';
    }

    return 'failed';
  }

  // helper function that checks if a block is empty
  function isBlockEmpty(x, y) {
    return !((gameBoardArr[x][y]).hasShip);
  }

  // takes a pair of coords and attacks that block
  function recieveAttack(x, y) {
    if (isBlockEmpty(x, y)) {
      gameBoardArr[x][y].isMissed = true;
    } else {
      (gameBoardArr[x][y].vehicle).hit(gameBoardArr[x][y].shipBlock);
      gameBoardArr[x][y].isHit = true;
    }
  }

  // returns the status of a block
  function getStatus(x, y) {
    return gameBoardArr[x][y];
  }

  return {
    getStatus,
    placeShip,
    clearBoard,
    recieveAttack,
  };
};

export default gameBoard;
