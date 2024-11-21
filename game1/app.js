let userScore = 0;
let comScore= 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("com-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices= ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats "+ convertToWord(computerChoice) +" You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow')
    },1000)
}

function lose(userChoice, computerChoice){
    comScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_p.innerHTML = convertToWord(userChoice) + " lose to "+ convertToWord(computerChoice) +" You lose";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow')
    },1000)
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_p.innerHTML = convertToWord(userChoice) + " equals "+ convertToWord(computerChoice) +" Draw";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('gray-glow')
    },1000)
    
}
function game(userChoice){
    const computerChoice  = getComputerChoice();
    // console.log("Computer choice => " + computerChoice);
    // console.log("User choice => " + userChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
        // console.log("hey you clicked on rock");
    })
    paper_div.addEventListener('click', function(){
        game("p");
        // console.log("hey you clicked on paper")
    })
    scissors_div.addEventListener('click',function(){
        game("s");
        // console.log("hey you click on scissors");
    })
}
main();