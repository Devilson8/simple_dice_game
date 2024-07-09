const btnRoll = document.querySelector(".btn_roll");
const btnRestart = document.querySelector(".btn_restart");
let diceImage1 = document.querySelector(".dice_1");
let diceImage2 = document.querySelector(".dice_2");
let winnerDecision = document.querySelector(".winner_decision");
let winnerDecisionOverlay = document.querySelector(".winner_decision_overlay");
let playing = true;
let theOverlay = document.querySelector(".overlay");

let player1Point = document.querySelector(".player1_point");
let player2Point = document.querySelector(".player2_point");

let hidden = function () {
  btnRoll.classList.add("hidden");
  btnRestart.classList.remove("hidden");
  theOverlay.classList.remove("hidden");
  winnerDecisionOverlay.classList.remove("hidden");
};

let score1 = 0;
let score2 = 0;

btnRestart.classList.add("hidden");
theOverlay.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    let randomDice1 = Math.trunc(Math.random() * 6) + 1;
    let randomDice2 = Math.trunc(Math.random() * 6) + 1;

    score1 += randomDice1;
    score2 += randomDice2;
    player1Point.textContent = score1;
    player2Point.textContent = score2;

    diceImage1.src = `images/dice${randomDice1}.png`;
    diceImage2.src = `images/dice${randomDice2}.png`;

    winnerDecision.classList.add("hidden");

    if (score1 >= 100 && score1 > score2) {
      playing = false;
      hidden();
      winnerDecisionOverlay.textContent = `Player 1 won with ${score1} points!🎉`;
    } else if (score2 >= 100 && score2 > score1) {
      playing = false;
      hidden();
      winnerDecisionOverlay.textContent = `Player 2 won with ${score2} points!🎉`;
    }
  }
});

btnRestart.addEventListener("click", function () {
  score1 = 0;
  score2 = 0;
  player1Point.textContent = 0;
  player2Point.textContent = 0;
  diceImage1.src = `images/dice${6}.png`;
  diceImage2.src = `images/dice${6}.png`;
  playing = true;
  btnRoll.classList.remove("hidden");
  btnRestart.classList.add("hidden");
  theOverlay.classList.add("hidden");
  winnerDecisionOverlay.classList.add("hidden");
  winnerDecision.classList.remove("hidden");
});
