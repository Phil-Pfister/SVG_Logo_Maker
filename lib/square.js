const Shape = require('./shape');

// Square class data

class Square extends Shape {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor);
        
    }
    // renders text, text position and text color
    renderText() {
        return `<text x="148" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    //render function to return shape and color
    render() {
        return `<rect width="150" height="150" x="70" y="25" fill="${this.fillColor}" />`
    }

}


module.exports = Square;