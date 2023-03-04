// Global variable for counter
let counter = 1;

// Div color Changer Start
const colorDivs = document.querySelectorAll(".color-div");
let lastColors = new Map();

colorDivs.forEach((colorDiv) => {
  colorDiv.addEventListener("mouseenter", () => {
    let randomColor = getRandomColor();

    while (randomColor === lastColors.get(colorDiv)) {
      randomColor = getRandomColor();
    }

    lastColors.set(colorDiv, randomColor);
    colorDiv.style.backgroundColor = randomColor;
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Div color Changer End

// calculate functions 1,4,5 start
function calculate1n4n5(num1, num2, text1, text2) {
  const base = document.getElementById(num1);
  const baseValue = parseFloat(base.value);

  const height = document.getElementById(num2);
  const heightValue = parseFloat(height.value);

  // Check if the user entered a valid number in the Input Field
  if (isNaN(baseValue) || isNaN(heightValue)) {
    window.alert("Please provide a number and press the X icon to restart it");
    return;
  }

  // Check if the user left the Input field blank
  if (base.value === "" || height.value === "") {
    window.alert("Please provide a number and press the X icon to restart it");
    return;
  }

  // Check if the user entered a positive number for base and height
  if (baseValue < 0 || heightValue < 0) {
    window.alert(
      "Please provide a positive number and press the X icon to restart it"
    );
    return;
  }

  // Input is valid - calculate the area
  const triangleBText = document.getElementById(text1);
  triangleBText.innerText = base.value;
  const triangleHText = document.getElementById(text2);
  triangleHText.innerText = height.value;

  const triangleResult = 0.5 * baseValue * heightValue;
  base.value = "";
  height.value = "";
  return triangleResult;
}
// calculate functions 1,4,5 end

// calculate functions 2,5 start
function calculate2n3(num1, num2, text1, text2) {
  const base = document.getElementById(num1);
  const baseValue = parseFloat(base.value);

  const height = document.getElementById(num2);
  const heightValue = parseFloat(height.value);

  // Check if the user entered a valid number for base and height
  if (isNaN(baseValue) || isNaN(heightValue)) {
    window.alert("Please Provide a Number and Press the X icon to restart it");
    return;
  }

  // Check if the user left either the base or height field blank
  if (base.value === "" || height.value === "") {
    window.alert("Please Provide a Number and Press the X icon to restart it");
    return;
  }

  const triangleBText = document.getElementById(text1);
  triangleBText.innerText = base.value;
  const triangleHText = document.getElementById(text2);
  triangleHText.innerText = height.value;

  const triangleResult = baseValue * heightValue;
  base.value = "";
  height.value = "";
  return triangleResult;
}
// calculate functions 2,5 end

// calculate functions 6 start
function calculate6(num1, num2, text1, text2) {
  const base = document.getElementById(num1);
  const baseValue = parseFloat(base.value);

  const height = document.getElementById(num2);
  const heightValue = parseFloat(height.value);

  // Check if the user entered a valid number for base and height
  if (isNaN(baseValue) || isNaN(heightValue)) {
    window.alert("Please Provide a Number and Press the X icon to restart it");
    return;
  }

  // Check if the user left either the base or height field blank
  if (base.value === "" || height.value === "") {
    window.alert("Please Provide a Number and Press the X icon to restart it");
    return;
  }
  const triangleBText = document.getElementById(text1);
  triangleBText.innerText = base.value;
  const triangleHText = document.getElementById(text2);
  triangleHText.innerText = height.value;

  const triangleResult = 3.14 * baseValue * heightValue;
  base.value = "";
  height.value = "";
  return triangleResult;
}
// calculate functions 6 end

// set the string in the html text and set it with value
function stringToNumber(textID, valueID, closeParameter) {
  const text = document.getElementById(textID);
  const textString = text.innerText;
  const textTransformNumber = parseFloat(textString);
  const numberTotal = valueID + textTransformNumber;
  const twoDigitFixed = parseFloat(numberTotal).toFixed(2);
  text.innerText = twoDigitFixed;
  const closeResult = document
    .getElementById(closeParameter)
    .addEventListener("click", function () {
      text.innerText = 0;
    });
}

// counter function for sorting
function clickCounter(elementId) {
  const click = document.getElementById(elementId);
  click.innerText = counter++;
  return click.innerText;
}
