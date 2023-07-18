const fs = require('fs');
const { Shape, Triangle, Circle, Square, Splatter, Pentagon, Hexagon } = require('./shapes');

//  shape classes
const shapeTypesMap = {
  triangle: Triangle,
  circle: Circle,
  square: Square,
  splatter: Splatter,
  pentagon: Pentagon,
  hexagon: Hexagon,
};

// generate the SVG logo based on user inputs
function generateLogo(text, textColor, shapeType, shapeColor) {
    const ShapeClass = shapeTypesMap[shapeType.toLowerCase()];
    if (!ShapeClass) {
      throw new Error('Shape not found. Shapes currently available: triangle, circle, square, splatter, pentagon, or hexagon.');
    }
  
    const shape = new ShapeClass(shapeColor);
    const svg = shape.render(text, textColor);
    const svgFileName = 'logo.svg';
  
    fs.writeFileSync(svgFileName, svg);
  
    console.log(`Generated ${svgFileName}`);
  }
  
  module.exports = { generateLogo };
