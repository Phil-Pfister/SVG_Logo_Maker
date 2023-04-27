const Shape = require('./shape');

// triangle class data
class Triangle extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor);
        
    }
    //render function to return shape and color
    render() {
        return `<polygon points="150,10 260,150 40,150" fill="${this.fillColor}" />`
    }
}

module.exports = Triangle;