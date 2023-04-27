const Shape = require('./shape');

// Circle class data

class Circle extends Shape {
    constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
    
    }
    //render function to return shape and color
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
    }
   
}

module.exports = Circle;