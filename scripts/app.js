const quizForm = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "90°", "3", "all sides are equal", "3"];
var testArray = [];

function calculateScore() {
  let score = 0;
  let index = 0;

  const formAnswers = new FormData(quizForm);

  for (let item of formAnswers.values()) {
    testArray.push(item);
  }

  if (testArray.length === correctAnswers.length) {
    for (let value of formAnswers.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    testArray = [];
    output.innerText = "Your score is " + score + "!";
  } else {
    output.innerText = "Please select atleast one answer for each question";
    testArray.length = [];
  }
}

submitButton.addEventListener("click", calculateScore);
