'use strict';

// Shape class (simple version as per teacher)
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

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

// store shapes
const shapes = [];

// when Create button clicked
createButton.addEventListener('click', function () {
  const selectedShape = shapeSelect.value;
  const selectedColor = colorSelect.value;

  const newShape = new Shape(selectedShape, selectedColor);
  shapes.push(newShape);

  // create shape box
  const box = document.createElement('div');
  box.classList.add('shape', selectedShape);
  box.style.backgroundColor = selectedColor;

  // when clicking shape, show info
  box.addEventListener('click', function () {
    info.textContent = "Unit " + shapes.length + ": " +
      selectedColor + " " + selectedShape;
  });

  // add to grid
  grid.appendChild(box);

  // limit 20 shapes
  if (shapes.length === 20) {
    alert("You already created 20 shapes!");
    createButton.disabled = true;
  }
});
