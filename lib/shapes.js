class Shape {
    constructor(shapeType, shapeColor) {
      this.shapeType = shapeType;
      this.shapeColor = shapeColor;
    }

    getShapeSVG() {
      return '';
    }
    render() {
      // SVG shape size 
      return `<svg width="300" height="200">${this.getShapeSVG()}</svg>`;
    }
  }

// ADD ALL SHAPE SVG CODES 

   // Get SVG triangle code
  class Triangle extends Shape {
    constructor(shapeColor) {
      super('triangle', shapeColor);
    }
    getShapeSVG() {
      return `<polygon points="150,10 75,180 225,180" fill="${this.shapeColor}" />`;
    }
  }


   // Get SVG circle code
  class Circle extends Shape {
    constructor(shapeColor) {
      super('circle', shapeColor);
    }
    getShapeSVG() { 
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }


   // Get SVG square code
  class Square extends Shape {
    constructor(shapeColor) {
      super('square', shapeColor);
    }
    getShapeSVG() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`;
    }
  }


   // Get SVG pentagon code
  class Pentagon extends Shape {
    constructor(shapeColor) {
      super('pentagon', shapeColor);
    }
    getShapeSVG() {
      return `<polygon points="150,40 215,105 180,185 120,185 85,105" fill="${this.shapeColor}" />`;
    }
  }
  

   // Get SVG hexagon code
  class Hexagon extends Shape {
    constructor(shapeColor) {
      super('hexagon', shapeColor);
    }
    getShapeSVG() {
      return `<polygon points="150,30 250,75 250,150 150,195 50,150 50,75" fill="${this.shapeColor}" />`;
    }
  }
  


  module.exports = { Shape, Triangle, Circle, Square, Pentagon, Hexagon };
