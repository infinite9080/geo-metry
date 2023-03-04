document.getElementById("btn-triangle").addEventListener("click", function () {
  // triangle start
  const triangle = calculate1n4n5(
    "triangle-base-field",
    "triangle-height-field",
    "triangle-b-text",
    "triangle-h-text"
  );

  stringToNumber("triangle-total", triangle, "close-result-1");

  document.getElementById("hidden-triangle").style.display = "block";

  clickCounter("order-1");
  // triangle end
});
document.getElementById("btn-rhombus").addEventListener("click", function () {
  // rhombus start
  const rhombus = calculate1n4n5(
    "rhombus-d1-field",
    "rhombus-d2-field",
    "rhombus-d1-text",
    "rhombus-d2-text"
  );

  const rhombusTotal = stringToNumber(
    "rhombus-total",
    rhombus,
    "close-result-4"
  );

  document.getElementById("hidden-rhombus").style.display = "block";

  clickCounter("order-4");
  // rhombus end
});
// pentagon start
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagon = calculate1n4n5(
    "pentagon-p-field",
    "pentagon-b-field",
    "pentagon-p-text",
    "pentagon-b-text"
  );

  const pentagonTotal = stringToNumber(
    "pentagon-total",
    pentagon,
    "close-result-5"
  );
  document.getElementById("hidden-pentagon").style.display = "block";
  clickCounter("order-5");
});

// pentagon end
// rectangle start
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = calculate2n3(
    "rectangle-w-field",
    "rectangle-l-field",
    "rectangle-w-text",
    "rectangle-l-text"
  );

  const rectangleTotal = stringToNumber(
    "rectangle-total",
    rectangle,
    "close-result-2"
  );
  document.getElementById("hidden-rectangle").style.display = "block";

  clickCounter("order-2");
});

// rectangle  end
// Parallelogram start
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = calculate2n3(
      "parallelogram-b-field",
      "parallelogram-h-field",
      "parallelogram-b-text",
      "parallelogram-h-text"
    );
    const parallelogramTotal = stringToNumber(
      "parallelogram-total",
      parallelogram,
      "close-result-3"
    );
    document.getElementById("hidden-parallelogram").style.display = "block";
    clickCounter("order-3");
  });

// Parallelogram end
// Ellipse start
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipse = calculate6(
    "ellipse-a-field",
    "ellipse-b-field",
    "ellipse-a-text",
    "ellipse-b-text"
  );

  const ellipseTotal = stringToNumber(
    "ellipse-total",
    ellipse,
    "close-result-6"
  );
  document.getElementById("hidden-ellipse").style.display = "block";
  clickCounter("order-6");
});

// Ellipse end
