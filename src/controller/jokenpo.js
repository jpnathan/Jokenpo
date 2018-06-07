/**
 * This Class has a unique responsibility: to be the referee of jokenpo game
*/

class Jokenpo {

  /**
   * Obs: I could use async/await but it's unnecessary for this simple problem solution
  */
  getResult(param, callback) {
      
    const { playerOne, playerTwo } = param;
    if (!playerOne || !playerTwo) callback('Please, inform correctly the move for each player!', null);

    const winner = compareMoves(playerOne, playerTwo);

    if(winner)
      callback(null, winner);
    else
      callback('The moves provided by players is not the jokenpo game!', null);
  }
}

function compareMoves(playerOneValue, playerTwoValue) {
  
  if (playerOneValue === playerTwoValue) return 'Game tied! Play again!';
  
  if (playerOneValue === 'tesoura')
    return (playerTwoValue === 'papel') ? 'Player One Win!' : 'Player two Win!';

  if (playerOneValue === 'papel')    
    return (playerTwoValue === 'pedra') ? 'Player One Win!' : 'Player two Win!';

  if (playerOneValue === 'pedra')
    return (playerTwoValue === 'tesoura') ? 'Player One Win!' : 'Player two Win!';
}

module.exports = new Jokenpo();