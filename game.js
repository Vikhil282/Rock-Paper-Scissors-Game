let userScore = 0;
let compScore = 0;
let chocies = document.querySelectorAll(".choice");
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const msgBox = document.querySelector(".msg-box");
const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#computer-score");
const drawGame = () => {
  // console.log("Game was draw!");
  msgBox.innerText = "Game was draw!, Play Again!!";
  msgBox.style.backgroundColor = "rgb(112, 126, 134)";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorep.innerText = userScore;
    // console.log("You win");
    msgBox.innerText = `You win your ${userChoice} beats ${compChoice}`;
    msgBox.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorep.innerText = compScore;
    // console.log("You lose");
    msgBox.innerText = `You lose ${userChoice} beats your ${compChoice}`;
    msgBox.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  // console.log("User Choice =", userChoice);
  const compChoice = genCompChoice();
  // console.log("Computer Choice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
chocies.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
