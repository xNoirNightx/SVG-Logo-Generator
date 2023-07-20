const fs = require('fs');
const { Shape, Triangle, Circle, Square, Pentagon, Hexagon } = require('./shapes');

//  shape classes
const shapeTypesMap = {
  triangle: Triangle,
  circle: Circle,
  square: Square,
  pentagon: Pentagon,
  hexagon: Hexagon,
};

// generate the SVG logo based on user inputs
function generateLogo(text, textColor, shapeType, shapeColor) {
  const ShapeClass = shapeTypesMap[shapeType.toLowerCase()];
  if (!ShapeClass) {
    throw new Error('Shape not found. Shapes currently available: triangle, circle, square, pentagon, or hexagon.');
  }

  const shape = new ShapeClass(shapeColor);
  const shapeSVG = shape.getShapeSVG();

  // Add text element to the SVG
  const textElement = `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>`;

  // Combine the shape SVG and the text element
  const svg = `<svg width="300" height="200">${shapeSVG}${textElement}</svg>`;

  const svgFileName = 'logo.svg';

  fs.writeFileSync(svgFileName, svg);

  console.log(`Generated ${svgFileName}`);
}

module.exports = { generateLogo };