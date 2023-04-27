const Shape = require('./shape');

// Circle class data

class Circle extends Shape {
    constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
    
    }
    // renders text, text position and text color
    renderText() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    //render function to return shape and color
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
    }
   
}

module.exports = Circle;