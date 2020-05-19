let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

// Bad
// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

//Good
[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);