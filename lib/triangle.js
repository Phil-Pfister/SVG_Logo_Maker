const Shape = require('./shape');

class Triangle extends Shape {
    constructor(text, textColor, fillColor, innerSVG) {
        super(text, textColor, fillColor);
        this.innerSVG = innerSVG;
    }
    renderShape() {
        return `${this.innerSVG} fill="${this.fillColor}" />`
    }
}

module.exports = Triangle;