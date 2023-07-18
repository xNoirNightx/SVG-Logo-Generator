const { Shape, Triangle, Circle, Square, Splatter, Pentagon, Hexagon } = require('./shapes');

// loop shapes 
describe('Shape classes', () => {
  const shapes = [
    { ShapeClass: Triangle, svgPath: '<polygon points="150,10 75,180 225,180" fill="blue" />' },
    { ShapeClass: Circle, svgPath: '<circle cx="150" cy="100" r="80" fill="green" />' },
    { ShapeClass: Square, svgPath: '<rect x="50" y="50" width="200" height="200" fill="yellow" />' },
    { ShapeClass: Splatter, svgPath: 'M9.7,-17.6C12.4,-11.4,14.4,-8.3,16.6,-4.7C18.8,-1,21.2,3.3,20,6.3C18.7,9.2,13.9,10.8,9.9,15.4C6,19.9,3,27.4,-1.3,29.3C-5.7,31.1,-11.4,27.3,-17.8,23.6C-24.3,19.9,-31.4,16.2,-34.8,10.3C-38.1,4.3,-37.7,-3.9,-33,-8.4C-28.3,-12.8,-19.3,-13.6,-13.1,-18.7C-6.9,-23.8,-3.5,-33.3,0,-33.4C3.5,-33.4,7,-23.9,9.7,-17.6Z' },
    { ShapeClass: Pentagon, svgPath: '<polygon points="150,40 215,105 180,185 120,185 85,105" fill="orange" />' },
    { ShapeClass: Hexagon, svgPath: '<polygon points="150,30 250,75 250,150 150,195 50,150 50,75" fill="cyan" />' },
  ];

//   test to return svg path ????
shapes.forEach(({ ShapeClass, svgPath }) => { 

    