const Shape = require('./shape');

class Circle extends Shape {
    constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
    
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
    }
   
}

module.exports = Circle;