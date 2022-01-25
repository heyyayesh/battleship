import player from './player';
import computer from './computer';

const gameLoop = () => {
  const gameOverDiv = document.querySelector('.game-over');
  const winnerText = document.querySelector('.winner-text');
  const playAgainBtn = document.querySelector('#playAgain');
  const reviewGameBtn = document.querySelector('#reviewGame');
  const content = document.querySelector('.content');
  const restartBtn = document.getElementById('restart');

  function createPlayerBoard(playerType) {
    const board = document.createElement('div');
    if (playerType === 'player') board.classList.add('board', 'player');
    if (playerType === 'enemy') board.classList.add('board', 'enemy');

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const block = document.createElement('div');
        if (playerType === 'player') block.classList.add('block', 'player');
        if (playerType === 'enemy') {
          block.classList.add('block', 'enemy');
          block.style.cursor = 'pointer';
        }

        block.dataset.coords = `${j}${i}`;

        board.appendChild(block);
      }
    }

    content.appendChild(board);
  }

  function getBlock(boardType, x, y) {
    const xyStr = x.toString() + y.toString();

    let blocksArr;
    if (boardType === 'player') { blocksArr = document.querySelectorAll('.block.player'); }
    if (boardType === 'enemy') { blocksArr = document.querySelectorAll('.block.enemy'); }
    return (Array.from(blocksArr).filter((block) => block.dataset.coords === xyStr))[0];
  }

  function addFleet(plr) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (!(plr.board.getStatus(i, j).hasShip)) continue;
        const blockClass = plr.board.getStatus(i, j).vehicle.name;
        getBlock('player', i, j).classList.add(blockClass);
      }
    }
  }

  function render(p, c, board) {
    if (board.classList.contains('player')) {
      console.log('rendering p board');
      for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
          if (p.board.getStatus(i, j).isHit) {
            console.log('hit p board');
            getBlock('player', i, j).classList.add('hit');
          }
          if (p.board.getStatus(i, j).isMissed) {
            console.log('missed p board');
            getBlock('player', i, j).classList.add('miss');
          }
          if (p.board.getStatus(i, j).hasShip && p.board.getStatus(i, j).vehicle.isSunk()) {
            getBlock('player', i, j).classList.add('sunk');
          }
        }
      }
    }

    if (board.classList.contains('enemy')) {
      for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
          if (c.board.getStatus(i, j).isMissed) {
            getBlock('enemy', i, j).classList.add('miss');
          }
          if (c.board.getStatus(i, j).isHit) {
            getBlock('enemy', i, j).classList.add('hit');
          }
          if (c.board.getStatus(i, j).hasShip && c.board.getStatus(i, j).vehicle.isSunk()) {
            getBlock('enemy', i, j).classList.add('sunk');
          }
        }
      }
    }
  }

  function clear() {
    while (content.firstChild) content.removeChild(content.firstChild);
  }

  function startGame() {
    clear();

    const p = player('temp');
    const c = computer();
    let pTurn = true;

    p.placeFleetRandomly();
    c.placeFleetRandomly();

    createPlayerBoard('player');
    createPlayerBoard('enemy');

    addFleet(p);

    const playerBoard = document.querySelector('.board.player');
    const enemyBoard = document.querySelector('.board.enemy');

    function isGameOver() {
      return p.hasLost() || c.hasLost();
    }

    function checkWinner() {
      if (!isGameOver) return null;
      return p.hasLost() ? c : p;
    }

    function computerMove() {
      if (pTurn) return;
      if (isGameOver()) {
        winnerText.textContent = `${checkWinner() === p ? 'You Win!' : 'Computer Wins!'}`;
        gameOverDiv.classList.add('active');
        return;
      }

      setTimeout(() => {
        c.computerAttack(p);
        pTurn = true;
        render(p, c, playerBoard);
        console.log('Your Turn');
      }, 500);
    }

    const enemyBlocks = document.querySelectorAll('.block.enemy');
    enemyBlocks.forEach((block) => {
      block.addEventListener('click', (e) => {
        const x = Number(e.target.dataset.coords.slice('')[0]);
        const y = Number(e.target.dataset.coords.slice('')[1]);

        if (isGameOver()) {
          winnerText.textContent = `${checkWinner() === p ? 'You Win!' : 'Computer Wins!'}`;
          gameOverDiv.classList.add('active');
          return;
        }
        if (!pTurn) return;
        if (c.recieveAttack(x, y) === 'invalid') return;
        render(p, c, enemyBoard);
        pTurn = false;
        console.log('Computers Turn');
        computerMove();
      });
    });
  }

  function restart() {
    startGame();
  }

  playAgainBtn.addEventListener('click', () => {
    gameOverDiv.classList.remove('active');
    startGame();
  });

  reviewGameBtn.addEventListener('click', () => {
    gameOverDiv.classList.remove('active');
  });

  restartBtn.addEventListener('click', restart);

  return {
    startGame,
  };
};

export default gameLoop;
