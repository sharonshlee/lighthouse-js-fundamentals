const finalPosition = function (moves) {
  let finalMove = [];
  let x = 0, y = 0;

  for (const move of moves) {
    if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    } else if (move === 'west') {
      x -= 1;
    } else if (move === 'east') {
      x += 1;
    }
  }
  finalMove.push(x);
  finalMove.push(y);
  return finalMove;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

console.log(finalPosition(moves));