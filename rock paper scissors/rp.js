let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
function convert(letter) {
    if (letter == "r") return "ROCK";
    if (letter == "s") return "SCISSORS";
    return "PAPER";
}

function wins(user, computer) {
    userscore++;
    userscore_span.innerHTML = userscore + ":";
    computerscore_span.innerHTML = compscore;
    // const smalluser = "user".fontsize(3).sub;
    // const smallcomp = "computer".fontsize(3).sub;
    result_div.innerHTML = convert(user) + " beats " +
        convert(computer) + " you win !!!! ";
}
function loses(user, computer) {
    compscore++;
    userscore_span.innerHTML = userscore + ":";
    computerscore_span.innerHTML = compscore;
    // const smalluser = "user".fontsize(3).sub;
    // const smallcomp = "computer".fontsize(3).sub;
    result_div.innerHTML = convert(user) + " loses to " +
        convert(computer) + " you lost !!!! ";
}

function draw() {


    // const smalluser = "user".fontsize(3).sub;
    // const smallcomp = "computer".fontsize(3).sub;
    result_div.innerHTML = "DRAW!";
}


function getcompchoice() {
    const choices = ['r', 'p', 's'];
    const randomnum = Math.floor(Math.random() * 3);// never goes over 3
    return choices[randomnum];
}

function game(userchoice) {
    const computerchoice = getcompchoice();
    switch (userchoice + computerchoice) {
        case "pr":
        case "rs":
        case "sp":
            wins(userchoice, computerchoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            loses(userchoice, computerchoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userchoice, computerchoice);

    }

}
rock_div.addEventListener('click', function () {
    game("r");
})
paper_div.addEventListener('click', function () {
    game("p");
})
scissor_div.addEventListener('click', function () {
    game("s");
})

//main();