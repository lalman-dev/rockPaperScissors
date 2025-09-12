let computerScore = 0;
let userScore = 0;

// Dom Element

const computerScoreSpan = document.querySelector(".computer-score");
const userScoreSpan = document.querySelector(".user-score");
const computerChoiceBtn = document.querySelector(".choice-icon");
const userChoiceBtn = document.querySelectorAll(".choice");

const result = document.querySelector(".start-button");

// computer's choice function

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.random();

  randomNum = randomNum * 3;
  randomNum = Math.floor(randomNum);

  let choice = choices[randomNum];
  return choice;
}

// win loose and draw function
//win function
function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  let resultMessage = `You win, ${userChoice} beats ${computerChoice}`;
  result.innerHTML = resultMessage;
}
//loose function
function loose(userChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  let resultMessage = `You loose, ${computerChoice} beats ${userChoice}`;
  result.innerHTML = resultMessage;
}
// draw case
function draw(userChoice) {
  let resultMessage = `Its draw, both choose ${userChoice}`;
  result.innerHTML = resultMessage;
}

//GAme logic
function game(userChoice) {
  let computerChoice = getComputerChoice();

  if (computerChoice === "rock") {
    computerChoiceBtn.innerHTML = "✊🏼";
  } else if (computerChoice === "paper") {
    computerChoiceBtn.innerHTML = "✋🏼";
  } else {
    computerChoiceBtn.innerHTML = "✌🏼";
  }
  switch (userChoice + computerChoice) {
    // Winning condition
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;

    // Loosing condition
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      loose(userChoice, computerChoice);
      break;

    // Draw condition
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice);
      break;
  }
}
// Add event listeners to the button
userChoiceBtn.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
}) 
