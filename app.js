

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 's') return 'Scissors';
    if (letter === 'p') return 'Paper';
}
function win(userChoice, compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(compChoice)}${smallCompWord}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 300);
};

function lose(userChoice, compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} Loses to ${convertToWord(userChoice)}${smallUserWord}. You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 300);
};

function draw(userChoice, compChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} is the same as ${convertToWord(userChoice)}${smallUserWord}. Its a tie!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow');}, 300);
};


function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "sp":
        case "pr":
        case "rs":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userChoice, compChoice);
            break;
     
    }
}

function main(){
    rock_div.addEventListener('click', function(){
       game('r');
    })

    paper_div.addEventListener('click', function(){
        game('p');
    })

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}
main();