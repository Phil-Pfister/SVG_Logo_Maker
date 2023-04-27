const Shape = require('./shape');

// triangle class data
class Triangle extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor);
        
    }
    // renders text, text position and text color
    renderText() {
             return `<text x="152" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
         }
    //render function to return shape and color
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`
    }
}

module.exports = Triangle;