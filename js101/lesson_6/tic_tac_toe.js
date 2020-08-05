const readline = require('readline-sync');

/*
Bried description of logic
1. display the initial board
2. ask the user to mark a square
3. computer marks a square
4. display the updated board state
5. if it's a winning board display the winner
6. if the board is full display a tie
7. if neither player won and the board is not full go to #2
8. play again?
9. if yes go to #1
10. goodbye!


*/
function displayBoard(arr) {
  arr.forEach((subArr,index) => {
    let row = '';
    let space = ' ';
    let midRow = '-';
    subArr.forEach((spot,index) => {
      if (index !== 2) {
        row += space.repeat(2) + spot + space.repeat(2) + '|';
      } else row += space.repeat(2) + spot + space.repeat(2);
    });
    if (index !== 2) {
      midRow += '-'.repeat(row.length);
    } else midRow = " ";
    console.log(row);
    console.log(midRow);
  });
}
const isPlaying = (playing) => {
  if (typeof playing === 'string') {
    let answer = playing.toLowerCase().slice(0,1);
    // TODO convert to ES6 => ? :
    if (answer === 'y') {
      return true;
    } else {
      return false;
    }
  } else {
    isPlaying(readline.question('Try again!'));
  }
};


let playing = isPlaying(readline.question('Would you like to play? Yes or No? \n'));

const isValidChoice = (letter) => {
  while (true) {
    if (letter.toUpperCase() === 'X' || letter.toUpperCase() === 'O') {
      break;
    } else {
      letter = readline.question('Try again with: X or O!\n');
    }
  }
  return letter.toUpperCase();
};

const isValidSpot = (row,col,board) => {
  // need to ensure that the user picked valid
  if ([1,2,3].includes(row)
  && [1,2,3].includes(col)
  && board[row - 1][col - 1] === ' ') {
    // if they are both numbers that are 1 2 or 3
    return true;
  } else return false;
};

const computerChoice = (arr,userChoice) => {
  // input the current board array and the current letter picked by the user
  // output a new array with the computer choice filled in
  let newArr = arr.slice();
  let row = Math.floor(Math.random() * arr[0].length);
  let col = Math.floor(Math.random() * arr[0].length);
  while (true) {
    if (newArr[row][col] === ' ') {
      // check to make sure the spot is blank (not taken by user)
      break;
    } else {
      // if not, reassign
      row = Math.floor(Math.random() * arr[0].length);
      col = Math.floor(Math.random() * arr[0].length);
    }
  }
  newArr[row][col] = ["X","O"].filter( elm => elm !== userChoice)[0];
  return newArr;
};
const foundWinner = (board) => {
  //input - double nested array representing the board
  //output - a string signifying the winner "" or "X" or "O"
  let winner = '';
  board.forEach((subArr) => {
    if (subArr.reduce((prev,curr) => prev + curr) === 'XXX' || subArr
      .reduce((prev,curr) => prev + curr) === 'OOO') {
      winner += subArr.reduce((prev,curr) => prev + curr).slice(0,1);
    }
  });
  console.log('The center of the board:',board[1][1]);
  if (board[0][0] !== " "  && board[0][0] === board[1][0] === board[2][0]) {
    winner += board[0][0];
  } else if (board[0][1] !== " " && board[0][1] === board[1][1] === board[2][1] ) {
    winner += board[0][1];
  } else if ( board[0][2] !== " " && board[0][2] === board[1][2] === board[2][2] ) {
    winner += board[0][2];
  } else if (board[0][0] !== " " && board[0][0] === board[1][1] === board[2][2] ) {
    winner += "X";
  } else if (board[2][0] !== " " && board[2][0] === board[1][1] === board[0][2] ) {
    winner += board[2][0];
  } console.log("winner is:", winner);
  return winner;
};
const isFinished = (board) => {
  //takes a board, checks each spot, if empty spot exists
  // if empty spot exists return false
  board.forEach((subArr) => {
    subArr.forEach((spot) => {
      if (spot === " ") {
        return false;
      }
    });
  });
  return true;
};
function playerChoosesSquare(board,userChoice) {
  let row = readline.question(`Pick the row you would like to put ${userChoice} on: 1,2,3 ?\n`);
  let col = readline.question(`Pick the column you would like to put ${userChoice} on: 1,2,3 ?\n`);
  while (true) {
    if (isValidSpot(Number(row),Number(col),board)) {
      break;
    } else {
      console.log('Before reassigning:',board);
      row = readline.question(`Row is wrong... try again using 1,2,3?\n`);
      col = readline.question(`Column is wrong... try again using 1,2,3?\n`);
    }
  }
  board[row - 1][col - 1] = userChoice;
  return board;
}
function initializeBoard () {
  let emptyBoard = [[" "," "," "],[" "," "," "],[" "," "," "]];
  return emptyBoard;
}

let board = initializeBoard();
let userChoice = isValidChoice(readline.
  question('Pick a letter for the game: X or O\n'));

while (playing) {
  displayBoard(board);
  board = playerChoosesSquare(board,userChoice);
  console.log('Board with your selection:');
  displayBoard(board);
  let computer = computerChoice(board,userChoice);
  console.log('Computer is thinking...'); // for stylistic effect

  console.log('Board with computer selection:');
  setTimeout(() => displayBoard(computer), 3000);
  if (foundWinner(board)) {
    console.log('Winner:',foundWinner(board));
    break;
  }
}
/*
if (board[0][0] === board[1][0] === board[2][0] && board[0][0] !== " ") {
  winner += board[0][0];
} else if (board[0][1] === board[1][1] === board[2][1] && board[0][1] !== " ") {
  winner += board[0][1];
} else if (board[0][2] === board[1][2] === board[2][2] && board[0][2] !== " ") {
  winner += board[0][2];
} else if (board[0][0] === board[1][1] === board[2][2] && board[0][0] !== " ") {
  winner += board[0][0];
} else if (board[2][0] === board[1][1] === board[0][2] && board[2][0] !== " ") {
  winner += board[2][0];
} else winner += 'No one won'; */

