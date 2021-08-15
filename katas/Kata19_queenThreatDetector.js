const generateBoard = function (whiteQueen, blackQueen) {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board.push([]);
        for (let j = 0; j < 8; j++) {
            board[i].push(0);
        }
    }

    board[whiteQueen[0]][whiteQueen[1]] = 1;
    board[blackQueen[0]][blackQueen[1]] = 1;

    return board;
}

const queenThreat = function (generatedBoard) {
    let columns = [];
    let rows = [];
    let queensPosition = [];
    for (let i = 0; i < generatedBoard.length; i++) {
        for (let j = 0; j < generatedBoard[0].length; j++) {
            if (generatedBoard[i][j] === 1) {
                columns.push(j);
                rows.push(i);
                queensPosition.push([i, j]);
            }
        }
    }
    return rows[0] === rows[1] ||
        columns[0] === columns[1] ||
        Math.abs(queensPosition[0][0] - queensPosition[1][0]) === Math.abs(queensPosition[0][1] - queensPosition[1][1]);
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/**
 [
  [
    0, 0, 0, 0,
    0, 1, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    1, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0
  ]
]
true
 */

