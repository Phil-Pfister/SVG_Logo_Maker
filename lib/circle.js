const Shape = require('./shape');

class Circle extends Shape {
    constructor(text, textColor, fillColor, innerSVG) {
    super(text, textColor, fillColor, innerSVG);
    
    }
    renderShape() {
        return `${this.innerSVG} fill="${this.fillColor}" />`
    }
   
}

module.exports = Circle;