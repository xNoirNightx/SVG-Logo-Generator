const { Shape, Triangle, Circle, Square, Pentagon, Hexagon } = require('./shapes');

// loop shapes 
describe('Shape classes', () => {
  const shapes = [
    { ShapeClass: Triangle, svgPath: '<polygon points="150,10 75,180 225,180" fill="blue" />' },
    { ShapeClass: Circle, svgPath: '<circle cx="150" cy="100" r="80" fill="green" />' },
    { ShapeClass: Square, svgPath: '<rect x="50" y="50" width="200" height="200" fill="yellow" />' },
    { ShapeClass: Pentagon, svgPath: '<polygon points="150,40 215,105 180,185 120,185 85,105" fill="orange" />' },
    { ShapeClass: Hexagon, svgPath: '<polygon points="150,30 250,75 250,150 150,195 50,150 50,75" fill="cyan" />' },
  ];

//   test to return svg path ????
shapes.forEach(({ ShapeClass, svgPath }) => {
    describe(ShapeClass.name, () => {
      test(`${ShapeClass.name} should return correct SVG path`, () => {
        const shape = new ShapeClass('color');
        expect(shape.getShapeSVG()).toBe(svgPath);
      });
    });
  });
});