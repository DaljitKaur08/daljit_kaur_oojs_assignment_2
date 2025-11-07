'use strict';

// Shape class (based on object and class examples)
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // returns shape info (same as assignment)
  getInfo() {
    return "Shape: " + this.name + ", Colour: " + this.color;
  }
}

// DOM elements
const shapeSelect = document.getElementById('shape');
const colorSelect = document.getElementById('color');
const createButton = document.getElementById('createButton');
const grid = document.getElementById('grid');
const info = document.getElementById('info');

// Array to store created shapes
const shapes = [];

// Event: when create button is clicked
createButton.addEventListener('click', function () {
  const selectedShape = shapeSelect.value;
  const selectedColor = colorSelect.value;

  // Create a Shape object
  const newShape = new Shape(selectedShape, selectedColor);
  shapes.push(newShape);

  // Create shape element
  const box = document.createElement('div');
  box.className = selectedShape;
  box.style.backgroundColor = selectedColor;

  // On click, show info
  box.addEventListener('click', function () {
    info.textContent = "Unit " + shapes.length + ": " +
      selectedColor + " " + selectedShape;
  });

  // Add to grid
  grid.appendChild(box);

  // Stop at 20
  if (shapes.length === 20) {
    alert("You already created 20 shapes!");
    createButton.disabled = true;
  }
});
