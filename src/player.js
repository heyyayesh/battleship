import gameBoard from './gameBoard';
import ship from './ship';

const player = (name) => {
  const playerName = name;

  const carrier = ship(5, 'carrier');
  const battleship = ship(4, 'battleship');
  const cruiser = ship(3, 'cruiser');
  const submarine = ship(3, 'submarine');
  const destroyer = ship(2, 'destroyer');

  const fleet = [carrier, battleship, cruiser, submarine, destroyer];
  const board = gameBoard();

  function hasLost() {
    return fleet.every((sh) => sh.isSunk);
  }

  function randomizeShips() {
    if (Math.random() > 0.5) carrier.toggleAlignment();
    if (Math.random() > 0.5) battleship.toggleAlignment();
    if (Math.random() > 0.5) cruiser.toggleAlignment();
    if (Math.random() > 0.5) submarine.toggleAlignment();
    if (Math.random() > 0.5) destroyer.toggleAlignment();
  }

  // len - mul
  // 1 - 10
  // 2 - 9
  // 3 - 8
  // 4 - 7
  // 5 - 6
  // 6 - 5
  // 7 - 4
  // 8 - 3
  // 9 - 2
  // 10 - 1

  function placeVehicle(vehicle) {
    let x;
    let y;
    let isAllowed = true;
    if (vehicle.getAlignment() === 'h') {
      x = Math.floor(Math.random() * (11 - vehicle.length));
      y = Math.floor(Math.random() * 10);
    } else if (vehicle.getAlignment() === 'v') {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * (11 - vehicle.length));
    }

    if (vehicle.getAlignment() === 'h') {
      for (let i = 0; i < vehicle.length; i += 1) {
        if (board.getStatus(x + i, y).hasShip) isAllowed = false;
      }
    }

    if (vehicle.getAlignment() === 'v') {
      for (let i = 0; i < vehicle.length; i += 1) {
        if (board.getStatus(x, y + i).hasShip) isAllowed = false;
      }
    }

    if (!isAllowed) placeVehicle(vehicle);
    else board.placeShip(vehicle, x, y);
  }

  function placeFleetRandomly() {
    randomizeShips();

    placeVehicle(carrier);
    placeVehicle(battleship);
    placeVehicle(cruiser);
    placeVehicle(submarine);
    placeVehicle(destroyer);
  }

  return {
    playerName,
    fleet,
    board,
    hasLost,
    placeFleetRandomly,
  };
};

export default player;
