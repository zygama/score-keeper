var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var scoreLimit = 5;

var scoreP1Span = document.getElementById("scorePlayerOne");
var scoreP2Span = document.getElementById("scorePlayerTwo");
var scoreLimitP = document.getElementById("scoreLimit");
var scoreLimitInput = document.getElementById("scoreLimitInput");

var buttonPlayerOne = document.getElementById("buttonPlayerOne");
var buttonPlayerTwo = document.getElementById("buttonPlayerTwo");
var buttonReset = document.getElementById("buttonReset");

console.log(scoreP1Span);
console.log(scoreP2Span);
console.log(scoreLimitP);

// ============= UPDATE VARIABLES ============= //

function updateP1Score(p_scoreToUpdate) {
  if (p_scoreToUpdate !== undefined) {
    scoreP1Span.textContent = `${p_scoreToUpdate}`;
    scorePlayerOne = p_scoreToUpdate;
  } else {
    scoreP1Span.textContent = `${scorePlayerOne}`;
  }
}

function updateP1ScoreColor(p_color) {
  scoreP1Span.style.color = p_color;
}

function updateP2Score(p_scoreToUpdate) {
  if (p_scoreToUpdate !== undefined) {
    scoreP2Span.textContent = `${p_scoreToUpdate}`;
    scorePlayerTwo = p_scoreToUpdate;
  } else {
    scoreP2Span.textContent = `${scorePlayerTwo}`;
  }
}

function updateP2ScoreColor(p_color) {
  scoreP2Span.style.color = p_color;
}

function updateScoreLimit() {
  scoreLimitP.textContent = `Playing to: ${scoreLimit}`;
}
// ============= END OF UPDATE VARIABLES ============= //


// ============= EVENTS LISTENERS FUNCTIONS ============= //

function onClickButtonP1() {
  if (!(scorePlayerOne >= scoreLimit || scorePlayerTwo >= scoreLimit)) {
    console.log("oui");
    scorePlayerOne += 1;
    updateP1Score();
    if (scorePlayerOne === scoreLimit) {
      updateP1ScoreColor("green");
    }
  }
}

function onClickButtonP2() {
  if (!(scorePlayerOne >= scoreLimit || scorePlayerTwo >= scoreLimit)) {
    console.log("oui");
    scorePlayerTwo += 1;
    updateP2Score();
    if (scorePlayerTwo === scoreLimit) {
      updateP2ScoreColor("green");
    }
  }
}

function resetGame() {
  updateP1Score(0);
  updateP2Score(0);
  updateP1ScoreColor("black");
  updateP2ScoreColor("black");
}

function onClickButtonReset() {
  resetGame();
}

function onInputHitted() {
  resetGame();
  scoreLimit = Number(scoreLimitInput.value);
  updateScoreLimit(scoreLimit);
}
// ============= END OF EVENTS LISTENERS FUNCTIONS ============= //

scoreLimitP.textContent = `Playing to: ${scoreLimit}`;

buttonPlayerOne.addEventListener("click", onClickButtonP1);
buttonPlayerTwo.addEventListener("click", onClickButtonP2);
buttonReset.addEventListener("click", onClickButtonReset);
scoreLimitInput.addEventListener("change", onInputHitted);
