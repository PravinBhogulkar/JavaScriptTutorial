const score = JSON.parse(localStorage.getItem('Score')) || { 
wins: 0, 
loses: 0, 
ties: 0 
};

updateScoreElement();
// document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;  
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';            
        } else if (computerMove === 'paper') {
            result = 'You win.'
        } else {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        result = '';
        if (computerMove === 'rock') {
            result = 'You win.';            
        } else if (computerMove === 'paper') {
            result = 'Tie.'
        } else {
            result = 'You lose.';
        }
    } else {
        if (computerMove === 'rock') {
            result = 'Tie';            
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
    score.wins++;
    } else if (result === 'You lose.') {
    score.loses++;
    } else if (result === 'Tie.') {
    score.ties++;
    }


    localStorage.setItem('Score', JSON.stringify(score));
    console.log(JSON.parse(localStorage.getItem('Score')));                 

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="../Images/${playerMove}-emoji.png" class="move-icon"> <img src="../Images/${computerMove}-emoji.png" class="move-icon">  Computer`;

    updateScoreElement();
    //  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    //                  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}
