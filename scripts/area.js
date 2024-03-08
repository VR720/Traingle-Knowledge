const inputs = document.querySelectorAll(".inputs");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#check-button");

function calculateProduct(a, b) {
  var result = a * b;
  return result;
}

function calculateArea() {
  if (inputs[0].value <= 0 || inputs[1].value <= 0) {
    output.innerText = "please enter valid values";
  } else {
    var answer1 = calculateProduct(
      Number(inputs[0].value),
      Number(inputs[1].value)
    );

    var area = answer1 / 2;
    output.innerText = "The area of Triangle is " + area + " cm2";
  }
}
checkButton.addEventListener("click", calculateArea);
