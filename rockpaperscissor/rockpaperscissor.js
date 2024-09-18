let score = {
    won: 0,
    lost: 0,
    tie: 0,
};
let para=document.querySelector("#para");
let hi3 = document.querySelector("#hi3");
let hi2 = document.querySelector("#hi2");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let resultfinal = document.querySelector("#resultfinal");
let resetButton = document.querySelector("#reset");
let hi9=document.querySelector(".hi9");
let reset1=document.querySelector(".reset1");
let computerChoice;
let userChoice;

function check() {
    let random = Math.random() * 3;
    if (random > 0 && random <= 1) {
        computerChoice = 'rock';
    } else if (random > 1 && random <= 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }
}

function resetGame() {
    
    
    reset1.classList.add("hide");
    hi9.classList.remove("hide");
    hi2.innerHTML = '0';
    hi3.innerHTML = '0';
    resultfinal.innerHTML = '';
    score.won = 0;
    score.lost = 0;
    score.tie = 0;
}

resetButton.addEventListener('click', resetGame);

button1.addEventListener('click', () => {
    userChoice = 'rock';
    check();
    if (userChoice === computerChoice) {
        resultfinal.innerHTML = "It is a Tie";
        resultfinal.style.color = 'white';
        score.tie++;
    } else if (computerChoice == 'paper') {
        resultfinal.innerHTML = 'You Lost';
        resultfinal.style.color = 'red';
        score.lost++;
        hi2.innerHTML = score.lost;
    } else {
        resultfinal.innerHTML = 'You Won';
        resultfinal.style.color = 'green';
        score.won++;
        hi3.innerHTML = score.won;
    }
    console.log(`Computer choice is ${computerChoice} and your choice is ${userChoice}`);
    winner();
});

button2.addEventListener('click', () => {
    userChoice = 'scissor';
    check();
    if (userChoice === computerChoice) {
        resultfinal.innerHTML = "It is a Tie";
        resultfinal.style.color = 'white';
        score.tie++;
    } else if (computerChoice == 'paper') {
        resultfinal.innerHTML = 'You Won';
        resultfinal.style.color = 'green';
        score.won++;
        hi3.innerHTML = score.won;
    } else {
        resultfinal.innerHTML = 'You Lost';
        resultfinal.style.color = 'red';
        score.lost++;
        hi2.innerHTML = score.lost;
    }
    console.log(`Computer choice is ${computerChoice} and your choice is ${userChoice}`);
    winner();
});

button3.addEventListener('click', () => {
    userChoice = 'paper';
    check();
    if (userChoice === computerChoice) {
        resultfinal.innerHTML = "It is a Tie";
        resultfinal.style.color = 'white';
        score.tie++;
    } else if (computerChoice == 'scissor') {
        resultfinal.innerHTML = 'You Lost';
        resultfinal.style.color = 'red';
        score.lost++;
        hi2.innerHTML = score.lost;
    } else {
        resultfinal.innerHTML = 'You Won';
        resultfinal.style.color = 'green';
        score.won++;
        hi3.innerHTML = score.won;
    }
    console.log(`Computer choice is ${computerChoice} and your choice is ${userChoice}`);
    winner();
});
function winner(){
if(score.won==13||score.lost==13){
hi9.classList.add("hide");
reset1.classList.remove("hide");
if(score.won==13){
    console.log("you have won");
    para.innerText="Congratualation,You won the game";
    para.style.color="gold";
    
}
else{
    console.log("computer has won");
    para.innerText="Oops ! You lost the game";
    para.style.color="red";
}

}
}

    
