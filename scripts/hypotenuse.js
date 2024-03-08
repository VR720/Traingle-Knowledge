const inputs = document.querySelectorAll(".inputs");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function sumOfSquares(a, b) {
  var result = a ** 2 + b ** 2;
  return result;
}

function calculateHypotenuse() {
  if (inputs[0].value <= 0 || inputs[1].value <= 0) {
    output.innerText = "please enter valid values";
  } else {
    let answer1 = sumOfSquares(
      Number(inputs[0].value),
      Number(inputs[1].value)
    );
    output.innerText =
      "The length of hypotenuse is " + Math.sqrt(answer1).toFixed(2) + "cm";
  }
}

checkButton.addEventListener("click", calculateHypotenuse);
