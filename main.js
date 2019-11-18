let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const schere_div = document.getElementById("schere");
const stein_div = document.getElementById("stein");
const papier_div = document.getElementById("papier");


function getComputerChoice() {
const choices = ['schere', 'stein', 'papier'];
const randomNumber = Math.floor(Math.random() * 3);
return choices [randomNumber];
}

function convertToWord(letter) {
  if (letter === "stein") return "Stein";
  if (letter === "schere") return "Schere";
  if (letter === "papier") return "Papier";
}

function win(userChoice, computerChoice) {
const smallUserWord = "Spieler".fontsize(3).sub();
const smallCompWord = "Comp".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice);
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} schlägt ${convertToWord(computerChoice)}${smallCompWord}. Du hast gewonnen!`;
userChoice_div.classList.add("green-glow");
setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}


function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "Spieler".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} unterliegt ${convertToWord(computerChoice)}${smallCompWord}. Du hast verloren!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "Spieler".fontsize(3).sub();
  const smallCompWord = "Comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gegen ${convertToWord(computerChoice)}${smallCompWord}. Unentschieden!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 300);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "steinschere":
    case "papierstein":
    case "scherepapier":
      win(userChoice, computerChoice);
    break;
    case "steinpapier":
    case "papierschere":
    case "scherestein":
      lose(userChoice, computerChoice);
    break;
    case "steinstein":
    case "papierpapier":
    case "schereschere":
      draw(userChoice, computerChoice);
    break;
}
}

game("c");

function main() {
  schere_div.addEventListener('click', function() {
  game("schere");
  }
  )

  stein_div.addEventListener('click', function() {
  game("stein");
  }
  )

  papier_div.addEventListener('click', function() {
  game("papier");
  })
}

main();
