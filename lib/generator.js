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

